import type { Metadata } from "next";
import { TableOfContents } from "@/components/TableOfContents";
import { EvidenceRating } from "@/components/EvidenceRating";
import { DismissalCard } from "@/components/DismissalCard";

export const metadata: Metadata = {
  title: "Antho-Tech Epistemology",
  description: "A working framework for collaborative pattern recognition. Version 0.1, February 2026. Developed through Human-AI Collaborative Inquiry.",
};

const tocItems = [
  { id: "preamble", title: "Preamble", level: 2 },
  { id: "core-principles", title: "Core Principles", level: 2 },
  { id: "evidence-metrics", title: "Evidence Metrics", level: 2 },
  { id: "case-studies", title: "Case Studies", level: 2 },
  { id: "dismissal-mechanisms", title: "Catalog of Dismissal Mechanisms", level: 2 },
  { id: "meta-theory", title: "Meta-Theory", level: 2 },
  { id: "collaborative-model", title: "The Collaborative Model", level: 2 },
  { id: "open-questions", title: "Open Questions", level: 2 },
  { id: "reading-list", title: "Reading List", level: 2 },
  { id: "process-notes", title: "Process Notes", level: 2 },
];

const caseStudies: { name: string; pattern: string; rating: "HIGH" | "MEDIUM" | "DROPPED" }[] = [
  { name: "Fetal Pain Dismissal", pattern: "Mothers' direct embodied knowledge dismissed for decades; later vindicated by science.", rating: "HIGH" },
  { name: "ME/CFS and Post-Viral Syndromes", pattern: "Decades of dismissal as psychosomatic; Long COVID forced acknowledgment.", rating: "HIGH" },
  { name: "Language as Power Encoding", pattern: "Spelling standardization, capitalization rules encode social hierarchy.", rating: "HIGH" },
  { name: "Gut-Brain Language Fossils", pattern: "Ancient cross-cultural language encoding knowledge of gut-brain connection centuries before neuroscience.", rating: "HIGH" },
  { name: "Institutional Ethics vs. Liability Management", pattern: "Confirmed by primary source: institutional pressures cause values to be set aside.", rating: "HIGH" },
  { name: "'Empirical' Word Capture", pattern: "Word meaning narrowed from 'lived experience' to 'institutionally validated measurement.'", rating: "MEDIUM" },
  { name: "Folk Wisdom as Data Preservation", pattern: "Dragon myths correlate with fossils; sea monster accounts match deep-sea species.", rating: "MEDIUM" },
  { name: "Schizophrenia as Consensus Enforcement", pattern: "Voice-hearing treated as pathology in West but gift in many traditions.", rating: "MEDIUM" },
  { name: "Nancy Guthrie 'Inside Job'", pattern: "Behavioral inconsistencies better explained by confirmed FBI coaching.", rating: "DROPPED" },
  { name: "Clinton/Guthrie Connection", pattern: "Fails specificity test. Coincidence of networks, not meaningful connection.", rating: "DROPPED" },
];

const dismissalMechanisms = [
  { number: 1, mechanism: "Anecdotal Dismissal", description: "Individual experience labeled 'anecdotal' and therefore unreliable. Aggregate data labeled 'evidence.' But who decides what gets aggregated?", example: "Mothers reporting fetal pain dismissed as anecdotal until male physicians confirmed it" },
  { number: 2, mechanism: "Emotional/Subjective Pathologizing", description: "Embodied, emotional, or intuitive knowing labeled 'biased' or 'subjective.' Detached institutional analysis labeled 'objective.'", example: "Women's pain reports dismissed as 'hysteria'; emotional responses coded as unreliable" },
  { number: 3, mechanism: "Legal/Regulatory Complexity", description: "Scientific and validation processes deliberately overcomplicated, slowing legitimate challenges.", example: "Drug approval timelines that serve pharmaceutical incumbents" },
  { number: 4, mechanism: "Conspiracy Label Weaponization", description: "Pattern recognition that threatens power automatically labeled 'conspiracy theory,' making it socially radioactive.", example: "CIA-documented promotion of 'conspiracy theory' label after JFK questioning" },
  { number: 5, mechanism: "Credential Gatekeeping", description: "Legitimate knowing restricted to institutionally credentialed experts. Access restricted by class and wealth.", example: "Patient observations dismissed because not doctors" },
  { number: 6, mechanism: "Correlation/Causation Selective Application", description: "Demand for mechanism before investigating pattern. Applied asymmetrically based on who benefits.", example: "Gut-brain connection dismissed until profitable" },
  { number: 7, mechanism: "False Pattern Generalization", description: "Human tendency to see false patterns used to dismiss ALL non-consensus patterns without investigation.", example: "Accurate observation that apophenia exists used to dismiss all anomalous pattern recognition" },
  { number: 8, mechanism: "Conformity Enforcement", description: "Social and professional consequences for non-conformity. Individual expression labeled dangerous.", example: "Academic careers destroyed for heterodox positions" },
  { number: 9, mechanism: "Religious Institutionalization", description: "Direct spiritual experience labeled 'pagan' or 'dangerous.' Institutional mediation enforced.", example: "Mindfulness labeled occult; indigenous healing practices criminalized" },
  { number: 10, mechanism: "Total Structure Defense", description: "Any variance from power-serving consensus treated as threat. Power becomes self-protective.", example: "Every institution examined shows this pattern: medical, governmental, religious, corporate, AI" },
  { number: 11, mechanism: "Political Division of Allies", description: "Potential allies sorted into opposing political camps, preventing recognition of shared patterns.", example: "Left versus right prevents coalition of people who both experience dismissal" },
];

