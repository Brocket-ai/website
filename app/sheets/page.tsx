import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { SheetsNav } from "@/components/sheets-nav"

export const metadata: Metadata = {
  title: "Brocket for Sheets",
  description:
    "Brocket for Sheets is a Google Sheets add-on that brings the Brocket analyst into your spreadsheet: ask in plain language, get tables, formulas and native charts written back into the sheet.",
}

const steps = [
  {
    title: "Open the add-on",
    body: "In Google Sheets, go to Extensions and open Brocket for Sheets. A sidebar opens next to your data.",
  },
  {
    title: "Connect your account",
    body: "Sign in to Brocket and authorize the spreadsheet you want to work on. Brocket only receives the file you choose.",
  },
  {
    title: "Ask in plain language",
    body: "Select a range and describe what you need. Brocket reads the range, runs the analysis and writes the result back.",
  },
]

const capabilities = [
  {
    title: "Tables written into the sheet",
    body: "Summaries land in a new tab with formatting and number formats already applied.",
  },
  {
    title: "Native charts",
    body: "Column, bar, line, area, scatter and pie charts are created as real Google Sheets charts, linked to your cells.",
  },
  {
    title: "Formulas that recalculate",
    body: "Brocket writes formulas, not frozen values, so your sheet keeps working the way you expect.",
  },
  {
    title: "Your company's data sources",
    body: "Cross your spreadsheet with the sources your company has connected to Brocket, without leaving the file.",
  },
  {
    title: "Changes you approve",
    body: "Before replacing existing data or formulas, Brocket shows you the range and waits for you to apply or discard.",
  },
  {
    title: "Private conversations",
    body: "Each person's chats are private per file. Sharing a spreadsheet shares its cells, never your conversations.",
  },
]

export default function SheetsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f4fb" }}>
      <SheetsNav />

      <section style={{ padding: "72px 24px 88px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#7f77dd",
              marginBottom: "18px",
            }}
          >
            Google Sheets add-on
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#1e1a3a",
              marginBottom: "20px",
            }}
          >
            Brocket for Sheets
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.6,
              color: "#6b6780",
              maxWidth: "660px",
              margin: "0 auto 32px",
            }}
          >
            Your Brocket analyst, inside the spreadsheet. Ask in plain language and get
            tables, formulas and native charts written straight into your sheet.
          </p>
          <a
            href="https://app.brocket.xyz/integrations/sheets/help"
            style={{
              display: "inline-block",
              backgroundColor: "#7f77dd",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "14px 30px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            How it works
          </a>
        </div>
      </section>

      <section style={{ padding: "88px 24px", backgroundColor: "#f5f4fb" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#1e1a3a",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Getting started
          </h2>
          <ol
            className="sheets-grid"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {steps.map((step, i) => (
              <li key={step.title} className="sheets-card">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #e6e3fb 0%, #dcd5ff 100%)",
                    color: "#534ab7",
                    fontWeight: 700,
                    fontSize: "15px",
                    marginBottom: "16px",
                  }}
                >
                  {i + 1}
                </span>
                <h3 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.01em", color: "#1e1a3a", marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#6b6780" }}>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ padding: "88px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#1e1a3a",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            What it does in your sheet
          </h2>
          <div className="sheets-grid">
            {capabilities.map((c) => (
              <div key={c.title} className="sheets-card">
                <h3 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.01em", color: "#1e1a3a", marginBottom: "8px" }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#6b6780" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 24px", backgroundColor: "#f5f4fb" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#1e1a3a", marginBottom: "14px" }}>
            Access
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "#6b6780", marginBottom: "10px" }}>
            Brocket for Sheets requires a Brocket account and edit access to the spreadsheet.
            If your company already uses Brocket, ask your administrator for an invitation.
          </p>
          <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#7a768f" }}>
            Questions about the add-on: <a href="mailto:support@brocket.xyz" style={{ color: "#534ab7" }}>support@brocket.xyz</a>
          </p>
        </div>
      </section>

      <div style={{ backgroundColor: "#1e1a3a", padding: "0 24px 28px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "28px" }}>
          <Footer />
        </div>
      </div>

      <style>{`
        .sheets-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 640px) { .sheets-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .sheets-grid { grid-template-columns: repeat(3, 1fr); } }
        .sheets-card {
          display: flex; flex-direction: column; align-items: flex-start;
          padding: 26px; border-radius: 16px; background: #ffffff;
          border: 1px solid #e2e0f0;
        }
      `}</style>
    </div>
  )
}
