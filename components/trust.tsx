"use client"

import { EyeOff, History, Lock, ShieldCheck, Trash2 } from "lucide-react"
import type { ComponentType } from "react"

import { Reveal } from "@/components/reveal"

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number }>

const trustItems: {
  badge: string
  title: string
  body: string
  icon: IconComponent
}[] = [
  {
    badge: "Read-only",
    title: "Brocket never modifies your data",
    body: "Three validation layers block any write operation — guaranteed.",
    icon: Lock,
  },
  {
    badge: "Encrypted",
    title: "TLS 1.3 in transit · AES-256 at rest",
    body: "All communications and stored data are fully encrypted via AWS KMS.",
    icon: ShieldCheck,
  },
  {
    badge: "Zero retention",
    title: "Your data never trains AI models",
    body: "Google Gemini API zero data retention policy applies automatically.",
    icon: EyeOff,
  },
  {
    badge: "Your control",
    title: "Request full data deletion anytime",
    body: "Chats, configs, and all associated data — deleted on request.",
    icon: Trash2,
  },
  {
    badge: "Audit trail",
    title: "90-day log of every action and query",
    body: "Full traceability for your team, your auditors, and your board.",
    icon: History,
  },
]

export function Trust() {
  return (
    <section
      style={{
        backgroundColor: "#f5f4fb",
        padding: "96px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
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
            marginBottom: "8px",
          }}
        >
          Your data is safe with us.
        </Reveal>

        {/* Subheadline */}
        <Reveal
          as="p"
          delay={100}
          style={{
            fontSize: "16px",
            color: "#7a768f",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Security built for finance teams.
        </Reveal>

        {/* List Card */}
        <Reveal
          delay={200}
          className="hover-lift"
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "0.5px solid #e2e0f0",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="trust-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 24px",
                  borderBottom: index < trustItems.length - 1 ? "0.5px solid #e2e0f0" : "none",
                  position: "relative",
                }}
              >
                {/* Hover line indicator */}
                <div className="trust-row-indicator" aria-hidden="true" />

                {/* Icon badge */}
                <div className="trust-icon-badge" aria-hidden="true">
                  <Icon size={18} strokeWidth={2} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#7f77dd",
                      marginBottom: "6px",
                    }}
                  >
                    {item.badge}
                  </span>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1e1a3a",
                      marginBottom: "4px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "#7a768f",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>

      <style jsx>{`
        .trust-row {
          transition: background-color 200ms ease;
        }
        .trust-row:hover {
          background-color: #faf9fe;
        }
        .trust-row-indicator {
          position: absolute;
          left: 0;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: linear-gradient(180deg, #7f77dd 0%, #afa9ec 100%);
          border-radius: 999px;
          opacity: 0;
          transform: scaleY(0.6);
          transition: opacity 300ms ease, transform 300ms cubic-bezier(0.5, 0, 0, 1);
          transform-origin: center;
        }
        .trust-row:hover .trust-row-indicator {
          opacity: 1;
          transform: scaleY(1);
        }
        .trust-icon-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eeedfe 0%, #dcd5ff 100%);
          color: #534ab7;
          flex-shrink: 0;
          transition: transform 300ms cubic-bezier(0.5, 0, 0, 1), background 300ms ease;
        }
        .trust-row:hover .trust-icon-badge {
          transform: scale(1.06) rotate(-3deg);
          background: linear-gradient(135deg, #dcd5ff 0%, #c8c2eb 100%);
        }
        @media (max-width: 480px) {
          .trust-row {
            flex-direction: row !important;
          }
          .trust-icon-badge {
            width: 36px;
            height: 36px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-row,
          .trust-icon-badge,
          .trust-row-indicator {
            transition: none !important;
          }
          .trust-row:hover .trust-icon-badge {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
