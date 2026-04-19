"use client"

import { useEffect, useRef, useState } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.2,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "96px 24px",
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
        <div ref={containerRef} className="steps-container">
          {/* Segment 1: between circle 1 and circle 2 */}
          <div className="connector-segment connector-segment--first" aria-hidden="true">
            <div
              className="connector-fill"
              style={{
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 700ms cubic-bezier(0.65, 0, 0.35, 1) 250ms",
              }}
            />
          </div>
          {/* Segment 2: between circle 2 and circle 3 */}
          <div className="connector-segment connector-segment--second" aria-hidden="true">
            <div
              className="connector-fill"
              style={{
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 700ms cubic-bezier(0.65, 0, 0.35, 1) 900ms",
              }}
            />
          </div>

          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 120}
              className="step"
              style={{
                flex: 1,
                position: "relative",
                zIndex: 1,
                textAlign: "center",
              }}
            >
              {/* Circle number */}
              <div className="step-circle">
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
              <h3 className="step-title">{step.title}</h3>

              {/* Step body */}
              <p className="step-body">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .steps-container {
          display: flex;
          align-items: flex-start;
          gap: 0;
          position: relative;
        }

        .connector-segment {
          position: absolute;
          top: 16.5px;
          height: 3px;
          border-radius: 999px;
          overflow: hidden;
          z-index: 0;
          background: linear-gradient(
            90deg,
            rgba(127, 119, 221, 0) 0%,
            rgba(127, 119, 221, 0.14) 12%,
            rgba(127, 119, 221, 0.14) 88%,
            rgba(127, 119, 221, 0) 100%
          );
        }
        /* First segment: from right edge of circle 1 to left edge of circle 2 */
        .connector-segment--first {
          left: calc(100% / 6 + 18px);
          right: calc(50% + 18px);
        }
        /* Second segment: from right edge of circle 2 to left edge of circle 3 */
        .connector-segment--second {
          left: calc(50% + 18px);
          right: calc(100% / 6 + 18px);
        }

        .connector-fill {
          height: 100%;
          background: linear-gradient(90deg, #7f77dd 0%, #afa9ec 100%);
          border-radius: 999px;
          transform-origin: left center;
          box-shadow: 0 0 10px rgba(127, 119, 221, 0.35);
        }

        .step-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #7f77dd;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          position: relative;
          z-index: 2;
          transition:
            transform 300ms cubic-bezier(0.5, 0, 0, 1),
            box-shadow 300ms cubic-bezier(0.5, 0, 0, 1);
        }

        .step-title {
          font-size: 16px;
          font-weight: 700;
          color: #1e1a3a;
          margin: 0 0 8px;
          transition: color 300ms ease;
        }

        .step-body {
          font-size: 14px;
          color: #7a768f;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 240px;
        }

        .step:hover .step-circle {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(127, 119, 221, 0.4);
        }
        .step:hover .step-title {
          color: #534ab7;
        }

        @media (max-width: 768px) {
          .steps-container {
            flex-direction: column;
            gap: 32px;
          }
          .connector-segment {
            display: none;
          }
          .step-body {
            max-width: 320px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .step:hover .step-circle {
            transform: none;
          }
          .connector-fill {
            transition: none !important;
            transform: scaleX(1) !important;
          }
        }
      `}</style>
    </section>
  )
}
