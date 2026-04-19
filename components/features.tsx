"use client"

import { Clock, GraduationCap, Presentation, Zap } from "lucide-react"
import React, { useEffect, useRef, useState, type ComponentType } from "react"

import { Reveal } from "@/components/reveal"

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; color?: string }>

type FeatureItem = {
  feature: string
  description: string
  timeSaved: string
  per: string
  magnitude: number
}

type FeatureGroup = {
  group: string
  icon: IconComponent
  items: FeatureItem[]
}

const featuresData: FeatureGroup[] = [
  {
    group: "BUSINESS INSIGHTS",
    icon: Zap,
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
    icon: Clock,
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
    icon: Presentation,
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
    icon: GraduationCap,
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
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
    })
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
        backgroundColor: "#eceafc",
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
    setValue(0)
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
          className="features-table-wrapper hover-lift"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "0.5px solid #e2e0f0",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(30, 26, 58, 0.04)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #e2e0f0" }}>
                <th className="features-th" style={{ width: "22%", textAlign: "left" }}>
                  Feature
                </th>
                <th className="features-th hide-mobile" style={{ width: "38%", textAlign: "left" }}>
                  What it does
                </th>
                <th className="features-th" style={{ width: "20%", textAlign: "right" }}>
                  Time saved
                </th>
                <th className="features-th" style={{ width: "20%", textAlign: "center" }}>
                  Per
                </th>
              </tr>
            </thead>
            <tbody>
              {featuresData.map((group, groupIndex) => {
                const GroupIcon = group.icon
                return (
                  <React.Fragment key={`group-${groupIndex}`}>
                    {/* Group header with icon + left accent */}
                    <tr className="features-group-row">
                      <td colSpan={4} className="features-group-cell">
                        <div className="features-group-label">
                          <GroupIcon size={14} strokeWidth={2.2} />
                          <span>{group.group}</span>
                        </div>
                      </td>
                    </tr>
                    {/* Feature rows */}
                    {group.items.map((item, itemIndex) => (
                      <tr
                        key={`item-${groupIndex}-${itemIndex}`}
                        className="feature-row"
                        style={{ borderBottom: "0.5px solid #e2e0f0" }}
                      >
                        <td className="feature-cell" style={{ verticalAlign: "top" }}>
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
                            className="show-mobile feature-description-mobile"
                            style={{ display: "none" }}
                          >
                            {item.description}
                          </div>
                        </td>
                        <td
                          className="feature-cell hide-mobile"
                          style={{
                            fontSize: "12px",
                            color: "#6b6780",
                            lineHeight: 1.55,
                            verticalAlign: "top",
                          }}
                        >
                          {item.description}
                        </td>
                        <td
                          className="feature-cell"
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#534ab7",
                            textAlign: "right",
                            verticalAlign: "top",
                          }}
                        >
                          <div>{item.timeSaved}</div>
                          <TimeSavedBar magnitude={item.magnitude} delay={itemIndex * 80} />
                        </td>
                        <td
                          className="feature-cell"
                          style={{
                            fontSize: "11px",
                            color: "#9a96ae",
                            textAlign: "center",
                            verticalAlign: "top",
                          }}
                        >
                          {item.per}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                )
              })}
            </tbody>
            <tfoot>
              {/* Accent bar above footer */}
              <tr>
                <td
                  colSpan={4}
                  style={{
                    padding: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #7f77dd 0%, #afa9ec 100%)",
                  }}
                />
              </tr>
              <tr style={{ background: "linear-gradient(180deg, #272345 0%, #1e1a3a 100%)" }}>
                <td
                  colSpan={2}
                  style={{
                    padding: "16px 20px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Total time saved per month
                </td>
                <td
                  colSpan={2}
                  style={{
                    padding: "16px 20px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#ffffff",
                    textAlign: "right",
                    letterSpacing: "-0.01em",
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
        .features-th {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8a8697;
          padding: 14px 20px;
          background-color: #ffffff;
        }
        .features-group-row {
          background-color: #f8f7fd;
        }
        .features-group-cell {
          padding: 10px 20px 10px 17px;
          box-shadow: inset 3px 0 0 #7f77dd;
          border-top: 0.5px solid #e2e0f0;
          border-bottom: 0.5px solid #e2e0f0;
        }
        .features-group-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #534ab7;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .feature-cell {
          padding: 15px 20px;
        }
        .feature-description-mobile {
          font-size: 12px;
          color: #6b6780;
          line-height: 1.5;
          margin-top: 4px;
        }
        .feature-row {
          transition: background-color 200ms ease, box-shadow 200ms ease;
        }
        .feature-row:hover {
          background-color: #faf9ff;
          box-shadow: inset 2px 0 0 #7f77dd;
        }
        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
          .show-mobile {
            display: block !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .feature-row {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}
