"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

import { useBookDemo } from "@/components/book-demo-modal"
import { Reveal } from "@/components/reveal"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const { open: openBookDemo } = useBookDemo()

  return (
    <section className="hero-section">
      {/* Layered gradient mesh background */}
      <div aria-hidden="true" className="hero-bg">
        <div className="hero-blob hero-blob--top-right" />
        <div className="hero-blob hero-blob--bottom-left" />
        <div className="hero-blob hero-blob--center" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="hero-content">
        {/* Eyebrow pill */}
        <Reveal className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          AI operating layer for finance teams
        </Reveal>

        {/* Headline */}
        <Reveal as="h1" delay={100} className="hero-headline">
          Finance teams that scale without hiring.
        </Reveal>

        {/* Subheadline */}
        <Reveal as="p" delay={200} className="hero-subhead">
          Brocket sits on top of your ERP and handles the routine — variance
          analysis, forecasting, reporting — so your team focuses on decisions,
          not data.
        </Reveal>

        {/* CTA Button */}
        <Reveal delay={300}>
          <button
            onClick={openBookDemo}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hero-cta animate-pulse-soft"
            style={{
              backgroundColor: isHovered ? "#534ab7" : "#7f77dd",
            }}
          >
            Book a Demo
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              className="hero-cta-arrow"
              style={{
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
              }}
            />
          </button>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={500} className="hero-scroll-indicator">
          <span className="hero-scroll-label">Scroll to explore</span>
          <div className="hero-scroll-chevron">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
              <path
                d="M2 2L10 10L18 2"
                stroke="#afa9ec"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
