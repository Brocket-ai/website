"use client"

import { useBookDemo } from "@/components/book-demo-modal"
import { Reveal } from "@/components/reveal"
import { Footer } from "@/components/footer"

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
        padding: "96px 24px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background mesh (bookend with Hero) */}
      <div className="finalcta-bg" aria-hidden="true">
        <div className="finalcta-blob finalcta-blob--top-left" />
        <div className="finalcta-blob finalcta-blob--bottom-right" />
        <div className="finalcta-grid-overlay" />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <Reveal>
          <BrocketLogoDark />
        </Reveal>

        {/* Headline */}
        <Reveal
          as="h2"
          delay={100}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          Ready to scale your finance team?
        </Reveal>

        {/* Subheadline */}
        <Reveal
          as="p"
          delay={200}
          style={{
            fontSize: "18px",
            color: "#afa9ec",
            marginBottom: "40px",
          }}
        >
          Real AI for finance teams. Up and running in days.
        </Reveal>

        {/* CTA Button */}
        <Reveal delay={300}>
          <button
            onClick={() => openBookDemo("final-cta")}
            className="animate-pulse-soft final-cta-btn"
            style={{
              backgroundColor: "#7f77dd",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "auto",
              maxWidth: "100%",
            }}
          >
            Book a Demo
          </button>
        </Reveal>

        <div style={{ marginTop: "64px" }}>
          <Footer />
        </div>
      </div>

      <style jsx>{`
        .final-cta-btn:hover {
          background-color: #534ab7 !important;
        }
        @media (max-width: 640px) {
          .final-cta-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
