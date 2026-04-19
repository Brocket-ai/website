"use client"

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react"

type RevealProps = {
  as?: ElementType
  /** Transition delay in milliseconds — useful to stagger sibling reveals. */
  delay?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function Reveal({ as: Tag = "div", delay = 0, className, style, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.15,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const mergedClassName = ["reveal", isVisible && "active", className].filter(Boolean).join(" ")
  const mergedStyle: CSSProperties =
    delay > 0 ? { ...style, ["--reveal-delay" as string]: `${delay}ms` } : (style ?? {})

  return (
    <Tag ref={ref} className={mergedClassName} style={mergedStyle}>
      {children}
    </Tag>
  )
}
