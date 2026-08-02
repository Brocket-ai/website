import { NextRequest, NextResponse } from "next/server"
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"
import { z } from "zod"

const LEADS_INBOX = "leads@brocket.xyz"
const FROM = "Brocket <noreply@brocket.xyz>"

const ses = new SESv2Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY ?? "",
  },
})

const contactSchema = z.object({
  email: z.string().trim().email().max(254),
  source: z.string().max(40).optional(),
  // Honeypot: humans never see this field; bots fill it
  website: z.string().optional(),
})

// Best-effort per-instance rate limit (serverless: resets on cold start)
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.SES_ACCESS_KEY_ID || !process.env.SES_SECRET_ACCESS_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const parsed = contactSchema.safeParse(await request.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
    }
    const { email, source, website } = parsed.data

    // Honeypot tripped: pretend success so bots don't adapt
    if (website) {
      return NextResponse.json({ message: "ok" }, { status: 200 })
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const when = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: FROM,
        Destination: { ToAddresses: [LEADS_INBOX] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `Nuevo lead: ${email}${source ? ` (${source})` : ""}` },
            Body: {
              Html: {
                Data: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#1e1a3a;max-width:480px;">
          <h2 style="font-size:18px;margin:0 0 16px;">Nuevo lead desde brocket.xyz</h2>
          <p style="margin:4px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin:4px 0;"><strong>Origen:</strong> ${source ?? "sin dato"}</p>
          <p style="margin:4px 0;"><strong>Fecha:</strong> ${when} (AR)</p>
          <p style="margin:16px 0 0;font-size:13px;color:#7a768f;">Respondé este mail y le escribís directo al lead (Reply-To configurado).</p>
        </div>`,
              },
            },
          },
        },
      })
    )

    // Best-effort ack to the lead — the internal notification already succeeded
    try {
      await ses.send(
        new SendEmailCommand({
          FromEmailAddress: FROM,
          Destination: { ToAddresses: [email] },
          Content: {
            Simple: {
              Subject: { Data: "We got your demo request — Brocket" },
              Body: {
                Html: {
                  Data: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.6;color:#1e1a3a;background-color:#f5f4fb;padding:32px 16px;margin:0;">
          <div style="max-width:480px;margin:0 auto;background-color:#ffffff;border-radius:12px;border:1px solid #e2dff0;padding:40px 32px;text-align:center;">
            <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto 28px;">
              <tr>
                <td style="vertical-align:middle;">
                  <div style="height:5px;border-radius:2.5px;margin-bottom:3px;width:26px;background-color:#534ab7;"></div>
                  <div style="height:5px;border-radius:2.5px;margin-bottom:3px;width:18px;background-color:#7f77dd;"></div>
                  <div style="height:5px;border-radius:2.5px;width:11px;background-color:#afa9ec;"></div>
                </td>
                <td style="vertical-align:middle;"><span style="display:inline-block;font-size:18px;font-weight:600;letter-spacing:-0.5px;color:#1e1a3a;padding-left:10px;">brocket</span></td>
              </tr>
            </table>
            <p style="font-size:19px;font-weight:600;color:#1e1a3a;margin:0 0 6px;">Thanks for reaching out</p>
            <p style="font-size:14px;color:#3d3860;margin:0 0 24px;">We received your demo request and will get back to you within 24 hours.</p>
            <p style="font-size:12px;color:#7a768f;margin:0;">If you didn't request this, you can safely ignore this email.</p>
          </div>
        </div>`,
                },
              },
            },
          },
        })
      )
    } catch (ackError) {
      console.error("Lead ack email failed (lead already notified internally):", ackError)
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact endpoint error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
