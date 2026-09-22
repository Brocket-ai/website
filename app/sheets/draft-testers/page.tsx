import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { SheetsNav } from "@/components/sheets-nav"

export const metadata: Metadata = {
  title: "Draft testers - Brocket for Sheets",
  description:
    "What it means to be a draft tester of the Brocket for Sheets add-on, and how to stop being one.",
  robots: { index: false, follow: false },
}

export default function DraftTestersPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f5f4fb" }}>
      <SheetsNav />

      <main className="flex-1 mx-auto px-6 pb-24 pt-12 md:px-12 md:pt-16" style={{ maxWidth: "720px" }}>
        <h1
          style={{
            fontSize: "clamp(30px, 5vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#1e1a3a",
            marginBottom: "20px",
          }}
        >
          Draft testers
        </h1>

        <div style={{ fontSize: "16px", lineHeight: 1.65, color: "#3d3860" }}>
          <p style={{ marginBottom: "16px" }}>
            Before a new version of the <strong>Brocket for Sheets</strong> add-on is published on the
            Google Workspace Marketplace, we ask a small number of people to install the draft version
            and check that it works. Those people are called draft testers.
          </p>
          <p style={{ marginBottom: "16px" }}>
            If your email address was added as a draft tester, the Marketplace shows you the draft
            version of the add-on instead of the published one. Nothing is installed without your
            action, and the draft behaves like the published add-on in every other way.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", color: "#1e1a3a", margin: "32px 0 12px" }}>
            How to stop being a draft tester
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Write to <a href="mailto:support@brocket.xyz" style={{ color: "#534ab7", textDecoration: "underline" }}>support@brocket.xyz</a>{" "}
            from the address that was added, and say you no longer want to be a draft tester. We remove
            it within two business days and confirm by email. You do not have to give a reason.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Removing your address stops the draft version from being offered to you. If you already
            installed the add-on, you can uninstall it at any time from{" "}
            <a href="https://workspace.google.com/marketplace/myapps" target="_blank" rel="noopener noreferrer" style={{ color: "#534ab7", textDecoration: "underline" }}>
              your Marketplace apps
            </a>
            , and revoke its access from{" "}
            <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener noreferrer" style={{ color: "#534ab7", textDecoration: "underline" }}>
              your Google Account connections
            </a>
            .
          </p>
          <p>
            How we handle your information is described in our{" "}
            <a href="/privacy" style={{ color: "#534ab7", textDecoration: "underline" }}>Privacy Policy</a>.
          </p>
        </div>
      </main>

      <div style={{ backgroundColor: "#1e1a3a", padding: "0 24px 28px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "28px" }}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
