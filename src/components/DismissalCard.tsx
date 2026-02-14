interface DismissalCardProps {
  number: number;
  mechanism: string;
  description: string;
  example: string;
}

export function DismissalCard({ number, mechanism, description, example }: DismissalCardProps) {
  return (
    <div className="card-glow p-5">
      <div className="flex items-start gap-3 mb-3">
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-mono font-bold">
          {number}
        </span>
        <h4 className="text-base font-medium tracking-wide text-text-primary">{mechanism}</h4>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed mb-3">{description}</p>
      <div className="text-xs text-text-secondary/70 border-t border-border pt-3">
        <span className="font-mono text-accent/60 mr-1">Example:</span>
        {example}
      </div>
    </div>
  );
}
