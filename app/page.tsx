"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ZapIcon, LinkIcon, DollarSignIcon } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    setMessageType("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("¡Gracias! Nos pondremos en contacto contigo pronto.")
        setMessageType("success")
        setEmail("")
      } else {
        setMessage(data.error || "Hubo un error al enviar tu solicitud. Inténtalo de nuevo.")
        setMessageType("error")
      }
    } catch (error) {
      setMessage("Hubo un error al enviar tu solicitud. Inténtalo de nuevo.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <Link href="#" className="flex items-center justify-center font-bold" prefetch={false}>
            <Image src="/favicon-32x32.png" alt="Brocket.ai Logo" width={24} height={24} className="mr-2" />
            <span>Brocket.ai</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex justify-center">
          <div className="w-full max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
                    Convierte los datos de tu ERP en respuestas instantáneas.
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    Brocket.ai es el agente de IA que permite a tu equipo operacional consultar información compleja en
                    lenguaje natural, sin esperas ni costos de consultoría.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Solicitar Información
                  </button>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Saber Más
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-3xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="text-sm text-slate-600">Sistema conectado</div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-sm text-blue-800 font-medium">
                            "¿Cuál fue la venta total del mes pasado?"
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-3">
                          <div className="text-sm text-slate-700">
                            Las ventas totales de noviembre fueron $847,320 con un crecimiento del 12% respecto al mes
                            anterior.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Respuesta en 0.8s</span>
                        <span>Datos actualizados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="w-full max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Diseñado para la Agilidad de tu Negocio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">
                  Tu empresa, más rápida y eficiente.
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empoderamos a tus equipos para que tomen decisiones basadas en datos, sin las barreras de la
                  tecnología tradicional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <div className="grid gap-1 text-center">
                <ZapIcon className="h-8 w-8 mx-auto text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Facilidad de Uso</h3>
                <p className="text-sm text-slate-600">
                  Tu equipo solo necesita preguntar. Olvídate de menús complejos, filtros confusos y capacitaciones
                  largas.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <LinkIcon className="h-8 w-8 mx-auto text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Practicidad Inmediata</h3>
                <p className="text-sm text-slate-600">
                  Nos conectamos a tus sistemas existentes para darte respuestas basadas en tus datos reales y
                  actualizados.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <DollarSignIcon className="h-8 w-8 mx-auto text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Reducción de Costos</h3>
                <p className="text-sm text-slate-600">
                  Obtén nuevas métricas e informes al instante sin depender de costosos asesores técnicos para cada
                  cambio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 border-t flex justify-center">
          <div className="w-full max-w-7xl px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900">
                  Empodera a tu equipo con datos al instante.
                </h2>
                <p className="mx-auto max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Te interesa saber cómo Brocket.ai puede transformar tu operación? Déjanos tu email y te
                  contactaremos.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Ingresa tu email" 
                    className="max-w-lg flex-1" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting || !email.trim()}
                  >
                    {isSubmitting ? "Enviando..." : "Contactar"}
                  </Button>
                </form>
                {message && (
                  <p className={`text-sm ${
                    messageType === "success" ? "text-green-600" : "text-red-600"
                  }`}>
                    {message}
                  </p>
                )}
                <p className="text-xs text-slate-500">Sin spam. Solo una conversación para entender tus necesidades.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex justify-center py-6 border-t bg-white">
        <div className="w-full max-w-7xl px-4 md:px-6 flex flex-col gap-2 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Brocket.ai. Todos los derechos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500" prefetch={false}>
              Términos de Servicio
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500" prefetch={false}>
              Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
