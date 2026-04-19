"use client"

import React, { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/reveal"

type FeatureItem = {
  feature: string
  description: string
  timeSaved: string
  per: string
  magnitude: number
}

type FeatureGroup = {
  group: string
  items: FeatureItem[]
}

const featuresData: FeatureGroup[] = [
  {
    group: "BUSINESS INSIGHTS",
    items: [
      {
        feature: "Real time data access",
        description: "Any question about P&L, balance sheet, or transactions answered in seconds.",
        timeSaved: "4–6 hrs",
        per: "week",
        magnitude: 0.35,
      },
      {
        feature: "Collaborative forecasting",
        description: "Reaches every manager automatically and consolidates responses in real time.",
        timeSaved: "5–7 days",
        per: "→ 24 hrs",
        magnitude: 0.85,
      },
    ],
  },
  {
    group: "SHORTEN FINANCIAL CLOSE",
    items: [
      {
        feature: "Variance analysis",
        description: "Automatically identifies drivers of deviations from budget or prior periods.",
        timeSaved: "2–3 days",
        per: "month",
        magnitude: 0.55,
      },
      {
        feature: "Variance intelligence",
        description: "Contacts cost center owners, attaches the invoice, consolidates explanations.",
        timeSaved: "3–4 hrs",
        per: "variance",
        magnitude: 0.3,
      },
      {
        feature: "Anomaly detection",
        description: "Catches errors and unreconciled accounts before the close.",
        timeSaved: "1–2 days",
        per: "month",
        magnitude: 0.45,
      },
    ],
  },
  {
    group: "MONTHLY FINANCIAL REVIEWS",
    items: [
      {
        feature: "Report generation",
        description: "Turns variance data into polished memos and board-ready narratives automatically.",
        timeSaved: "4–8 hrs",
        per: "report",
        magnitude: 0.4,
      },
    ],
  },
  {
    group: "TRAINING",
    items: [
      {
        feature: "Team onboarding",
        description: "New analysts onboard in days. Brocket carries the institutional knowledge.",
        timeSaved: "2–3 months",
        per: "→ days",
        magnitude: 1,
      },
    ],
  },
]

function useInView<T extends Element>(threshold = 0.3): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

function TimeSavedBar({ magnitude, delay = 0 }: { magnitude: number; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.5)
  return (
    <div
      ref={ref}
      style={{
        marginTop: "6px",
        marginLeft: "auto",
        height: "3px",
        width: "100%",
        maxWidth: "72px",
        backgroundColor: "#eeedfe",
        borderRadius: "999px",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          height: "100%",
          width: inView ? `${Math.round(magnitude * 100)}%` : "0%",
          background: "linear-gradient(90deg, #afa9ec 0%, #7f77dd 100%)",
          borderRadius: "999px",
          transition: `width 900ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        }}
      />
    </div>
  )
}

function AnimatedCounter({
  target,
  duration = 1300,
  prefix = "+",
  suffix = "",
}: {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

export function Features() {
  return (
    <section
      id="solutions"
      style={{
        width: "100%",
        backgroundColor: "#f5f4fb",
        padding: "96px 24px",
        scrollMarginTop: "88px",
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
            textAlign: "center",
            marginBottom: "48px",
            color: "#1e1a3a",
          }}
        >
          Sc<span style={{ color: "#7f77dd", fontWeight: 700 }}>ai</span>ling up the Finance Team
        </Reveal>

        {/* Table */}
        <Reveal
          delay={100}
          className="hover-lift"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "0.5px solid #e2e0f0",
            overflow: "hidden",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f5f4fb", borderBottom: "0.5px solid #e2e0f0" }}>
                <th
                  style={{
                    width: "22%",
                    textAlign: "left",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#afa9ec",
                    padding: "12px 20px",
                  }}
                >
                  Feature
                </th>
                <th
                  className="hide-mobile"
                  style={{
                    width: "38%",
                    textAlign: "left",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#afa9ec",
                    padding: "12px 20px",
                  }}
                >
                  What it does
                </th>
                <th
                  style={{
                    width: "20%",
                    textAlign: "right",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#afa9ec",
                    padding: "12px 20px",
                  }}
                >
                  Time saved
                </th>
                <th
                  style={{
                    width: "20%",
                    textAlign: "right",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#afa9ec",
                    padding: "12px 20px",
                  }}
                >
                  Per
                </th>
              </tr>
            </thead>
            <tbody>
              {featuresData.map((group, groupIndex) => (
                <React.Fragment key={`group-${groupIndex}`}>
                  {/* Group header */}
                  <tr
                    style={{
                      backgroundColor: "#eeedfe",
                      borderTop: "0.5px solid #afa9ec",
                      borderBottom: "0.5px solid #afa9ec",
                    }}
                  >
                    <td
                      colSpan={4}
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#534ab7",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "8px 20px",
                      }}
                    >
                      {group.group}
                    </td>
                  </tr>
                  {/* Feature rows */}
                  {group.items.map((item, itemIndex) => (
                    <tr
                      key={`item-${groupIndex}-${itemIndex}`}
                      className="feature-row"
                      style={{
                        borderBottom: "0.5px solid #e2e0f0",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 20px",
                          verticalAlign: "top",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e1a3a",
                          }}
                        >
                          {item.feature}
                        </div>
                        <div
                          className="show-mobile"
                          style={{
                            fontSize: "12px",
                            color: "#7a768f",
                            lineHeight: 1.5,
                            marginTop: "4px",
                            display: "none",
                          }}
                        >
                          {item.description}
                        </div>
                      </td>
                      <td
                        className="hide-mobile"
                        style={{
                          padding: "14px 20px",
                          fontSize: "12px",
                          color: "#7a768f",
                          lineHeight: 1.5,
                          verticalAlign: "top",
                        }}
                      >
                        {item.description}
                      </td>
                      <td
                        style={{
                          padding: "14px 20px",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#534ab7",
                          textAlign: "right",
                          verticalAlign: "top",
                        }}
                      >
                        <div>{item.timeSaved}</div>
                        <TimeSavedBar magnitude={item.magnitude} delay={itemIndex * 80} />
                      </td>
                      <td
                        style={{
                          padding: "14px 20px",
                          fontSize: "11px",
                          color: "#afa9ec",
                          textAlign: "right",
                          verticalAlign: "top",
                        }}
                      >
                        {item.per}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ backgroundColor: "#1e1a3a" }}>
                <td
                  colSpan={2}
                  style={{
                    padding: "14px 20px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  Total time saved per month
                </td>
                <td
                  colSpan={2}
                  style={{
                    padding: "14px 20px",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#afa9ec",
                    textAlign: "right",
                  }}
                >
                  <AnimatedCounter target={10} suffix=" days" />
                </td>
              </tr>
            </tfoot>
          </table>
        </Reveal>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
          .show-mobile {
            display: block !important;
          }
        }
        .feature-row {
          transition: background-color 200ms ease;
        }
        .feature-row:hover {
          background-color: #faf9fe;
        }
      `}</style>
    </section>
  )
}
