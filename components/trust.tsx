"use client"

import { Reveal } from "@/components/reveal"

const trustItems = [
  {
    badge: "Read-only",
    title: "Brocket never modifies your data",
    body: "Three validation layers block any write operation — guaranteed.",
  },
  {
    badge: "Encrypted",
    title: "TLS 1.3 in transit · AES-256 at rest",
    body: "All communications and stored data are fully encrypted via AWS KMS.",
  },
  {
    badge: "Zero retention",
    title: "Your data never trains AI models",
    body: "Google Gemini API zero data retention policy applies automatically.",
  },
  {
    badge: "Your control",
    title: "Request full data deletion anytime",
    body: "Chats, configs, and all associated data — deleted on request.",
  },
  {
    badge: "Audit trail",
    title: "90-day log of every action and query",
    body: "Full traceability for your team, your auditors, and your board.",
  },
]

export function Trust() {
  return (
    <section
      style={{
        backgroundColor: "#f5f4fb",
        padding: "100px 24px",
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
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="trust-row"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "16px 24px",
                borderBottom: index < trustItems.length - 1 ? "0.5px solid #e2e0f0" : "none",
                transition: "background-color 0.2s ease",
              }}
            >
              {/* Badge */}
              <span
                style={{
                  backgroundColor: "#eeedfe",
                  color: "#534ab7",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  fontSize: "10px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  minWidth: "90px",
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                {item.badge}
              </span>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1e1a3a",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#7a768f",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <style jsx>{`
        .trust-row:hover {
          background-color: #faf9fe;
        }

        @media (max-width: 480px) {
          .trust-row {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}
