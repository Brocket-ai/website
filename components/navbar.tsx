"use client"

import { useState } from "react"
import { useBookDemo } from "@/components/book-demo-modal"

function BrocketLogo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isLight = variant === "light"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Logo mark */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="2" y="4" width="32" height="7" rx="3.5" fill={isLight ? "#534AB7" : "#ffffff"} />
        <rect x="2" y="15" width="22" height="7" rx="3.5" fill={isLight ? "#7f77dd" : "#afa9ec"} />
        <rect x="2" y="26" width="14" height="7" rx="3.5" fill={isLight ? "#afa9ec" : "#7f77dd"} />
      </svg>
      {/* Wordmark */}
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

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)
  const { open: openBookDemo } = useBookDemo()

  return (
    <nav className="w-full px-6 py-4 md:px-12 md:py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <BrocketLogo />
        <button
          onClick={openBookDemo}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer rounded-lg px-5 py-2.5 text-sm text-white transition-colors"
          style={{
            backgroundColor: isHovered ? "#534ab7" : "#7f77dd",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Book a Demo
        </button>
      </div>
    </nav>
  )
}
