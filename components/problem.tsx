import { AlertTriangle, Clock, FileSpreadsheet, TrendingDown } from "lucide-react"
import type { ComponentType } from "react"

import { Reveal } from "@/components/reveal"

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number }>

const cards: { title: string; body: string; icon: IconComponent }[] = [
  {
    title: "The close",
    body: "Days of manual work, reconciliations that never end, and errors that slip through.",
    icon: Clock,
  },
  {
    title: "The forecast",
    body: "Finance never has enough time to work closely with every area manager and give them the support they need.",
    icon: TrendingDown,
  },
  {
    title: "The financial review",
    body: "Building the monthly financial review takes days of manual assembly.",
    icon: FileSpreadsheet,
  },
  {
    title: "Variance analysis",
    body: "Variances get investigated after the close, when it's already too late to act.",
    icon: AlertTriangle,
  },
]

export function Problem() {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <Reveal as="h2" className="problem-headline">
          Sound familiar?
        </Reveal>

        <div className="problem-grid">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal key={card.title} delay={index * 100} className="problem-card">
                <div className="problem-icon-badge">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="problem-card-title">{card.title}</h3>
                <p className="problem-card-body">{card.body}</p>
                <div className="problem-card-underline" aria-hidden="true" />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
