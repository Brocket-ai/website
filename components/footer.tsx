const LINKS = [
  { label: "Brocket for Sheets", href: "/sheets" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "contact@brocket.xyz", href: "mailto:contact@brocket.xyz" },
] as const

/** Footer strip for dark backgrounds: rendered inside the final CTA on the home page and under every legal page. */
export function Footer() {
  return (
    <div
      style={{
        borderTop: "0.5px solid #2a2650",
        paddingTop: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        fontSize: "12px",
        color: "#6b6880",
      }}
    >
      <span>© {new Date().getFullYear()} Brocket. All rights reserved.</span>
      <nav className="flex items-center gap-5" aria-label="Legal">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="site-footer-link">
            {link.label}
          </a>
        ))}
      </nav>
      <style>{`
        .site-footer-link { color: #afa9ec; text-decoration: none; transition: color 200ms ease; }
        .site-footer-link:hover { color: #ffffff; }
      `}</style>
    </div>
  )
}