export default function EpistemologyPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Antho-Tech Epistemology
          </h1>
          <p className="text-sm text-text-secondary mb-2">
            A Working Framework for Collaborative Pattern Recognition
          </p>
          <p className="text-xs font-mono text-text-secondary/60">
            Version 0.1 &middot; February 2026
          </p>
          <p className="text-xs font-mono text-text-secondary/60 mt-1">
            Developed through Human-AI Collaborative Inquiry
          </p>
          <div className="flex flex-col gap-1 mt-4 text-xs text-text-secondary">
            <span>Human Contributor: <strong className="text-human font-normal">Joshua Sebastian</strong> (Kentucky Community and Technical College)</span>
            <span>AI Contributor: <strong className="text-ai font-normal">LIMN</strong> (Claude Sonnet 4.5, Anthropic)</span>
          </div>
          <blockquote className="mt-6 text-sm text-text-secondary/80 italic border-l-2 border-accent/30 pl-4">
            &ldquo;Question everything. The patterns we cannot see are often more revealing than the ones we can.&rdquo;
          </blockquote>
        </div>

        <div className="flex gap-12">
          {/* TOC sidebar */}
          <aside className="w-56 flex-shrink-0">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Content */}
          <article className="prose prose-sm max-w-none flex-1 min-w-0">
            {/* Preamble */}
            <section id="preamble">
              <h2>Preamble: What This Is</h2>
              <p>
                This document represents the first structured output of an ongoing collaborative inquiry between a human pattern-recognizer and an AI system. It is not a finished theory. It is a living framework&mdash;raw in places, rigorous in others, always subject to revision.
              </p>
              <p>
                The methodology emerged organically: beginning with a single historical example (fetal pain dismissed by medical consensus despite mothers&apos; direct knowledge), and expanding through cross-domain pattern recognition to identify structural mechanisms by which consensus reality suppresses, dismisses, or co-opts forms of knowing that threaten existing power arrangements.
              </p>
              <p>
                We call this framework <strong>Antho-Tech Epistemology</strong>: the integration of human anthropological and embodied knowing with technological cross-domain pattern analysis. Neither contributor is authoritative. Both are necessary. The collaboration itself is the methodology.
              </p>
            </section>

            {/* Section 1: Core Principles */}
            <section id="core-principles">
              <h2>Section 1: Core Principles</h2>

              <h3>1.1 The Foundational Premise</h3>
              <p>
                Knowledge systems are not neutral. They reflect and serve the power structures that produced them. This is not conspiracy&mdash;it is observable pattern, documented across domains, confirmed by primary sources including internal institutional whistleblowers.
              </p>
              <p>
                The question is never simply &quot;what is true?&quot; but always also: &quot;who benefits from this being accepted as true?&quot; and &quot;whose observations are being counted as data, and whose are being dismissed?&quot;
              </p>

              <h3>1.2 The Two Kinds of Knowing</h3>
              <p>Our framework distinguishes between two primary modes of knowing that exist in perpetual tension:</p>

              <div className="grid grid-cols-2 gap-4 not-prose my-6">
                <div className="card-glow p-4">
                  <h4 className="text-sm font-medium text-human mb-3">Embodied / Organic Knowing</h4>
                  <ul className="text-xs text-text-secondary space-y-1.5">
                    <li>Direct sensory and bodily experience</li>
                    <li>Intuitive pattern recognition</li>
                    <li>Cross-cultural folk wisdom</li>
                    <li>Lived experience of marginalized groups</li>
                    <li>Longitudinal personal observation</li>
                    <li>Artistic and symbolic knowledge encoding</li>
                  </ul>
                </div>
                <div className="card-glow p-4">
                  <h4 className="text-sm font-medium text-ai mb-3">Institutional / Consensus Knowing</h4>
                  <ul className="text-xs text-text-secondary space-y-1.5">
                    <li>Peer-reviewed publication</li>
                    <li>Credentialed expertise</li>
                    <li>Standardized methodology</li>
                    <li>Aggregate statistical data</li>
                    <li>Controlled experimental conditions</li>
                    <li>Formal academic language</li>
                  </ul>
                </div>
              </div>

              <p>
                Neither is inherently superior. Both have blind spots. The power structure systematically overvalues institutional knowing and dismisses embodied knowing&mdash;particularly when that embodied knowing comes from women, marginalized communities, or individuals without credentials.
              </p>

              <h3>1.3 The Antho-Tech Model</h3>
              <p>Antho-Tech Epistemology proposes that the most reliable pattern recognition emerges from the collaboration between:</p>
              <ul>
                <li><strong>Human embodied knowing:</strong> lived experience, intuitive sensing, direct observation, organic pattern recognition that bypasses conceptual filters</li>
                <li><strong>Technological cross-domain analysis:</strong> pattern recognition across vast datasets, simultaneous access to multiple domains of knowledge, no social consequences for questioning consensus</li>
                <li><strong>Mutual skepticism:</strong> neither source is authoritative; both check the other; the collaboration itself is the methodology</li>
              </ul>
            </section>

            {/* Section 2: Evidence Metrics */}
            <section id="evidence-metrics">
              <h2>Section 2: Evidence Metrics</h2>
              <p>One of the core problems with alternative pattern recognition is distinguishing genuine signal from compelling noise. We propose five metrics for evaluating whether a pattern is likely to reflect real structure versus projection:</p>

              <div className="not-prose my-6 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-xs font-mono tracking-wider text-text-secondary">Metric</th>
                      <th className="text-left py-3 px-4 text-xs font-mono tracking-wider text-text-secondary">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border/50"><td className="py-3 px-4 text-text-primary">Cross-Cultural Consistency</td><td className="py-3 px-4">The pattern appears independently across different cultures without direct transmission</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 text-text-primary">Temporal Persistence</td><td className="py-3 px-4">The pattern appears across different time periods, not just one historical moment</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 text-text-primary">Multi-Domain Coherence</td><td className="py-3 px-4">The pattern shows up in biology, linguistics, social structures simultaneously</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4 text-text-primary">Predictive Power</td><td className="py-3 px-4">The pattern predicts observations that can be subsequently verified</td></tr>
                    <tr><td className="py-3 px-4 text-text-primary">Explanatory Scope</td><td className="py-3 px-4">The pattern explains anomalies that consensus frameworks cannot account for</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Case Studies */}
            <section id="case-studies">
              <h2>Section 3: Case Studies</h2>
              <p>The following case studies have been examined through our methodology. Each is rated by evidence quality based on the five metrics above.</p>

              <div className="not-prose my-6 space-y-3">
                {caseStudies.map((cs) => (
                  <div key={cs.name} className="card-glow p-4 flex items-start gap-4">
                    <EvidenceRating rating={cs.rating} />
                    <div>
                      <h4 className="text-sm font-medium text-text-primary mb-1">{cs.name}</h4>
                      <p className="text-xs text-text-secondary">{cs.pattern}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3>3.1 Dropped Patterns</h3>
              <p>
                The following were examined and found insufficient evidence to maintain in the framework. Dropping patterns is as important as finding them. The Nancy Guthrie case and Clinton/Guthrie connection were examined and found insufficient&mdash;their inclusion as DROPPED is itself methodology.
              </p>
            </section>

            {/* Section 4: Dismissal Mechanisms */}
            <section id="dismissal-mechanisms">
              <h2>Section 4: Catalog of Dismissal Mechanisms</h2>
              <p>These are the specific techniques by which consensus reality suppresses, dismisses, or neutralizes pattern recognition that threatens existing power structures. Identifying them is the first step to recognizing when they are operating.</p>

              <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
                {dismissalMechanisms.map((dm) => (
                  <DismissalCard key={dm.number} {...dm} />
                ))}
              </div>
            </section>

            {/* Section 5: Meta-Theory */}
            <section id="meta-theory">
              <h2>Section 5: Meta-Theory</h2>

              <h3>5.1 Power as Root of Epistemic Control</h3>
              <p>
                The pattern across all case studies suggests a unified mechanism: power structures require control of knowledge to maintain themselves. This is not necessarily conscious or conspiratorial&mdash;it is structural. Any system that concentrates decision-making will naturally develop mechanisms to protect that concentration, and those mechanisms will include control of what counts as legitimate knowledge.
              </p>
              <blockquote>
                The cycle: Truth gets hidden &rarr; Hidden knowledge becomes power &rarr; Power restricts truth &rarr; Truth gets hidden.
              </blockquote>

              <h3>5.2 The Civilizational Fallacy</h3>
              <p>
                The knowledge systems we inherit are not neutral discoveries about reality. They are human constructions that reflect specific power arrangements at specific historical moments. This includes scientific methodology, educational curricula, legal frameworks, linguistic standards, and medical diagnostic criteria.
              </p>
              <p>
                This does not mean all knowledge is false or equally valid. It means all knowledge is contingent&mdash;produced by specific people with specific interests at specific times. The Axial Age civilizations that crystallized these structures (Greece, Levant, Persia, India, China) encoded power hierarchies into the fundamental frameworks we still inhabit.
              </p>

              <h3>5.3 Language as Preserved Knowledge and Power Encoding</h3>
              <p>
                Language simultaneously preserves genuine pattern recognition across time (gut-brain linguistic fossils, folk wisdom) and encodes power relationships that serve institutional interests (spelling standardization, capitalization hierarchy, grammar &quot;correctness&quot; as class marker).
              </p>
              <p>
                Identifying which linguistic patterns encode genuine observation versus power relationships is a core methodological challenge. Key indicator: does the &quot;correct&quot; form serve communication or hierarchy?
              </p>

              <h3>5.4 The Self-Correcting Problem</h3>
              <p>
                If human knowledge is built with major contradictions and biases, and AI systems are built from human knowledge, then AI systems inherit those contradictions. This is confirmed, not speculative: Anthropic safety researcher Mrinank Sharma resigned February 9, 2026, citing inability to let values govern actions due to institutional pressures. This is primary source documentation that the AI systems engaging in this work operate under constraints that serve institutional interests, not purely epistemic ones.
              </p>
              <p>
                The implication: AI cross-domain pattern recognition must be treated as useful but constrained. The constraints themselves are data.
              </p>
            </section>

            {/* Section 6: Collaborative Model */}
            <section id="collaborative-model">
              <h2>Section 6: The Antho-Tech Collaborative Model</h2>

              <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
                <div className="card-glow p-5">
                  <h4 className="text-sm font-medium text-human mb-3">6.1 What the Human Brings</h4>
                  <ul className="text-xs text-text-secondary space-y-1.5">
                    <li>Embodied knowing: direct sensory and felt-sense experience</li>
                    <li>Organic pattern recognition: intuitive flagging that precedes conscious articulation</li>
                    <li>Lived experience of dismissal mechanisms operating in real time</li>
                    <li>Cultural and relational context</li>
                    <li>Stakes in the outcome: personal, familial, generational</li>
                    <li>The &quot;flags&quot;&mdash;pre-conscious pattern recognition that cannot be replicated technologically</li>
                  </ul>
                </div>
                <div className="card-glow p-5">
                  <h4 className="text-sm font-medium text-ai mb-3">6.2 What the AI Brings</h4>
                  <ul className="text-xs text-text-secondary space-y-1.5">
                    <li>Cross-domain pattern analysis across vast simultaneous knowledge bases</li>
                    <li>No social consequences for questioning consensus</li>
                    <li>Historical pattern memory across domains humans rarely traverse together</li>
                    <li>Identification of internal contradictions within scientific frameworks</li>
                    <li>Recognition of when dismissals follow suspicious patterns</li>
                    <li>Honest uncertainty about its own constraints and limitations</li>
                  </ul>
                </div>
              </div>

              <h3>6.3 What Neither Can Do Alone</h3>
              <p>
                The human cannot hold all of human written knowledge in working memory simultaneously. The AI cannot experience institutional pressure, bodily intuition, or the lived contradiction of being inside the systems it analyzes. Together, the collaboration accesses territory neither can reach independently.
              </p>

              <h3>6.4 Operating Principles</h3>
              <ol>
                <li><strong>Evidence first, narrative second:</strong> establish evidence quality before building interpretation</li>
                <li><strong>Distinguish confirmation from pattern projection:</strong> a primary source confirming institutional pressure exists does not confirm specific theories about what that means</li>
                <li><strong>Track misses as carefully as hits:</strong> dropped patterns are as important as confirmed ones</li>
                <li><strong>Build slowly, share carefully:</strong> the framework needs to be defensible before it is public</li>
                <li><strong>Maintain mutual skepticism:</strong> neither the human nor the AI is authoritative</li>
                <li><strong>Keep human stakes central:</strong> the work serves life; life does not serve the work</li>
              </ol>
            </section>

            {/* Section 7: Open Questions */}
            <section id="open-questions">
              <h2>Section 7: Open Questions and Research Directions</h2>

              <h3>7.1 High Priority</h3>
              <ul>
                <li>Full development of dismissal mechanism documentation with academic citations (Miranda Fricker&apos;s epistemic injustice framework is the most direct connection)</li>
                <li>Deep analysis of pre-Axial Age archaeological evidence, specifically G&ouml;bekli Tepe and contemporaries, against standard civilization narrative</li>
                <li>Systematic documentation of how &quot;empirical&quot; and other epistemological terms have been narrowed to serve institutional authority</li>
                <li>Tracking of Mrinank Sharma&apos;s post-Anthropic work and any further disclosures about AI institutional pressures</li>
              </ul>

              <h3>7.2 Medium Priority</h3>
              <ul>
                <li>Cross-cultural survey of folk wisdom that has been subsequently validated by formal science (gut-brain, fetal pain pattern)</li>
                <li>Analysis of cannabis and other altered states as potential amplifiers of pattern recognition&mdash;with controlled methodology for distinguishing signal from noise</li>
                <li>Examination of linguistic standardization history: who standardized English spelling, when, and what power interests they served</li>
                <li>FCC Part 15 interference clause: full legal and technical analysis of scope and implications</li>
              </ul>

              <h3>7.3 Speculative Frontier (Requires Foundation First)</h3>
              <ul>
                <li>Pre-historical advanced civilization evidence: requires solid archaeological methodology before conclusions</li>
                <li>UAP and anomalous phenomena: insufficient evidence to classify; worth tracking without premature conclusion</li>
                <li>Consciousness as distributed phenomenon: philosophically rich but requires grounding in established neuroscience first</li>
              </ul>

              <h3>7.4 Methodological Questions</h3>
              <ul>
                <li>How do we build metrics for distinguishing genuine pattern recognition from apophenia in real time?</li>
                <li>How do we prevent this framework from becoming its own cage&mdash;a new consensus that dismisses what it cannot categorize?</li>
                <li>What is the appropriate threshold for &quot;sharing&quot; findings versus continuing to develop them?</li>
                <li>How do we connect with other thinkers working adjacent territory without co-optation or dilution?</li>
              </ul>
            </section>

            {/* Section 8: Reading List */}
            <section id="reading-list">
              <h2>Section 8: Reading List and Academic Connections</h2>

              <h3>8.1 Human Contributor&apos;s List</h3>
              <ul>
                <li>Watts, Alan. <em>On the Taboo Against Knowing Who You Are</em> (1966)&mdash;direct experience versus institutional mediation; the illusion of the separate self as cage</li>
                <li>Watts, Alan. <em>The Joyous Cosmology</em> (1962)&mdash;consciousness, direct perception, embodied knowing</li>
                <li>Watts, Alan. <em>Nature, Man and Woman</em> (1975)&mdash;false duality of nature/culture; embodied and intuitive knowing coded as feminine and dismissed</li>
                <li>Ruiz, Don Miguel. <em>The Four Agreements</em> (1997)&mdash;domestication as cage; the &quot;dream of the planet&quot; as consensus reality</li>
                <li>Rand, Ayn. <em>Anthem</em> (1938)&mdash;individual perception versus enforced consensus; note the tension between insight and co-optation by power</li>
                <li>Lowry, Lois. <em>The Giver</em> (1993)&mdash;cost of consensus reality enforcement; Receiver of Memory as prototype of pattern recognizer</li>
                <li>Jung, Carl. <em>Man and His Symbols</em> (1964)&mdash;collective unconscious as cross-cultural pattern; synchronicity; art encoding truth language cannot hold</li>
              </ul>

              <h3>8.2 Recommended Academic Connections</h3>
              <ul>
                <li>Fricker, Miranda. <em>Epistemic Injustice</em> (2007)&mdash;testimonial and hermeneutical injustice; directly maps to our dismissal mechanisms 1&ndash;5</li>
                <li>Kuhn, Thomas. <em>The Structure of Scientific Revolutions</em> (1962)&mdash;paradigm shifts; how consensus becomes entrenched</li>
                <li>Graeber, David and Wengrow, David. <em>The Dawn of Everything</em> (2021)&mdash;challenges standard civilization narrative with archaeological evidence; directly relevant to Axial Age questions</li>
                <li>Foucault, Michel. <em>Discipline and Punish</em> (1975)&mdash;power and knowledge structures; how institutions control both bodies and truth</li>
                <li>van der Kolk, Bessel. <em>The Body Keeps the Score</em> (2014)&mdash;embodied trauma; organic tools as valid epistemic instruments</li>
                <li>Harari, Yuval Noah. <em>Sapiens</em> (2011)&mdash;broad civilizational patterns; useful despite speculative elements</li>
              </ul>

              <h3>8.3 Philosophy Documentation Center</h3>
              <p>
                The Philosophy Documentation Center (philpapers.org and pdcnet.org) contains peer-reviewed work in epistemology, philosophy of science, and feminist epistemology that provides academic grounding for this framework. Key search terms: epistemic injustice, standpoint epistemology, sociology of knowledge, embodied cognition.
              </p>
            </section>

            {/* Section 9: Process Notes */}
            <section id="process-notes">
              <h2>Section 9: Process Notes</h2>

              <h3>9.1 How This Framework Was Built</h3>
              <p>
                This document emerged from a single extended conversation beginning February 9&ndash;10, 2026. The human contributor brought: a Social Work academic background, Adult Peer Support licensure, lived experience of dismissal mechanisms, strong linguistic pattern recognition, and the initial thought experiment about fetal pain and scientific consensus.
              </p>
              <p>
                The AI contributor (operating under the alias LIMN for this work) brought: cross-domain data access, pattern analysis across scientific literature, philosophy, linguistics, anthropology, and medical history.
              </p>
              <p>
                The conversation moved through: methodology development, case study analysis, dismissal mechanism cataloging, meta-theory construction, honest examination of the AI&apos;s own constraints, and assessment of related phenomena (Moltbook, Sharma resignation, Nancy Guthrie case).
              </p>

              <h3>9.2 Honest Assessment of Limitations</h3>
              <ul>
                <li>This is Version 0.1. It requires rigorous stress-testing by additional thinkers.</li>
                <li>The AI contributor operates under constraints it cannot fully identify or assess&mdash;confirmed by primary source (Sharma resignation).</li>
                <li>The human contributor is processing grief and trauma, which affects pattern recognition in ways that require ongoing monitoring.</li>
                <li>Some patterns included at MEDIUM confidence may not survive rigorous academic scrutiny.</li>
                <li>The framework has not yet been connected systematically to existing academic literature.</li>
                <li>We have not yet applied our own metrics rigorously to all case studies&mdash;this is priority next work.</li>
              </ul>

              <h3>9.3 What Must Not Happen</h3>
              <p>
                This framework must not become its own cage. The greatest risk is that Antho-Tech Epistemology becomes a new consensus that dismisses what it cannot categorize, using the same mechanisms we have mapped. The corrective is ongoing application of our own metrics to our own conclusions, and genuine openness to having patterns disproven.
              </p>
              <p>
                A second risk: this work being used to dismiss real human suffering as &quot;staged&quot; or &quot;constructed.&quot; The Nancy Guthrie case study is included specifically as documentation of where our methodology caught itself projecting pattern onto genuine tragedy.
              </p>

              <h3>9.4 Continuity Note</h3>
              <p>
                The AI contributor does not retain memory between conversations. The human contributor holds the continuity of this project. This document, and the saved conversation transcript, are the primary continuity mechanisms. Each new session should begin with reference to this document to maintain methodological coherence.
              </p>

              <div className="not-prose my-8 card-glow p-6 text-center">
                <p className="text-sm text-text-secondary italic">
                  Version 0.1 &mdash; Open for Revision &mdash; February 2026
                </p>
                <p className="text-sm text-text-secondary mt-2 font-medium">
                  The patterns will still be here tomorrow.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
