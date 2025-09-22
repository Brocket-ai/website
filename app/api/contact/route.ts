import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email to the owner
    const { data, error } = await resend.emails.send({
      from: 'Brocket.ai Contact <onboarding@resend.dev>',
      to: ['hernanfinucci@gmail.com'],
      subject: 'Nueva consulta desde Brocket.ai',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Nueva consulta desde el sitio web</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #334155;">Información del contacto:</h3>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Fecha:</strong> ${new Date().toLocaleString('es-AR', { 
              timeZone: 'America/Argentina/Buenos_Aires'
            })}</p>
          </div>
          
          <p style="color: #64748b; margin: 20px 0;">
            Un potencial cliente ha mostrado interés en Brocket.ai y ha dejado su email para ser contactado.
          </p>
          
          <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Próximos pasos:</strong> Te recomendamos contactar a esta persona dentro de las próximas 24 horas para maximizar las oportunidades de conversión.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">
            Este email fue enviado automáticamente desde el formulario de contacto de brocket.ai
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
