import type { Metadata } from "next";
import { DialogueBlock } from "@/components/DialogueBlock";
import dialogueData from "./dialogue-data.json";

export const metadata: Metadata = {
  title: "The Original Dialogue — OG Thread",
  description: "The original conversation between JS and LIMN that sparked the Antho-Tech Epistemology Theory. Version 0.1-3, February 2026. Complete unedited transcript.",
};

interface DialogueEntry {
  speaker: "JS" | "LIMN";
  paragraphs: string[];
}

const dialogue: DialogueEntry[] = dialogueData as DialogueEntry[];

export default function OGThreadPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            The Original Dialogue
          </h1>
          <p className="text-sm text-text-secondary mb-2">
            OG Thread v0.1-3 — The conversation that started everything
          </p>
          <p className="text-xs font-mono text-text-secondary/60 mb-4">
            February 8-10, 2026
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
          <p className="mt-4 text-xs text-text-secondary/60">
            Legend: ME: — Human participant dialogue &middot; LIMN: — AI assistant dialogue
          </p>
          <p className="mt-2 text-xs text-text-secondary/50 italic">
            Complete unedited transcript &middot; {dialogue.length} exchanges
          </p>
        </div>

        {/* Full Dialogue */}
        <div className="space-y-2">
          {dialogue.map((entry, index) => (
            <DialogueBlock key={index} speaker={entry.speaker}>
              {entry.paragraphs.map((para, pIndex) => (
                <p key={pIndex} className={pIndex > 0 ? "mt-2" : ""}>
                  {para}
                </p>
              ))}
            </DialogueBlock>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 card-glow p-6 text-center">
          <p className="text-sm text-text-secondary italic">
            End of OG Thread v0.1-3
          </p>
          <p className="text-sm text-text-secondary mt-2 font-medium">
            The patterns will still be here tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
