"use client"

import {
  AtSign,
  BarChart3,
  Briefcase,
  Database,
  FileSpreadsheet,
  MessageCircle,
  MessagesSquare,
  Monitor,
  Presentation,
  ServerCog,
  Users,
} from "lucide-react"
import type { ComponentType } from "react"

import { Reveal } from "@/components/reveal"

type IconComponent = ComponentType<{ size?: number; strokeWidth?: number }>

type Category = {
  label: string
  categoryIcon: IconComponent
  accent: string
  items: { name: string; color: string; icon: IconComponent }[]
}

const categories: Category[] = [
  {
    label: "ERP",
    categoryIcon: Database,
    accent: "#7f77dd",
    items: [
      { name: "SAP", color: "#0075be", icon: Database },
      { name: "Oracle NetSuite", color: "#ff6600", icon: ServerCog },
      { name: "MS Dynamics", color: "#00a4ef", icon: Briefcase },
    ],
  },
  {
    label: "Communication",
    categoryIcon: MessageCircle,
    accent: "#7f77dd",
    items: [
      { name: "Slack", color: "#4a154b", icon: MessagesSquare },
      { name: "Microsoft Teams", color: "#6264a7", icon: Users },
      { name: "Google Workspace", color: "#4285f4", icon: AtSign },
    ],
  },
  {
    label: "Reporting",
    categoryIcon: BarChart3,
    accent: "#7f77dd",
    items: [
      { name: "Microsoft Excel", color: "#217346", icon: FileSpreadsheet },
      { name: "PowerPoint", color: "#d24726", icon: Presentation },
      { name: "Google Presentations", color: "#fbbc04", icon: Monitor },
    ],
  },
]

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "")
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function Integrations() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "96px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
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
          Works with your stack.
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
          Brocket connects to the tools your finance team already uses.
        </Reveal>

        {/* Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="integrations-grid"
        >
          {categories.map((category, idx) => {
            const CategoryIcon = category.categoryIcon
            return (
              <Reveal
                key={category.label}
                delay={(idx + 1) * 100}
                className="integration-card hover-lift"
                style={{
                  backgroundColor: "#ffffff",
                  border: "0.5px solid #e2e0f0",
                  borderRadius: "12px",
                  padding: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div className="integration-card-accent" aria-hidden="true" />

                {/* Category Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <CategoryIcon size={14} strokeWidth={2.2} />
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#afa9ec",
                    }}
                  >
                    {category.label}
                  </span>
                </div>

                {/* Integration Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {category.items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <div
                        key={item.name}
                        className="integration-item"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          cursor: "default",
                        }}
                      >
                        {/* Icon tile */}
                        <div
                          className="integration-icon-tile"
                          style={
                            {
                              "--tile-bg": hexToRgba(item.color, 0.1),
                              "--tile-bg-hover": item.color,
                              color: item.color,
                            } as React.CSSProperties
                          }
                        >
                          <ItemIcon size={14} strokeWidth={2} />
                        </div>
                        {/* Name */}
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#3d3860",
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .integration-card {
          color: #afa9ec;
        }
        .integration-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #7f77dd 0%, #afa9ec 100%);
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .integration-card:hover .integration-card-accent {
          opacity: 1;
        }
        .integration-item {
          transition: transform 250ms cubic-bezier(0.5, 0, 0, 1);
        }
        .integration-item:hover {
          transform: translateX(4px);
        }
        .integration-icon-tile {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background-color: var(--tile-bg);
          flex-shrink: 0;
          transition: background-color 250ms ease, color 250ms ease;
        }
        .integration-item:hover .integration-icon-tile {
          background-color: var(--tile-bg-hover);
          color: #ffffff;
        }
        @media (max-width: 640px) {
          .integrations-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .integration-item,
          .integration-icon-tile,
          .integration-card-accent {
            transition: none !important;
          }
          .integration-item:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
