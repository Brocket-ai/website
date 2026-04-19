"use client"

import { useBookDemo } from "@/components/book-demo-modal"
import { Reveal } from "@/components/reveal"

export function Pricing() {
  const { open: openBookDemo } = useBookDemo()

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "#1e1a3a",
        padding: "96px 24px",
        scrollMarginTop: "88px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Headline */}
        <Reveal
          as="h2"
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
        </Reveal>

        {/* Subheadline */}
        <Reveal
          as="p"
          delay={100}
          style={{
            fontSize: "16px",
            color: "#afa9ec",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          All features included in every plan. Unlimited users.
        </Reveal>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {/* Card 1 - Starter */}
          <Reveal
            className="pricing-card pricing-card--dark"
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
                className="pricing-price"
                style={{
                  display: "inline-block",
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
              className="pricing-cta"
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
          </Reveal>

          {/* Card 2 - Scale-up (Featured) */}
          <Reveal
            delay={100}
            className="pricing-card pricing-card--featured"
            style={{
              backgroundColor: "#7f77dd",
              border: "1.5px solid #7f77dd",
              borderRadius: "12px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 12px 35px rgba(127, 119, 221, 0.4)",
              position: "relative",
            }}
          >
            {/* Most popular ribbon */}
            <span className="pricing-ribbon" aria-label="Most popular">
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
                className="pricing-price"
                style={{
                  display: "inline-block",
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
              className="pricing-cta"
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
          </Reveal>

          {/* Card 3 - Enterprise */}
          <Reveal
            delay={200}
            className="pricing-card pricing-card--dark"
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
                className="pricing-price"
                style={{
                  display: "inline-block",
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
              className="pricing-cta"
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
          </Reveal>
        </div>

        {/* Footnote */}
        <Reveal
          as="p"
          delay={300}
          style={{
            fontSize: "11px",
            color: "#6b6880",
            textAlign: "center",
            marginTop: "32px",
          }}
        >
          Monthly billing · Credit card or bank transfer · Cancel anytime · No minimum commitment
        </Reveal>
      </div>

      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: center;
        }
        .pricing-card {
          transition:
            transform 300ms cubic-bezier(0.5, 0, 0, 1),
            box-shadow 300ms cubic-bezier(0.5, 0, 0, 1),
            border-color 300ms cubic-bezier(0.5, 0, 0, 1);
        }
        .pricing-card--dark:hover {
          transform: translateY(-6px);
          border-color: #534ab7 !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
        }
        .pricing-card--featured {
          transform: scale(1.05);
        }
        .pricing-card--featured:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow: 0 18px 45px rgba(127, 119, 221, 0.55);
        }
        .pricing-price {
          transition: transform 250ms cubic-bezier(0.5, 0, 0, 1);
          transform-origin: left center;
        }
        .pricing-card:hover .pricing-price {
          transform: scale(1.03);
        }
        .pricing-ribbon {
          position: absolute;
          top: 14px;
          right: -6px;
          background-color: #ffffff;
          color: #534ab7;
          padding: 5px 14px 5px 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border-radius: 4px 0 0 4px;
          box-shadow: 0 4px 14px rgba(30, 26, 58, 0.25);
          transform: rotate(-3deg);
          transform-origin: right center;
          z-index: 2;
        }
        .pricing-ribbon::after {
          content: "";
          position: absolute;
          top: 100%;
          right: 0;
          border-left: 6px solid transparent;
          border-top: 5px solid rgba(30, 26, 58, 0.35);
        }
        .pricing-cta {
          transition:
            transform 200ms cubic-bezier(0.5, 0, 0, 1),
            background-color 200ms ease,
            box-shadow 200ms ease;
        }
        .pricing-cta:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }
        .pricing-cta:active {
          transform: scale(0.97);
        }
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .pricing-card--featured {
            transform: none;
          }
          .pricing-card--featured:hover {
            transform: translateY(-6px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pricing-card,
          .pricing-cta,
          .pricing-price {
            transition: none !important;
          }
          .pricing-card:hover,
          .pricing-cta:hover,
          .pricing-card:hover .pricing-price {
            transform: none !important;
          }
          .pricing-card--featured {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}
