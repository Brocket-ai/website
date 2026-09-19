import type { ReactNode } from "react"
import { Footer } from "@/components/footer"

function BrocketLogo() {
  return (
    <a href="/" aria-label="Brocket home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="32" height="7" rx="3.5" fill="#534AB7" />
        <rect x="2" y="15" width="22" height="7" rx="3.5" fill="#7f77dd" />
        <rect x="2" y="26" width="14" height="7" rx="3.5" fill="#afa9ec" />
      </svg>
      <span style={{ fontWeight: 600, fontSize: "22px", letterSpacing: "-0.03em", color: "#1e1a3a" }}>brocket</span>
    </a>
  )
}

/** A decision the responsible person still has to make. Production builds refuse pages that contain one. */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <mark style={{ backgroundColor: "#fff1a8", color: "#1e1a3a", padding: "0 4px", borderRadius: "4px" }}>
      [PENDING: {children}]
    </mark>
  )
}

type LegalPageProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f4fb" }}>
      <header className="w-full px-6 py-4 md:px-12 md:py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <BrocketLogo />
          <a href="https://app.brocket.xyz" style={{ fontSize: "14px", fontWeight: 500, color: "#3d3860", textDecoration: "none" }}>
            Log in
          </a>
        </div>
      </header>
      <main className="mx-auto px-6 pb-24 pt-10 md:px-12 md:pt-16" style={{ maxWidth: "760px" }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.1, color: "#1e1a3a", marginBottom: "8px" }}>
          {title}
        </h1>
        <p style={{ fontSize: "14px", color: "#7a768f", marginBottom: "40px" }}>Last updated: {updated}</p>
        <article className="legal">{children}</article>
      </main>
      <Footer />
      <style>{`
        .legal { font-size: 16px; line-height: 1.65; color: #3d3860; }
        .legal h2 { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.25; color: #1e1a3a; margin: 40px 0 12px; }
        .legal h3 { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; color: #1e1a3a; margin: 24px 0 8px; }
        .legal p { margin: 0 0 14px; }
        .legal ul { margin: 0 0 14px; padding-left: 22px; list-style: disc; }
        .legal li { margin-bottom: 6px; }
        .legal a { color: #534ab7; text-decoration: underline; text-underline-offset: 2px; }
        .legal strong { color: #1e1a3a; font-weight: 600; }
        .legal table { width: 100%; border-collapse: collapse; margin: 0 0 18px; font-size: 14.5px; }
        .legal th, .legal td { text-align: left; vertical-align: top; padding: 8px 10px; border-bottom: 1px solid #e2e0f0; }
        .legal th { font-weight: 600; color: #1e1a3a; background: #f8f7fd; }
      `}</style>
    </div>
  )
}
