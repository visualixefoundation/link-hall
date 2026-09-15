"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Site } from "@/data/sites";

export default function Directory({ sites }: { sites: Site[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = useMemo(() => {
    const seen: string[] = [];
    for (const s of sites) {
      if (!seen.includes(s.category)) seen.push(s.category);
    }
    return seen;
  }, [sites]);

  const categoryFromUrl = searchParams.get("category");
  const initialCategory =
    categoryFromUrl && categories.includes(categoryFromUrl)
      ? categoryFromUrl
      : null;
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory,
  );

  useEffect(() => {
    const cat = searchParams.get("category");
    setActiveCategory(cat && categories.includes(cat) ? cat : null);
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams, categories]);

  const updateUrl = useCallback(
    (nextQuery: string, nextCategory: string | null) => {
      const params = new URLSearchParams();
      const q = nextQuery.trim();
      if (q) params.set("q", q);
      if (nextCategory) params.set("category", nextCategory);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname],
  );

  const onQueryChange = (value: string) => {
    setQuery(value);
    updateUrl(value, activeCategory);
  };

  const onCategoryChange = (cat: string | null) => {
    setActiveCategory(cat);
    updateUrl(query, cat);
  };

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

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of sites) {
      counts.set(s.category, (counts.get(s.category) ?? 0) + 1);
    }
    return counts;
  }, [sites]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Header */}
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-medium text-accent">Curated directory</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Link Hall
        </h1>
        <p className="mt-3 text-base leading-relaxed text-soft">
          A hand-picked list of good sites, sorted by category. Browse filters
          or search — share any view with the link in your address bar.
        </p>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-8 lg:h-fit lg:w-56 lg:shrink-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
            Categories
          </p>
          <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            <button
              type="button"
              onClick={() => onCategoryChange(null)}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-left text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-accent text-white shadow-sm"
                  : "bg-surface text-soft ring-1 ring-border hover:bg-accent-soft hover:text-accent-hover"
              }`}
            >
              All sites
              <span
                className={`ml-1.5 tabular-nums ${
                  activeCategory === null ? "text-white/80" : "text-faint"
                }`}
              >
                {sites.length}
              </span>
            </button>
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-left text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent text-white shadow-sm"
                      : "bg-surface text-soft ring-1 ring-border hover:bg-accent-soft hover:text-accent-hover"
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-1.5 tabular-nums ${
                      active ? "text-white/80" : "text-faint"
                    }`}
                  >
                    {categoryCounts.get(cat) ?? 0}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <label className="relative block">
            <span className="sr-only">Search sites</span>
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search by name, category, or tag…"
              className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-ink shadow-card placeholder:text-faint focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </label>

          <div className="mt-8 flex flex-col gap-10">
            {grouped.size === 0 && (
              <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center">
                <p className="text-soft">
                  Nothing matches “{query}”. Try a different search, or clear
                  it.
                </p>
              </div>
            )}

            {[...grouped.entries()].map(([category, entries]) => (
              <section
                key={category}
                id={`category-${encodeURIComponent(category)}`}
              >
                <div className="mb-3 flex items-baseline gap-2">
                  <h2 className="text-lg font-semibold text-ink">{category}</h2>
                  <span className="text-sm text-faint">{entries.length}</span>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {entries.map((site) => {
                    let host = "";
                    try {
                      host = new URL(site.url).hostname.replace(/^www\./, "");
                    } catch {
                      host = site.url;
                    }
                    return (
                      <li key={site.url + site.name}>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-4 shadow-card transition hover:border-accent/30 hover:shadow-card-hover"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span className="font-semibold text-ink group-hover:text-accent">
                              {site.name}
                            </span>
                            <span className="shrink-0 rounded-md bg-canvas px-2 py-0.5 text-xs text-faint ring-1 ring-border">
                              {host}
                            </span>
                          </div>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-soft">
                            {site.description}
                          </p>
                          <span className="mt-3 text-xs font-medium text-accent opacity-0 transition group-hover:opacity-100">
                            Visit site →
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
