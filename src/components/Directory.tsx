"use client";

import { useMemo, useState } from "react";
import type { Site } from "@/data/sites";

const DOT_COLORS = [
  "#E8A33D", // amber
  "#7FB3A8", // sage teal
  "#C97B84", // dusty rose
  "#8FA6D9", // periwinkle
  "#D4B483", // sand
  "#A38FB8", // muted violet
];

function colorForCategory(category: string, order: string[]) {
  const idx = order.indexOf(category);
  return DOT_COLORS[idx % DOT_COLORS.length];
}

export default function Directory({ sites }: { sites: Site[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const s of sites) {
      if (!seen.includes(s.category)) seen.push(s.category);
    }
    return seen;
  }, [sites]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sites.filter((s) => {
      if (activeCategory && s.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = [s.name, s.description, s.category, ...(s.tags ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [sites, query, activeCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, Site[]>();
    for (const s of filtered) {
      if (!map.has(s.category)) map.set(s.category, []);
      map.get(s.category)!.push(s);
    }
    return map;
  }, [filtered]);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:gap-14">
      {/* Sidebar / category rail */}
      <aside className="lg:sticky lg:top-16 lg:h-fit lg:w-48 lg:shrink-0">
        <h1 className="font-display text-3xl italic text-paper">Link Hall </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          A hand-picked list of good sites, sorted by category.
        </p>

        <nav className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          <button
            onClick={() => setActiveCategory(null)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-left text-sm transition-colors lg:rounded-none lg:px-0 lg:py-1 ${
              activeCategory === null
                ? "bg-surface2 text-paper lg:bg-transparent lg:text-amber"
                : "text-muted hover:text-paper"
            }`}
          >
            All sites
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-left text-sm transition-colors lg:rounded-none lg:px-0 lg:py-1 ${
                activeCategory === cat
                  ? "bg-surface2 text-paper lg:bg-transparent lg:text-amber"
                  : "text-muted hover:text-paper"
              }`}
            >
              <span
                className="hidden h-1.5 w-1.5 shrink-0 rounded-full lg:inline-block"
                style={{ backgroundColor: colorForCategory(cat, categories) }}
              />
              {cat}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1">
        <label className="block">
          <span className="sr-only">Search sites</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, category, or tag…"
            className="w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-paper placeholder:text-muted focus:border-amber"
          />
        </label>

        <div className="mt-10 flex flex-col gap-12">
          {grouped.size === 0 && (
            <p className="text-muted">
              Nothing matches “{query}”. Try a different search, or clear it.
            </p>
          )}

          {[...grouped.entries()].map(([category, entries]) => (
            <section key={category}>
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: colorForCategory(category, categories) }}
                />
                <h2 className="font-display text-xl text-paper">{category}</h2>
              </div>

              <ul className="mt-4 divide-y divide-hairline border-t border-hairline">
                {entries.map((site) => (
                  <li key={site.url + site.name}>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 py-4 transition-colors hover:bg-surface/40 sm:px-2"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-medium text-paper group-hover:text-amber">
                          {site.name}
                        </span>
                        <span className="shrink-0 text-xs text-muted">
                          {new URL(site.url).hostname.replace("www.", "")}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted">
                        {site.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
