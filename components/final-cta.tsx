"use client"

import { useBookDemo } from "@/components/book-demo-modal"

function BrocketLogoDark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center", marginBottom: "32px" }}>
      {/* Logo mark - dark version */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="2" y="4" width="32" height="7" rx="3.5" fill="#ffffff" />
        <rect x="2" y="15" width="22" height="7" rx="3.5" fill="#afa9ec" />
        <rect x="2" y="26" width="14" height="7" rx="3.5" fill="#7f77dd" />
      </svg>
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "22px",
          letterSpacing: "-0.03em",
          color: "#ffffff",
        }}
      >
        brocket
      </span>
    </div>
  )
}

export function FinalCTA() {
  const { open: openBookDemo } = useBookDemo()

  return (
    <section
      style={{
        backgroundColor: "#1e1a3a",
        padding: "100px 24px",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <BrocketLogoDark />

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          Ready to scale your finance team?
        </h2>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "18px",
            color: "#afa9ec",
            marginBottom: "40px",
          }}
        >
          Real AI for finance teams. Up and running in days.
        </p>

        {/* CTA Button */}
        <button
          onClick={openBookDemo}
          style={{
            backgroundColor: "#7f77dd",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
            width: "auto",
            maxWidth: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#534ab7"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#7f77dd"
          }}
        >
          Book a Demo
        </button>

        {/* Footer */}
        <div
          style={{
            borderTop: "0.5px solid #2a2650",
            marginTop: "64px",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#6b6880",
            }}
          >
            © 2025 Brocket AI LLC. All rights reserved.
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#6b6880",
            }}
          >
            brocket.xyz
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          button {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
