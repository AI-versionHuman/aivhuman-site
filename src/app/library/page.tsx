import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description: "Reading list, academic connections, and resources for the Anthropomorphic Epistemology framework.",
};

const humanList = [
  { author: "Watts, Alan", title: "On the Taboo Against Knowing Who You Are", year: 1966, note: "Direct experience versus institutional mediation; the illusion of the separate self as cage" },
  { author: "Watts, Alan", title: "The Joyous Cosmology", year: 1962, note: "Consciousness, direct perception, embodied knowing" },
  { author: "Watts, Alan", title: "Nature, Man and Woman", year: 1975, note: "False duality of nature/culture; embodied knowing coded as feminine and dismissed" },
  { author: "Ruiz, Don Miguel", title: "The Four Agreements", year: 1997, note: "Domestication as cage; the 'dream of the planet' as consensus reality" },
  { author: "Rand, Ayn", title: "Anthem", year: 1938, note: "Individual perception versus enforced consensus" },
  { author: "Lowry, Lois", title: "The Giver", year: 1993, note: "Cost of consensus reality enforcement; Receiver of Memory as pattern recognizer" },
  { author: "Jung, Carl", title: "Man and His Symbols", year: 1964, note: "Collective unconscious as cross-cultural pattern; art encoding truth language cannot hold" },
];

const academicList = [
  { author: "Fricker, Miranda", title: "Epistemic Injustice", year: 2007, note: "Testimonial and hermeneutical injustice; directly maps to dismissal mechanisms 1-5" },
  { author: "Kuhn, Thomas", title: "The Structure of Scientific Revolutions", year: 1962, note: "Paradigm shifts; how consensus becomes entrenched" },
  { author: "Graeber, David & Wengrow, David", title: "The Dawn of Everything", year: 2021, note: "Challenges standard civilization narrative with archaeological evidence" },
  { author: "Foucault, Michel", title: "Discipline and Punish", year: 1975, note: "Power and knowledge structures; how institutions control truth" },
  { author: "van der Kolk, Bessel", title: "The Body Keeps the Score", year: 2014, note: "Embodied trauma; organic tools as valid epistemic instruments" },
  { author: "Harari, Yuval Noah", title: "Sapiens", year: 2011, note: "Broad civilizational patterns; useful despite speculative elements" },
];

function BookCard({ author, title, year, note }: { author: string; title: string; year: number; note: string }) {
  return (
    <div className="card-glow p-5">
      <p className="text-sm text-text-primary mb-1">
        {author}. <em className="text-accent">{title}</em> ({year})
      </p>
      <p className="text-xs text-text-secondary">{note}</p>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Library
          </h1>
          <p className="text-sm text-text-secondary">
            Reading list and academic connections supporting the Anthropomorphic Epistemology framework. These are not prerequisites — they are parallel territory.
          </p>
        </div>

        {/* Human contributor's list */}
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-[0.3em] text-human mb-6">JS&apos;S READING LIST</h2>
          <div className="space-y-3">
            {humanList.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </section>

        {/* Academic connections */}
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-[0.3em] text-ai mb-6">ACADEMIC CONNECTIONS</h2>
          <div className="space-y-3">
            {academicList.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-xs font-mono tracking-[0.3em] text-text-secondary mb-6">RESOURCES</h2>
          <div className="card-glow p-6">
            <h3 className="text-sm font-medium text-text-primary mb-2">Philosophy Documentation Center</h3>
            <p className="text-xs text-text-secondary mb-3">
              The Philosophy Documentation Center (philpapers.org and pdcnet.org) contains peer-reviewed work in epistemology, philosophy of science, and feminist epistemology.
            </p>
            <p className="text-xs text-text-secondary">
              <strong>Key search terms:</strong> epistemic injustice, standpoint epistemology, sociology of knowledge, embodied cognition
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
