/** Barra simple para las páginas de producto: logo a la izquierda, acceso a la app a la derecha. */
export function SheetsNav() {
  return (
    <header className="w-full px-6 py-4 md:px-12 md:py-5" style={{ backgroundColor: "#f5f4fb" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="/" aria-label="Brocket home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect x="2" y="4" width="32" height="7" rx="3.5" fill="#534AB7" />
            <rect x="2" y="15" width="22" height="7" rx="3.5" fill="#7f77dd" />
            <rect x="2" y="26" width="14" height="7" rx="3.5" fill="#afa9ec" />
          </svg>
          <span style={{ fontWeight: 600, fontSize: "22px", letterSpacing: "-0.03em", color: "#1e1a3a" }}>brocket</span>
        </a>
        <a href="https://app.brocket.xyz" style={{ fontSize: "14px", fontWeight: 500, color: "#3d3860", textDecoration: "none" }}>
          Log in
        </a>
      </div>
    </header>
  )
}
