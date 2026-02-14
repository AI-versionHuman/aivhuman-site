"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-20 hidden lg:block" aria-label="Table of Contents">
      <h4 className="text-xs font-mono tracking-widest text-text-secondary mb-4">CONTENTS</h4>
      <ul className="flex flex-col gap-1 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm py-1 transition-colors ${
                item.level > 2 ? "pl-6" : "pl-4"
              } ${
                activeId === item.id
                  ? "text-accent border-l-2 border-accent -ml-[1px]"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
