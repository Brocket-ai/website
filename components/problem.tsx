import { Reveal } from "@/components/reveal"

export function Problem() {
  const cards = [
    {
      title: "The close",
      body: "Days of manual work, reconciliations that never end, and errors that slip through.",
    },
    {
      title: "The forecast",
      body: "Finance never has enough time to work closely with every area manager and give them the support they need.",
    },
    {
      title: "The financial review",
      body: "Building the monthly financial review takes days of manual assembly.",
    },
    {
      title: "Variance analysis",
      body: "Variances get investigated after the close, when it's already too late to act.",
    },
  ]

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: "#f5f4fb",
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <Reveal
          as="h2"
          className="text-center mb-12"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#1e1a3a",
            marginBottom: "48px",
          }}
        >
          Sound familiar?
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Reveal
              key={index}
              delay={index * 100}
              className="rounded-xl hover-lift"
              style={{
                backgroundColor: "#ffffff",
                border: "0.5px solid #e2e0f0",
                borderTop: "2px solid #7f77dd",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1e1a3a",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#7a768f",
                  lineHeight: 1.6,
                }}
              >
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
