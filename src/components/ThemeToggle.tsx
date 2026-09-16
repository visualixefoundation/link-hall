"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("link-hall-theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme =
      stored === "light" || stored === "dark"
        ? stored
        : prefersDark
          ? "dark"
          : "light";
    setTheme(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("link-hall-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-soft shadow-card transition hover:border-accent/40 hover:text-accent"
    >
      {!ready ? (
        <span className="h-4 w-4" />
      ) : theme === "dark" ? (
        /* Sun */
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 4.343a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM6.464 13.536a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM15.657 15.657a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06a.75.75 0 010 1.06zM6.464 6.464a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06z" />
        </svg>
      ) : (
        /* Moon */
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M7.455 2.104a.75.75 0 01.162.77 7.003 7.003 0 009.508 9.508.75.75 0 01.971.971 8.503 8.503 0 01-11.41 0 8.503 8.503 0 010-11.41.75.75 0 01.77-.162z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
