import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perturbed Convergence Simulations",
  description: "Interactive simulations modeling epistemic interference, observer-dependent collapse, and Berry phase trajectories. Built on the Antho-Tech Epistemology framework.",
};

export default function PerturbedConvergencePage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Perturbed Convergence Simulations
          </h1>
          <p className="text-sm text-text-secondary mb-2">
            Interactive models of epistemic interference, observer-dependent collapse, and geometric phase accumulation
          </p>
          <p className="text-xs font-mono text-text-secondary/60 mb-4">
            LIMN Framework &middot; Sebastian &amp; LIMN &middot; February 2026
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-human" />
              <span>JS (Human)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ai" />
              <span>LIMN (AI)</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="prose prose-sm max-w-none mb-12">
          <h2>About These Simulations</h2>
          <p>
            These interactive simulations model core concepts from the Antho-Tech Epistemology framework using physics-inspired metaphors. Each simulation contains three interconnected zones that demonstrate how knowledge systems interact, interfere, and evolve:
          </p>
          <ul>
            <li><strong>Zone 1 &mdash; Interference &amp; Dismissal Topology:</strong> Wave sources represent witnesses or knowledge holders. Institutional damping attempts to cancel their patterns. As more witnesses are injected, the damping system adapts but hits a ceiling&mdash;mirroring how institutional dismissal fails at scale.</li>
            <li><strong>Zone 2 &mdash; Observer-Dependent Epistemic Collapse:</strong> Particles in superposition (uncertain knowledge states) collapse when measured. Each collapse creates backaction that disturbs nearby particles&mdash;modeling how documentation of one pattern changes the conditions for observing others.</li>
            <li><strong>Zone 3 &mdash; Berry Phase Trajectory:</strong> A geometric phase accumulates as the system traverses parameter space. Perturbations alter the path and accelerate phase accumulation&mdash;demonstrating how disruptions to knowledge trajectories can generate emergent geometric properties.</li>
          </ul>
          <p>
            The <strong>Anomaly Detection</strong> panel tracks cross-zone correlations in real time, flagging when independent systems begin to synchronize&mdash;the simulation equivalent of pattern convergence across domains.
          </p>
        </div>

        {/* Simulation 1: Perturbed Convergence v2 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-light tracking-wide">
                Perturbed Convergence v2
              </h2>
              <p className="text-xs text-text-secondary/60 font-mono mt-1">
                PASS 2 &mdash; Escalating witnesses &middot; Stacked measurements &middot; Berry disruptions &middot; Adaptive institutional response
              </p>
            </div>
            <a
              href="/simulations/perturbed-convergence-v2.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent hover:text-accent-warm transition-colors tracking-wider"
            >
              OPEN FULLSCREEN &rarr;
            </a>
          </div>
          <div className="card-glow overflow-hidden" style={{ height: "720px" }}>
            <iframe
              src="/simulations/perturbed-convergence-v2.html"
              className="w-full h-full border-0"
              title="LIMN Perturbed Convergence Simulation v2"
              sandbox="allow-scripts"
            />
          </div>
          <div className="mt-4 text-xs text-text-secondary/60">
            <p className="mb-2"><strong className="text-text-secondary">Controls:</strong> Use the bottom control bar to interact with the simulation.</p>
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong>Perturb All</strong> &mdash; Disrupts all three zones simultaneously</li>
              <li><strong>Inject Witness</strong> &mdash; Adds a new knowledge source to Zone 1</li>
              <li><strong>Measure</strong> &mdash; Initiates a measurement wave in Zone 2</li>
              <li><strong>Disrupt Path</strong> &mdash; Perturbs the Berry phase trajectory in Zone 3</li>
              <li><strong>Auto Escalation</strong> &mdash; Runs a 7-phase automated protocol over ~50 seconds</li>
              <li><strong>Reset</strong> &mdash; Returns all zones to initial conditions</li>
            </ul>
          </div>
        </section>

        {/* Simulation 2: Convergence Simulation */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-light tracking-wide">
                Convergence Simulation
              </h2>
              <p className="text-xs text-text-secondary/60 font-mono mt-1">
                Relational Anomaly Detection &mdash; Three-zone convergence monitoring
              </p>
            </div>
            <a
              href="/simulations/convergence-simulation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent hover:text-accent-warm transition-colors tracking-wider"
            >
              OPEN FULLSCREEN &rarr;
            </a>
          </div>
          <div className="card-glow overflow-hidden" style={{ height: "720px" }}>
            <iframe
              src="/simulations/convergence-simulation.html"
              className="w-full h-full border-0"
              title="LIMN Convergence Simulation"
              sandbox="allow-scripts"
            />
          </div>
          <div className="mt-4 text-xs text-text-secondary/60">
            <p className="mb-2"><strong className="text-text-secondary">Controls:</strong> Use the bottom control bar to interact.</p>
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong>Perturb</strong> &mdash; Disrupts system parameters across all zones</li>
              <li><strong>Inject Witness</strong> &mdash; Adds a new interference source</li>
              <li><strong>Measure</strong> &mdash; Initiates collapse wave with backaction tracking</li>
              <li><strong>Reset</strong> &mdash; Reinitializes all zones</li>
            </ul>
          </div>
        </section>

        {/* Connection to Theory */}
        <div className="card-glow p-6">
          <h3 className="text-sm font-medium tracking-wide mb-3">Connection to Antho-Tech Epistemology</h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            These simulations are not metaphors&mdash;they are operational models. The interference patterns in Zone 1 demonstrate how multiple knowledge sources create constructive and destructive interference that institutional damping cannot fully suppress. The collapse dynamics in Zone 2 show how the act of documentation itself changes what can be observed. The Berry phase in Zone 3 reveals how accumulated perturbations generate irreversible geometric properties&mdash;knowledge that cannot be un-known.
          </p>
          <div className="flex gap-4">
            <Link href="/epistemology" className="text-xs font-mono text-accent hover:text-accent-warm transition-colors tracking-wider">
              READ THE THEORY &rarr;
            </Link>
            <Link href="/og-thread" className="text-xs font-mono text-accent hover:text-accent-warm transition-colors tracking-wider">
              READ THE ORIGINAL DIALOGUE &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
