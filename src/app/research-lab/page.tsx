import type { Metadata } from "next";
import Link from "next/link";
import styles from "./research-lab.module.css";

export const metadata: Metadata = {
  title: "Research Lab",
  description:
    "Original research exploring the statistical and mathematical foundations of collaborative intelligence. Phase transition hypothesis, catastrophe theory, and human-AI coupling.",
  openGraph: {
    title: "Research Lab | AI v.Human",
    description:
      "Where the math meets the method. Original research into discontinuous gains beyond diminishing returns.",
    type: "website",
    url: "https://aivhuman.netlify.app/research-lab",
  },
};

export default function ResearchLabPage() {
  return (
    <div className={styles.wrapper}>
      {/* Google Fonts for this page's design */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLabel}>Research Lab</div>
        <h1 className={styles.heroTitle}>
          Where the <em className={styles.heroTitleEm}>math</em> meets the
          method
        </h1>
        <p className={styles.heroSub}>
          Original research exploring the statistical and mathematical
          foundations of collaborative intelligence. Every claim is grounded in
          provable equations. Every model is falsifiable. This is where LIMN gets
          its rigor.
        </p>
      </section>

      {/* PAPERS */}
      <section className={styles.papersSection}>
        <div className={styles.sectionLabel}>
          Published Research — February 2026
        </div>

        <div className={styles.paperCard}>
          <div className={styles.paperStatus}>New Research</div>
          <h2 className={styles.paperTitle}>
            Anomalous Data or Phase Transition?
          </h2>
          <p className={styles.paperSubtitle}>
            A Statistical Inquiry into Discontinuous Gains Beyond Diminishing
            Returns
          </p>

          <div className={styles.paperMeta}>
            <div className={styles.metaItem}>
              <strong>Authors:</strong> Joshua Sebastian &amp; Claude
              (Anthropic)
            </div>
            <div className={styles.metaItem}>
              <strong>Date:</strong> February 2026
            </div>
            <div className={styles.metaItem}>
              <strong>Pages:</strong> 4
            </div>
            <div className={styles.metaItem}>
              <strong>Status:</strong> Discussion Draft
            </div>
          </div>

          <p className={styles.paperAbstract}>
            Standard models predict sigmoid growth with asymptotic flattening.
            But what happens when anomalous data clusters near the ceiling? This
            paper presents evidence — from AI benchmark performance data
            (2012–2025) and catastrophe theory — that these anomalies are not
            noise but signals of phase transitions: points where the governing
            dynamics of a system fundamentally change. We formalize nine provable
            equations mapping the logistic model, cusp catastrophe bifurcation
            conditions, power law distributions, dimensional carrying capacity,
            critical slowing down, and mutual information to testable predictions
            about where collaborative human-AI systems may access qualitatively
            different output regimes.
          </p>

          <div className={styles.paperEquations}>
            <h4 className={styles.paperEquationsTitle}>
              Key Equations (9 total, all provable &amp; solvable)
            </h4>
            <div className={styles.eqGrid}>
              <div className={styles.eqItem}>
                <span>Eq. 1</span> — Logistic Growth Model
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 2</span> — Cusp Catastrophe Potential
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 3</span> — Equilibrium Condition (Cubic)
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 4</span> — Discriminant of the Cusp
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 5</span> — Bifurcation Set Boundary
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 6</span> — Power Law Distribution
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 7</span> — Dimensional Carrying Capacity
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 8</span> — Critical Slowing Down
              </div>
              <div className={styles.eqItem}>
                <span>Eq. 9</span> — Mutual Information (Sweet Spot)
              </div>
            </div>
          </div>

          <div className={styles.paperActions}>
            <a
              href="/research/phase-transition-hypothesis.pdf"
              className={styles.btnPrimary}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
            <Link href="/epistemology" className={styles.btnSecondary}>
              View LIMN Framework →
            </Link>
          </div>
        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className={styles.findings}>
        <div className={styles.sectionLabel}>Key Findings</div>
        <div className={styles.findingsGrid}>
          <div className={styles.findingCard}>
            <div className={styles.findingNumber}>01</div>
            <h3>The Dip Precedes the Breakout</h3>
            <p>
              Systems approaching a phase transition perform worst immediately
              before the jump. Premature abandonment during this dip is the most
              common error in resource allocation.
            </p>
          </div>
          <div className={styles.findingCard}>
            <div className={styles.findingNumber}>02</div>
            <h3>Benchmark ≠ Capability</h3>
            <p>
              AI benchmark saturation (ImageNet, MMLU) reflects instrument
              limits, not system limits. Real capability growth contains
              discontinuities invisible to saturated benchmarks.
            </p>
          </div>
          <div className={styles.findingCard}>
            <div className={styles.findingNumber}>03</div>
            <h3>The Sweet Spot Is Dimensional</h3>
            <p>
              The collaborative sweet spot isn&apos;t a point on the existing
              curve — it&apos;s evidence of a higher-dimensional output space
              accessible only through human-AI coupling at intermediate
              intensity.
            </p>
          </div>
          <div className={styles.findingCard}>
            <div className={styles.findingNumber}>04</div>
            <h3>Nine Equations, All Testable</h3>
            <p>
              Every claim is backed by provable mathematics from catastrophe
              theory, information theory, and statistical distribution theory.
              All predictions are empirically falsifiable.
            </p>
          </div>
        </div>
      </section>

      {/* COLLABORATION NOTE */}
      <div className={styles.collabNote}>
        <h3 className={styles.collabNoteTitle}>On Methodology</h3>
        <p>
          This research was produced through human-AI collaborative analysis —
          the same methodology it investigates. The initial pattern recognition
          (anomalous data near asymptotes resembling phase transitions)
          originated from human intuition grounded in statistical reasoning
          coursework. The mathematical formalization, benchmark data compilation,
          and visualization were developed iteratively through reciprocal
          exchange between human and AI. Neither agent could have produced this
          document alone. That is the point.
        </p>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>
          <Link href="/">AI v Human</Link> — Collaborative Intelligence Platform
          &copy; 2026
        </p>
      </footer>
    </div>
  );
}
