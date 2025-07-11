import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ZapIcon, LinkIcon, DollarSignIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center font-bold" prefetch={false}>
          {/* Ejemplo de cómo usar tu logo */}
          <img src="/assets/logo-placeholder.png" alt="Brocket.ai Logo" className="h-7 w-7 mr-2" />
          <span>Brocket.ai</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Beneficios
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Convierte los datos de tu ERP en respuestas instantáneas.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Brocket.ai es el agente de IA que permite a tu equipo operacional consultar información compleja en
                    lenguaje natural, sin esperas ni costos de consultoría.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Solicitar Información
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Saber Más
                  </Link>
                </div>
              </div>
              {/* Ejemplo de cómo usar tu imagen principal */}
              <img
                src="/assets/imagen-principal-placeholder.png"
                width="550"
                height="550"
                alt="Representación visual del servicio de Brocket.ai"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
                  Diseñado para la Agilidad de tu Negocio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tu empresa, más rápida y eficiente.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empoderamos a tus equipos para que tomen decisiones basadas en datos, sin las barreras de la
                  tecnología tradicional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <div className="grid gap-1 text-center">
                <ZapIcon className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Facilidad de Uso</h3>
                <p className="text-sm text-muted-foreground">
                  Tu equipo solo necesita preguntar. Olvídate de menús complejos, filtros confusos y capacitaciones
                  largas.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <LinkIcon className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Practicidad Inmediata</h3>
                <p className="text-sm text-muted-foreground">
                  Nos conectamos a tus sistemas existentes para darte respuestas basadas en tus datos reales y
                  actualizados.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <DollarSignIcon className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-lg font-bold">Reducción de Costos</h3>
                <p className="text-sm text-muted-foreground">
                  Obtén nuevas métricas e informes al instante sin depender de costosos asesores técnicos para cada
                  cambio.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Empodera a tu equipo con datos al instante.
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¿Te interesa saber cómo Brocket.ai puede transformar tu operación? Déjanos tu email y te contactaremos.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Ingresa tu email" className="max-w-lg flex-1" />
                <Button type="submit">Contactar</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sin spam. Solo una conversación para entender tus necesidades.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Brocket.ai. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
