// A legal page with an open decision must never reach brocket.xyz: production builds fail,
// preview builds (feature branches) pass so the text can still be reviewed.
import { readFileSync } from "node:fs"

const pages = ["app/privacy/page.tsx", "app/terms/page.tsx"]
const withPlaceholders = pages.filter((page) => readFileSync(page, "utf8").includes("<Pending>"))

if (withPlaceholders.length && process.env.VERCEL_ENV === "production") {
  console.error(`Legal pages still contain <Pending> decisions: ${withPlaceholders.join(", ")}`)
  process.exit(1)
}
