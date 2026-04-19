"use client"

import React from "react"
import { Reveal } from "@/components/reveal"

const featuresData = [
  {
    group: "BUSINESS INSIGHTS",
    items: [
      {
        feature: "Real time data access",
        description: "Any question about P&L, balance sheet, or transactions answered in seconds.",
        timeSaved: "4–6 hrs",
        per: "week",
      },
      {
        feature: "Collaborative forecasting",
        description: "Reaches every manager automatically and consolidates responses in real time.",
        timeSaved: "5–7 days",
        per: "→ 24 hrs",
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
      },
      {
        feature: "Variance intelligence",
        description: "Contacts cost center owners, attaches the invoice, consolidates explanations.",
        timeSaved: "3–4 hrs",
        per: "variance",
      },
      {
        feature: "Anomaly detection",
        description: "Catches errors and unreconciled accounts before the close.",
        timeSaved: "1–2 days",
        per: "month",
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
      },
    ],
  },
]

export function Features() {
  return (
    <section
      id="solutions"
      style={{
        width: "100%",
        backgroundColor: "#f5f4fb",
        padding: "100px 24px",
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
                        {item.timeSaved}
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
                  +10 days
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
