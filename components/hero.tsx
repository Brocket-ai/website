"use client"

import { useState } from "react"
import { useBookDemo } from "@/components/book-demo-modal"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const { open: openBookDemo } = useBookDemo()

  return (
    <section className="flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-24 md:min-h-[calc(100vh-104px)]">
      <div className="flex max-w-3xl flex-col items-center text-center">
        {/* Eyebrow pill */}
        <div
          className="mb-6 rounded-full px-4 py-2"
          style={{
            backgroundColor: "#eeedfe",
            color: "#534ab7",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          AI operating layer for finance teams
        </div>

        {/* Headline */}
        <h1
          className="mb-6 max-w-[700px] text-4xl md:text-[56px] md:leading-[1.1]"
          style={{
            color: "#1e1a3a",
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          Finance teams that scale without hiring.
        </h1>

        {/* Subheadline */}
        <p
          className="mb-10 max-w-[560px]"
          style={{
            color: "#7a768f",
            fontSize: "18px",
            lineHeight: 1.65,
          }}
        >
          Brocket sits on top of your ERP and handles the routine — variance
          analysis, forecasting, reporting — so your team focuses on decisions,
          not data.
        </p>

        {/* CTA Button */}
        <button
          onClick={openBookDemo}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer rounded-lg px-7 py-3.5 text-white transition-colors"
          style={{
            backgroundColor: isHovered ? "#534ab7" : "#7f77dd",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >
          Book a Demo
        </button>
      </div>
    </section>
  )
}
