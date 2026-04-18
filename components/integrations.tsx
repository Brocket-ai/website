"use client"

export function Integrations() {
  const categories = [
    {
      label: "ERP",
      items: [
        { name: "SAP", dotColor: "#0075be" },
        { name: "Oracle NetSuite", dotColor: "#ff6600" },
        { name: "MS Dynamics", dotColor: "#00a4ef" },
      ],
    },
    {
      label: "Communication",
      items: [
        { name: "Slack", dotColor: "#4a154b" },
        { name: "Microsoft Teams", dotColor: "#6264a7" },
        { name: "Google Workspace", dotColor: "#4285f4" },
      ],
    },
    {
      label: "Reporting",
      items: [
        { name: "Microsoft Excel", dotColor: "#217346" },
        { name: "PowerPoint", dotColor: "#d24726" },
        { name: "Google Presentations", dotColor: "#fbbc04" },
      ],
    },
  ]

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {/* Headline */}
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#1e1a3a",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Works with your stack.
        </h2>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "16px",
            color: "#7a768f",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Brocket connects to the tools your finance team already uses.
        </p>

        {/* Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="integrations-grid"
        >
          {categories.map((category) => (
            <div
              key={category.label}
              style={{
                backgroundColor: "#ffffff",
                border: "0.5px solid #e2e0f0",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              {/* Category Label */}
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#afa9ec",
                  marginBottom: "14px",
                }}
              >
                {category.label}
              </div>

              {/* Integration Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: item.dotColor,
                        flexShrink: 0,
                      }}
                    />
                    {/* Name */}
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#3d3860",
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .integrations-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
