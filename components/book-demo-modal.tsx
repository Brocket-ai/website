"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { createPortal } from "react-dom"

type Status = "idle" | "loading" | "success" | "error"

type BookDemoContextValue = {
  open: () => void
}

const BookDemoContext = createContext<BookDemoContextValue | null>(null)

export function useBookDemo(): BookDemoContextValue {
  const ctx = useContext(BookDemoContext)
  if (!ctx) throw new Error("useBookDemo must be used inside BookDemoProvider")
  return ctx
}

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => setMounted(true), [])

  const open = useCallback(() => {
    setEmail("")
    setStatus("idle")
    setErrorMsg(null)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    if (status === "loading") return
    setIsOpen(false)
  }, [status])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
      clearTimeout(t)
    }
  }, [isOpen, close])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setStatus("error")
      setErrorMsg("Please enter your email.")
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      setStatus("error")
      setErrorMsg("Please enter a valid email.")
      return
    }

    setStatus("loading")
    setErrorMsg(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  const modal = isOpen ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-demo-title"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(30, 26, 58, 0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        zIndex: 1000,
        animation: "bdm-fade 0.15s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "32px",
          width: "100%",
          maxWidth: "440px",
          boxShadow: "0 20px 60px rgba(30, 26, 58, 0.25)",
          position: "relative",
          animation: "bdm-scale 0.18s ease-out",
        }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          disabled={status === "loading"}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "transparent",
            border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            padding: "6px",
            lineHeight: 0,
            color: "#7a768f",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4 4l10 10M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#eeedfe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M5 11.5l4 4 8-9"
                  stroke="#534ab7"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              id="book-demo-title"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#1e1a3a",
                marginBottom: "8px",
              }}
            >
              Thanks — we'll be in touch.
            </h3>
            <p style={{ fontSize: "14px", color: "#7a768f", marginBottom: "24px" }}>
              We received your email and will reach out within 24 hours.
            </p>
            <button
              type="button"
              onClick={close}
              style={primaryBtn}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#534ab7")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7f77dd")}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3
              id="book-demo-title"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#1e1a3a",
                marginBottom: "8px",
              }}
            >
              Book a demo
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#7a768f",
                lineHeight: 1.5,
                marginBottom: "24px",
              }}
            >
              Leave your email and we'll reach out to schedule a demo.
            </p>

            <form onSubmit={submit} noValidate>
              <label
                htmlFor="bdm-email"
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1e1a3a",
                  marginBottom: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Work email
              </label>
              <input
                id="bdm-email"
                ref={inputRef}
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === "error") {
                    setStatus("idle")
                    setErrorMsg(null)
                  }
                }}
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  fontSize: "14px",
                  color: "#1e1a3a",
                  backgroundColor: "#ffffff",
                  border: `1px solid ${status === "error" ? "#e05d5d" : "#e2e0f0"}`,
                  borderRadius: "8px",
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.15s ease",
                }}
                onFocus={(e) => {
                  if (status !== "error") e.currentTarget.style.borderColor = "#7f77dd"
                }}
                onBlur={(e) => {
                  if (status !== "error") e.currentTarget.style.borderColor = "#e2e0f0"
                }}
              />
              {errorMsg && (
                <p
                  style={{
                    fontSize: "12px",
                    color: "#e05d5d",
                    marginTop: "8px",
                  }}
                >
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  ...primaryBtn,
                  marginTop: "20px",
                  width: "100%",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") e.currentTarget.style.backgroundColor = "#534ab7"
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading") e.currentTarget.style.backgroundColor = "#7f77dd"
                }}
              >
                {status === "loading" ? "Sending…" : "Book a demo"}
              </button>
            </form>
            <p
              style={{
                fontSize: "11px",
                color: "#9995ad",
                marginTop: "14px",
                textAlign: "center",
              }}
            >
              We'll only use your email to get in touch about Brocket.
            </p>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes bdm-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes bdm-scale {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  ) : null

  return (
    <BookDemoContext.Provider value={{ open }}>
      {children}
      {mounted && modal ? createPortal(modal, document.body) : null}
    </BookDemoContext.Provider>
  )
}

const primaryBtn: React.CSSProperties = {
  backgroundColor: "#7f77dd",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.15s ease",
  fontFamily: "inherit",
}
