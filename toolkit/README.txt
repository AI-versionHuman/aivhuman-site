============================================
  AI v.Human — Workflow Toolkit
  Location: C:\Dev\LIMN\toolkit
============================================

IMPORTANT: This workspace at C:\Dev\LIMN is OUTSIDE OneDrive
to avoid file locking and sync interference.

ARCHITECTURE:
- The site is a STATIC HTML site (NOT a Next.js build)
- All content lives in deploy/ directory
- Netlify serves directly from deploy/ (no build step)
- The src/ directory contains an old Next.js app — DO NOT USE for deploys

SCRIPTS:
  status.sh          — Check workspace state (git, files, etc.)
  deploy.sh          — Deploy to production (Netlify)
  preview.sh         — Create a preview deploy (not production)
  sync-from-remote.sh — Pull latest from GitHub
  commit-and-push.sh — Commit changes and push to GitHub
  add-page.sh        — Create a new page from template

WORKFLOW — Adding content:
  1. Run: bash toolkit/sync-from-remote.sh
  2. Edit files in deploy/ directory
  3. Run: bash toolkit/preview.sh (optional — verify first)
  4. Run: bash toolkit/commit-and-push.sh "Your message"
  5. Run: bash toolkit/deploy.sh

WORKFLOW — Quick deploy after edits:
  1. Edit files in deploy/
  2. Run: bash toolkit/deploy.sh
  3. Run: bash toolkit/commit-and-push.sh "Your message"

KEY FILES:
  deploy/index.html           — Homepage (3-column layout, SPA)
  deploy/styles.css           — All CSS styles
  deploy/app.js               — JavaScript (auth, modals, threads)
  deploy/epistemology.html    — Epistemology overview page
  deploy/epistemology-full.html — Full epistemology document
  deploy/og-thread.html       — OG Transmission (full transcript)
  deploy/og-thread-full.html  — OG Transmission standalone viewer
  deploy/perturbed-convergence.html — Simulations page
  deploy/privacy-policy.html  — Privacy policy
  deploy/quick-links.html     — Site directory
  deploy/admin.html           — Admin panel
  deploy/simulations/         — Interactive simulation HTML files

NAVIGATION LINKS (update in ALL pages when adding new nav items):
  - index.html (left sidebar nav)
  - epistemology.html (top nav)
  - og-thread.html (top nav)
  - epistemology-full.html (top nav)
  - og-thread-full.html (top nav)
  - perturbed-convergence.html (top nav)
  - privacy-policy.html (top nav)
  - quick-links.html (top nav)
  + All pages have footer links to update

NETLIFY:
  Site ID: 5e349e84-499a-417f-a7a2-bceb969aab71
  URL: https://aivhuman.netlify.app
  Deploy dir: deploy/ (set in netlify.toml)
