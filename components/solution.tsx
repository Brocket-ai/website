"use client"

import {
  Activity,
  BarChart3,
  Brain,
  CheckCheck,
  Database,
  Presentation,
  Receipt,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react"

import { Reveal } from "@/components/reveal"

type IconComponent = typeof Database

const dataSources: { label: string; icon: IconComponent }[] = [
  { label: "ERP", icon: Database },
  { label: "Budget data", icon: BarChart3 },
  { label: "Invoices repository", icon: Receipt },
  { label: "Business transactional data", icon: Activity },
]

const aiLayerRow1 = ["Real time data access", "Variance analysis", "Anomaly detection", "Forecasting"]
const aiLayerRow2 = ["Variance intelligence", "Report generation", "Team onboarding"]

const outputs: { label: string; icon: IconComponent }[] = [
  { label: "Instant financial answers", icon: Zap },
  { label: "Fast & clean close", icon: CheckCheck },
  { label: "Hands-free forecast", icon: TrendingUp },
  { label: "Financial review — ready to present", icon: Presentation },
]

function FlowArrow() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "8px 0",
      }}
    >
      <svg
        width="32"
        height="48"
        viewBox="0 0 32 48"
        fill="none"
        aria-hidden="true"
        style={{ display: "block", margin: "0 auto", flexShrink: 0 }}
      >
        {/* Animated dashed line */}
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="36"
          stroke="#afa9ec"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 5"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-18"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </line>

        {/* Flowing particle */}
        <circle cx="16" cy="0" r="3" fill="#7f77dd">
          <animate attributeName="cy" from="-6" to="40" dur="1.8s" repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0"
            keyTimes="0; 0.15; 0.85; 1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Arrow head */}
        <path
          d="M9 36 L16 44 L23 36"
          stroke="#7f77dd"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function Solution() {
  return (
    <section
      id="product"
      className="solution-section"
      style={{
        position: "relative",
        backgroundColor: "#f5f4fb",
        padding: "96px 24px",
        scrollMarginTop: "88px",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="ambient-glow"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "900px",
          height: "900px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(127, 119, 221, 0.18) 0%, rgba(127, 119, 221, 0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Headline */}
        <Reveal
          as="h2"
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
        </Reveal>

        {/* Subheadline */}
        <Reveal
          as="p"
          delay={100}
          style={{
            fontSize: "18px",
            color: "#7a768f",
            maxWidth: "560px",
            margin: "0 auto 64px auto",
            textAlign: "center",
            lineHeight: 1.65,
          }}
        >
          An AI operating layer that sits on top of your ERP and runs your financial processes — faster, error-free, and hands-free.
        </Reveal>

        {/* Diagram */}
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Block 1 — Data Sources */}
          <Reveal
            className="diagram-card hover-lift"
            style={{
              backgroundColor: "#ffffff",
              border: "0.5px solid #e2e0f0",
              borderRadius: "16px",
              padding: "24px 24px 20px",
              boxShadow: "0 8px 30px rgba(30, 26, 58, 0.04)",
            }}
          >
            <div className="section-label">Data Sources</div>
            <div className="chip-row">
              {dataSources.map(({ label, icon: Icon }) => (
                <span key={label} className="chip chip--data">
                  <Icon size={14} strokeWidth={2} />
                  {label}
                </span>
              ))}
            </div>

            {/* AI Training callout — distinguishes the "learning" input from raw data */}
            <div className="ai-training-callout">
              <span className="ai-training-icon">
                <Brain size={14} strokeWidth={2.5} />
              </span>
              <span className="ai-training-label">AI Training on Company Business Model</span>
              <Sparkles size={12} strokeWidth={2.5} className="ai-training-sparkle" />
            </div>
          </Reveal>

          <FlowArrow />

          {/* Block 2 — Brocket AI Layer */}
          <Reveal delay={100} className="brocket-layer">
            <div className="brocket-layer-inner">
              <div className="section-label section-label--light">Brocket AI Operating Layer</div>

              <div className="ai-tags">
                <div className="chip-row">
                  {aiLayerRow1.map((item) => (
                    <span key={item} className="chip chip--ai hover-scale">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="chip-row">
                  {aiLayerRow2.map((item) => (
                    <span key={item} className="chip chip--ai hover-scale">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="interaction-note">
                <span className="interaction-dot" />
                All interaction via Slack / Teams
              </div>
            </div>
          </Reveal>

          <FlowArrow />

          {/* Block 3 — Outputs */}
          <Reveal
            delay={200}
            className="diagram-card hover-lift"
            style={{
              backgroundColor: "#ffffff",
              border: "0.5px solid #e2e0f0",
              borderRadius: "16px",
              padding: "24px 24px 20px",
              boxShadow: "0 8px 30px rgba(30, 26, 58, 0.04)",
            }}
          >
            <div className="section-label">Outputs</div>
            <div className="outputs-grid">
              {outputs.map(({ label, icon: Icon }) => (
                <div key={label} className="output-tile">
                  <span className="output-icon">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="output-label">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        /* Labels */
        .section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #afa9ec;
          text-align: center;
          margin-bottom: 14px;
        }
        .section-label--light {
          color: rgba(255, 255, 255, 0.72);
          margin-bottom: 16px;
        }

        /* Chips */
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }
        .chip--data {
          background-color: #f5f4fb;
          border: 0.5px solid #e2e0f0;
          color: #3d3860;
          transition:
            transform 300ms cubic-bezier(0.5, 0, 0, 1),
            background-color 300ms ease,
            border-color 300ms ease;
        }
        .chip--data:hover {
          background-color: #ffffff;
          border-color: #c8c2eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(127, 119, 221, 0.12);
        }
        .chip--data :global(svg) {
          color: #7f77dd;
          flex-shrink: 0;
        }
        .chip--ai {
          background-color: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          backdrop-filter: blur(4px);
          border: 0.5px solid rgba(255, 255, 255, 0.1);
          transition:
            transform 300ms cubic-bezier(0.5, 0, 0, 1),
            background-color 300ms ease,
            border-color 300ms ease;
        }
        .chip--ai:hover {
          background-color: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.25);
        }

        /* AI Training callout */
        .ai-training-callout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
          padding: 10px 16px;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            rgba(127, 119, 221, 0.08) 0%,
            rgba(127, 119, 221, 0.14) 100%
          );
          border: 0.5px solid rgba(127, 119, 221, 0.18);
          font-size: 12px;
          font-weight: 600;
          color: #534ab7;
          letter-spacing: 0.01em;
          transition: background 300ms ease;
        }
        .ai-training-callout:hover {
          background: linear-gradient(
            135deg,
            rgba(127, 119, 221, 0.12) 0%,
            rgba(127, 119, 221, 0.2) 100%
          );
        }
        .ai-training-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #7f77dd;
          color: #ffffff;
          flex-shrink: 0;
        }
        .ai-training-sparkle {
          color: #7f77dd;
          flex-shrink: 0;
          animation: sparkle 2.8s ease-in-out infinite;
        }
        @keyframes sparkle {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2) rotate(15deg);
            opacity: 1;
          }
        }

        /* Brocket layer */
        .brocket-layer {
          position: relative;
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(
            135deg,
            rgba(127, 119, 221, 0.9) 0%,
            rgba(127, 119, 221, 1) 50%,
            rgba(108, 100, 212, 1) 100%
          );
          animation: glow-breathe 4s ease-in-out infinite;
        }
        @keyframes glow-breathe {
          0%,
          100% {
            box-shadow:
              0 10px 30px rgba(127, 119, 221, 0.28),
              0 0 60px rgba(127, 119, 221, 0.15);
          }
          50% {
            box-shadow:
              0 14px 45px rgba(127, 119, 221, 0.45),
              0 0 90px rgba(127, 119, 221, 0.25);
          }
        }
        .brocket-layer-inner {
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(127, 119, 221, 1) 0%,
            rgba(108, 100, 212, 1) 100%
          );
          padding: 24px 24px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        /* Subtle shimmer pass over Brocket block */
        .brocket-layer-inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 80%
          );
          transform: translateX(-100%);
          animation: shimmer 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          60%,
          100% {
            transform: translateX(100%);
          }
        }
        .ai-tags {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .interaction-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.02em;
          position: relative;
          z-index: 1;
        }
        .interaction-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #a5fcc0;
          box-shadow: 0 0 8px rgba(165, 252, 192, 0.7);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }

        /* Outputs */
        .outputs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .output-tile {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 12px;
          background-color: #faf9fe;
          border: 0.5px solid transparent;
          transition:
            background-color 300ms ease,
            border-color 300ms ease,
            transform 300ms cubic-bezier(0.5, 0, 0, 1);
        }
        .output-tile:hover {
          background-color: #ffffff;
          border-color: #c8c2eb;
          transform: translateY(-1px);
        }
        .output-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #eeedfe 0%, #dcd5ff 100%);
          color: #534ab7;
          flex-shrink: 0;
        }
        .output-label {
          font-size: 12.5px;
          font-weight: 500;
          color: #3d3860;
          line-height: 1.35;
        }

        @media (max-width: 480px) {
          .outputs-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brocket-layer,
          .ai-training-sparkle,
          .interaction-dot {
            animation: none !important;
          }
          .brocket-layer-inner::before {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
