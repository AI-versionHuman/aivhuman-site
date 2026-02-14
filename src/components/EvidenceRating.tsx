interface EvidenceRatingProps {
  rating: "HIGH" | "MEDIUM" | "DROPPED";
}

export function EvidenceRating({ rating }: EvidenceRatingProps) {
  const styles = {
    HIGH: "bg-high/10 text-high border-high/30",
    MEDIUM: "bg-medium/10 text-medium border-medium/30",
    DROPPED: "bg-dropped/10 text-dropped border-dropped/30",
  };

  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-mono tracking-wider border rounded-full ${styles[rating]}`}>
      {rating}
    </span>
  );
}
