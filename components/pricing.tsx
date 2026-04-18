"use client"

import { useBookDemo } from "@/components/book-demo-modal"

export function Pricing() {
  const { open: openBookDemo } = useBookDemo()

  return (
    <section
      style={{
        backgroundColor: "#1e1a3a",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Headline */}
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Simple, transparent pricing.
        </h2>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "16px",
            color: "#afa9ec",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          All features included in every plan. Unlimited users.
        </p>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {/* Card 1 - Starter */}
          <div
            style={{
              backgroundColor: "#2a2650",
              border: "0.5px solid #3d3870",
              borderRadius: "12px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#afa9ec",
                marginBottom: "12px",
              }}
            >
              STARTER
            </span>
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                $499
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#6b6880",
                }}
              >
                /mo
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#afa9ec",
                marginBottom: "16px",
              }}
            >
              For companies with up to 100 employees
            </p>
            <span
              style={{
                backgroundColor: "#534ab7",
                color: "#eeedfe",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "10px",
                fontWeight: 600,
                alignSelf: "flex-start",
              }}
            >
              All features included
            </span>
            <div
              style={{
                fontSize: "11px",
                color: "#afa9ec",
                borderTop: "0.5px solid #3d3870",
                paddingTop: "12px",
                marginTop: "12px",
              }}
            >
              Unlimited users
            </div>
            <button
              onClick={openBookDemo}
              style={{
                backgroundColor: "#7f77dd",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                width: "100%",
                marginTop: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book a Demo
            </button>
          </div>

          {/* Card 2 - Scale-up (Featured) */}
          <div
            style={{
              backgroundColor: "#7f77dd",
              border: "1.5px solid #7f77dd",
              borderRadius: "12px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                backgroundColor: "#ffffff",
                color: "#534ab7",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "10px",
                fontWeight: 600,
                alignSelf: "flex-start",
                marginBottom: "12px",
              }}
            >
              Most popular
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#eeedfe",
                marginBottom: "12px",
              }}
            >
              SCALE-UP
            </span>
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                }}
              >
                $899
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#eeedfe",
                }}
              >
                /mo
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#eeedfe",
                marginBottom: "16px",
              }}
            >
              For companies with up to 250 employees
            </p>
            <span
              style={{
                backgroundColor: "#ffffff",
                color: "#534ab7",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "10px",
                fontWeight: 600,
                alignSelf: "flex-start",
              }}
            >
              All features included
            </span>
            <div
              style={{
                fontSize: "11px",
                color: "#eeedfe",
                borderTop: "0.5px solid rgba(255,255,255,0.2)",
                paddingTop: "12px",
                marginTop: "12px",
              }}
            >
              Unlimited users
            </div>
            <button
              onClick={openBookDemo}
              style={{
                backgroundColor: "#ffffff",
                color: "#534ab7",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                width: "100%",
                marginTop: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book a Demo
            </button>
          </div>

          {/* Card 3 - Enterprise */}
          <div
            style={{
              backgroundColor: "#2a2650",
              border: "0.5px solid #3d3870",
              borderRadius: "12px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#afa9ec",
                marginBottom: "12px",
              }}
            >
              ENTERPRISE
            </span>
            <div style={{ marginBottom: "16px", paddingTop: "4px" }}>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Custom pricing
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#afa9ec",
                marginBottom: "16px",
              }}
            >
              For companies with 250+ employees
            </p>
            <span
              style={{
                backgroundColor: "#534ab7",
                color: "#eeedfe",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "10px",
                fontWeight: 600,
                alignSelf: "flex-start",
              }}
            >
              All features included
            </span>
            <div
              style={{
                fontSize: "11px",
                color: "#afa9ec",
                borderTop: "0.5px solid #3d3870",
                paddingTop: "12px",
                marginTop: "12px",
              }}
            >
              Unlimited users
            </div>
            <button
              onClick={openBookDemo}
              style={{
                backgroundColor: "#7f77dd",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "13px",
                fontWeight: 600,
                width: "100%",
                marginTop: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get an instant quote
            </button>
          </div>
        </div>

        {/* Footnote */}
        <p
          style={{
            fontSize: "11px",
            color: "#6b6880",
            textAlign: "center",
            marginTop: "32px",
          }}
        >
          Monthly billing · Credit card or bank transfer · Cancel anytime · No minimum commitment
        </p>
      </div>

      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
