"use client"

import { useEffect, useState } from "react"
import { useBookDemo } from "@/components/book-demo-modal"

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
] as const

function BrocketLogo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="2" y="4" width="32" height="7" rx="3.5" fill={isLight ? "#534AB7" : "#ffffff"} />
        <rect x="2" y="15" width="22" height="7" rx="3.5" fill={isLight ? "#7f77dd" : "#afa9ec"} />
        <rect x="2" y="26" width="14" height="7" rx="3.5" fill={isLight ? "#afa9ec" : "#7f77dd"} />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "22px",
          letterSpacing: "-0.03em",
          color: isLight ? "#1e1a3a" : "#ffffff",
        }}
      >
        brocket
      </span>
    </div>
  )
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function Navbar() {
  const [isCtaHovered, setIsCtaHovered] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { open: openBookDemo } = useBookDemo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [mobileMenuOpen])

  const handleBookDemo = () => {
    setMobileMenuOpen(false)
    openBookDemo()
  }

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full px-6 py-4 backdrop-blur-sm transition-shadow md:px-12 md:py-5"
        style={{
          backgroundColor: "rgba(245, 244, 251, 0.85)",
          boxShadow: scrolled ? "0 8px 30px rgba(30, 26, 58, 0.05)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <BrocketLogo />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#3d3860",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openBookDemo}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              className="hidden cursor-pointer rounded-lg px-5 py-2.5 text-sm text-white transition-all duration-300 active:scale-95 md:block"
              style={{
                backgroundColor: isCtaHovered ? "#534ab7" : "#7f77dd",
                fontWeight: 600,
                fontSize: "14px",
                transform: isCtaHovered ? "translateY(-1px) scale(1.03)" : "translateY(0) scale(1)",
                boxShadow: isCtaHovered ? "0 8px 25px rgba(127, 119, 221, 0.35)" : "none",
              }}
            >
              Book a Demo
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg p-2 transition-colors md:hidden"
              style={{ color: "#1e1a3a" }}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay + drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileMenuOpen}
        className="fixed inset-0 z-[60] md:hidden"
        style={{
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          visibility: mobileMenuOpen ? "visible" : "hidden",
          transition: "visibility 300ms",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(30, 26, 58, 0.4)",
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        />

        {/* Drawer */}
        <aside
          className="absolute top-0 bottom-0 left-0 flex w-72 max-w-[80vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out"
          style={{
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "0.5px solid #e2e0f0" }}>
            <BrocketLogo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 transition-colors"
              style={{ color: "#7a768f" }}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link rounded-lg px-3 py-3 transition-colors"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1e1a3a",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="p-4">
            <button
              onClick={handleBookDemo}
              className="w-full cursor-pointer rounded-lg px-5 py-3 text-white transition-all active:scale-95"
              style={{
                backgroundColor: "#7f77dd",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Book a Demo
            </button>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          transition: color 200ms ease;
        }
        .nav-link:hover {
          color: #534ab7 !important;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0;
          background-color: #7f77dd;
          transition: width 300ms cubic-bezier(0.5, 0, 0, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-link:hover {
          background-color: #f5f4fb;
          color: #534ab7 !important;
        }
      `}</style>
    </>
  )
}
