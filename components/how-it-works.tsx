"use client"

import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: 1,
    title: "Connect",
    body: "Brocket securely connects to your ERP and existing data sources in days, not months. No migration, no disruption.",
  },
  {
    number: 2,
    title: "Configure",
    body: "We map your chart of accounts, cost centers, and business logic. Brocket learns how your company works.",
  },
  {
    number: 3,
    title: "Run",
    body: "Your financial processes run automatically. Your team gets answers, reports, and forecasts — hands-free.",
  },
]

export function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {/* Headline */}
        <Reveal
          as="h2"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#1e1a3a",
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          How it works.
        </Reveal>

        {/* Steps */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={(index + 1) * 100}
              className="step"
              style={{
                flex: 1,
                paddingLeft: index === 0 ? 0 : "32px",
                paddingRight: index === steps.length - 1 ? 0 : "32px",
                position: "relative",
              }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="connector-line"
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: index === 0 ? "36px" : "calc(50% + 18px)",
                    right: "-32px",
                    height: "1px",
                    backgroundColor: "#e2e0f0",
                  }}
                />
              )}

              {/* Circle number */}
              <div
                className="step-circle"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#7f77dd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  position: "relative",
                  zIndex: 1,
                  transition: "transform 300ms cubic-bezier(0.5, 0, 0, 1), box-shadow 300ms cubic-bezier(0.5, 0, 0, 1)",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step title */}
              <h3
                className="step-title"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#1e1a3a",
                  marginBottom: "8px",
                  transition: "color 300ms ease",
                }}
              >
                {step.title}
              </h3>

              {/* Step body */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#7a768f",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .steps-container {
          display: flex;
          align-items: flex-start;
          gap: 0;
        }

        .step:hover .step-circle {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(127, 119, 221, 0.35);
        }
        .step:hover .step-title {
          color: #534ab7;
        }

        @media (max-width: 768px) {
          .steps-container {
            flex-direction: column;
            gap: 24px;
          }

          .step {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          .connector-line {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .step:hover .step-circle {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
