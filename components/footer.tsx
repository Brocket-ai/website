const LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Log in", href: "https://app.brocket.xyz" },
] as const

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1e1a3a",
        borderTop: "1px solid rgba(175, 169, 236, 0.18)",
        padding: "28px 24px",
        width: "100%",
      }}
    >
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row"
        style={{ fontSize: "13px", color: "#afa9ec" }}
      >
        <span>© {new Date().getFullYear()} Brocket · <a href="mailto:contact@brocket.xyz" className="site-footer-link">contact@brocket.xyz</a></span>
        <nav className="flex items-center gap-6" aria-label="Legal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="site-footer-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <style>{`
        .site-footer-link { color: #afa9ec; text-decoration: none; transition: color 200ms ease; }
        .site-footer-link:hover { color: #ffffff; }
      `}</style>
    </footer>
  )
}
