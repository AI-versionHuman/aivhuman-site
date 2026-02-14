interface DialogueBlockProps {
  speaker: "JS" | "LIMN";
  children: React.ReactNode;
}

export function DialogueBlock({ speaker, children }: DialogueBlockProps) {
  const isHuman = speaker === "JS";

  return (
    <div className={isHuman ? "dialogue-js" : "dialogue-limn"}>
      <div className="speaker">
        {isHuman ? "JS" : "LIMN"}
        <span className="ml-2 text-[0.65rem] font-normal tracking-normal opacity-60">
          {isHuman ? "(Human)" : "(AI)"}
        </span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
