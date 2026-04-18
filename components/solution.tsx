"use client"

export function Solution() {
  const dataSources = ["ERP", "Budget data", "Invoices repository", "Business transactional data", "AI Training on Company Business Model"]
  const aiLayerRow1 = ["Real time data access", "Variance analysis", "Anomaly detection", "Forecasting"]
  const aiLayerRow2 = ["Variance intelligence", "Report generation", "Team onboarding"]
  const outputs = ["Instant financial answers", "Fast & clean close", "Hands-free forecast", "Financial review — ready to present"]

  return (
    <section
      style={{
        backgroundColor: "#f5f4fb",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Headline */}
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#1e1a3a",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          There&apos;s a better w<span style={{ color: "#7f77dd", fontWeight: 700 }}>ai</span>.
        </h2>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "18px",
            color: "#7a768f",
            maxWidth: "560px",
            margin: "0 auto 56px auto",
            textAlign: "center",
            lineHeight: 1.65,
          }}
        >
          An AI operating layer that sits on top of your ERP and runs your financial processes — faster, error-free, and hands-free.
        </p>

        {/* Diagram */}
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Block 1 - Data Sources */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "0.5px solid #e2e0f0",
              borderRadius: "12px",
              padding: "16px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#afa9ec",
                marginBottom: "12px",
              }}
            >
              DATA SOURCES
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {dataSources.map((source) => (
                <span
                  key={source}
                  style={{
                    backgroundColor: "#f5f4fb",
                    border: "0.5px solid #e2e0f0",
                    borderRadius: "20px",
                    padding: "5px 14px",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#3d3860",
                  }}
                >
                  {source}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow 1 */}
          <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
              <line x1="12" y1="0" x2="12" y2="28" stroke="#afa9ec" strokeWidth="1.5" />
              <path d="M7 23 L12 30 L17 23" stroke="#afa9ec" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Block 2 - Brocket AI Layer */}
          <div
            style={{
              backgroundColor: "#7f77dd",
              borderRadius: "12px",
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#eeedfe",
                marginBottom: "12px",
              }}
            >
              BROCKET AI OPERATING LAYER
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {aiLayerRow1.map((item) => (
                  <span
                    key={item}
                    style={{
                      backgroundColor: "#534ab7",
                      borderRadius: "20px",
                      padding: "6px 16px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#eeedfe",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {aiLayerRow2.map((item) => (
                  <span
                    key={item}
                    style={{
                      backgroundColor: "#534ab7",
                      borderRadius: "20px",
                      padding: "6px 16px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#eeedfe",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#afa9ec",
                marginTop: "14px",
              }}
            >
              All interaction via Slack / Teams
            </div>
          </div>

          {/* Arrow 2 */}
          <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
              <line x1="12" y1="0" x2="12" y2="28" stroke="#afa9ec" strokeWidth="1.5" />
              <path d="M7 23 L12 30 L17 23" stroke="#afa9ec" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Block 3 - Outputs */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "0.5px solid #e2e0f0",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#afa9ec",
                textAlign: "center",
                paddingTop: "14px",
                paddingBottom: "8px",
              }}
            >
              OUTPUTS
            </div>
            <div
              className="outputs-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {outputs.map((output, index) => (
                <div
                  key={output}
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#3d3860",
                    padding: "14px 8px",
                    lineHeight: 1.4,
                    borderLeft: index > 0 ? "0.5px solid #e2e0f0" : "none",
                  }}
                >
                  {output}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .outputs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .outputs-grid > div:nth-child(3) {
            border-left: none !important;
            border-top: 0.5px solid #e2e0f0;
          }
          .outputs-grid > div:nth-child(4) {
            border-top: 0.5px solid #e2e0f0;
          }
        }
        @media (max-width: 480px) {
          .outputs-grid {
            grid-template-columns: 1fr !important;
          }
          .outputs-grid > div {
            border-left: none !important;
            border-top: 0.5px solid #e2e0f0;
          }
          .outputs-grid > div:first-child {
            border-top: none;
          }
        }
      `}</style>
    </section>
  )
}
