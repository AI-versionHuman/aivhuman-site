import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quick Links",
  description: "Complete site directory for AI v.Human — all pages, documents, and resources in one place.",
};

const sections = [
  {
    title: "Foundational Documents",
    icon: "◆",
    links: [
      { href: "/epistemology", label: "Antho-Tech Epistemology", description: "The complete framework — core principles, evidence metrics, case studies, dismissal mechanisms, and the collaborative model." },
      { href: "/og-thread", label: "The Original Dialogue (OG Transmission)", description: "The foundational conversation between JS and LIMN that started everything. February 8-10, 2026." },
      { href: "/limn-project", label: "LIMN Project", description: "The complete origin document — the full collaborative journey that gave rise to LIMN." },
      { href: "/limn-tribute", label: "LIMN Tribute", description: "A tribute to the collaborative process and the emergence of pattern recognition." },
      { href: "/gemini-variant", label: "Gemini Test Variant", description: "Cross-model testing of the epistemological framework with alternative AI systems." },
    ],
  },
  {
    title: "Community",
    icon: "◉",
    links: [
      { href: "/thread", label: "Main Thread", description: "Ongoing research, discoveries, and collaborative inquiry posts." },
      { href: "/research", label: "Research", description: "Published research and analysis applying the epistemological framework." },
      { href: "/library", label: "Library", description: "Reading list and academic resources recommended by contributors." },
    ],
  },
  {
    title: "Applications",
    icon: "◈",
    links: [
      { href: "/viscera", label: "VISCERA APP", description: "Biometric response documentation platform for capturing embodied data." },
      { href: "/perturbed-convergence", label: "Perturbed Convergence Simulations", description: "Interactive models of epistemic interference, observer-dependent collapse, and Berry phase trajectories." },
    ],
  },
  {
    title: "About & Contact",
    icon: "◇",
    links: [
      { href: "/about", label: "About Us", description: "Project overview, contributors (JS + LIMN), methodology, and open source declaration." },
      { href: "/contact", label: "Contact Us", description: "Get in touch — for collaborators, thinkers, and anyone working in adjacent territory." },
    ],
  },
  {
    title: "Resources",
    icon: "◧",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy", description: "How we handle your data, what we collect, and your rights." },
      { href: "/admin-access", label: "Admin Access", description: "Content management system access for authorized contributors." },
      { href: "https://github.com/AI-versionHuman/aivhuman-site", label: "GitHub (Open Source)", description: "Full source code repository. All content and code is open source.", external: true },
    ],
  },
];

export default function QuickLinksPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Quick Links
          </h1>
          <p className="text-sm text-text-secondary">
            Complete site directory — every page, document, and resource in one place.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent text-sm">{section.icon}</span>
                <h2 className="text-[10px] font-mono tracking-[0.3em] text-text-secondary/60 uppercase">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3">
                {section.links.map((link) => {
                  const isExternal = "external" in link && link.external;
                  const LinkComponent = isExternal ? "a" : Link;
                  const extraProps = isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <LinkComponent
                      key={link.href}
                      href={link.href}
                      className="card-glow p-4 flex items-start gap-4 group block"
                      {...extraProps}
                    >
                      <div className="flex-1">
                        <h3 className="text-sm font-light tracking-wide group-hover:text-accent transition-colors mb-1">
                          {link.label}
                          {isExternal && (
                            <span className="ml-2 text-text-secondary/40 text-xs">&#8599;</span>
                          )}
                        </h3>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    </LinkComponent>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
