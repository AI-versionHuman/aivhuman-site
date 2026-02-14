import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AI v.Human project. We welcome collaborators, thinkers, and anyone working in adjacent territory.",
};

export default function ContactPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Contact
          </h1>
          <p className="text-sm text-text-secondary">
            If you&apos;re working in adjacent territory, have pattern observations to share, or want to contribute to the framework, reach out. The work is stronger with more thinkers examining it.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
