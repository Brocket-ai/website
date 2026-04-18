import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { Integrations } from "@/components/integrations"
import { Trust } from "@/components/trust"
import { FinalCTA } from "@/components/final-cta"

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f4fb" }}>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Pricing />
      <Integrations />
      <Trust />
      <FinalCTA />
    </div>
  )
}
