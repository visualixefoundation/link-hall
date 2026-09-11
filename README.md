# Roundup

A directory of good websites, sorted by category, with search and filtering.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add a new site

Open `src/data/sites.ts` and add an entry to the `sites` array:

```ts
{
  name: "Site Name",
  url: "https://example.com",
  description: "One short sentence on what it is.",
  category: "Social", // reuses an existing category, or creates a new one
  tags: ["optional", "keywords"],
}
```

New categories show up automatically in the sidebar/filter — you don't need
to register them anywhere else. Save, commit, push — that's it.

## Deploy to GitHub + Vercel

1. Create a new empty repo on GitHub (no README/gitignore, you already have
   them here).
2. From this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new, import that GitHub repo, and click Deploy.
   Vercel auto-detects Next.js — no config needed.
4. Every future `git push` to `main` auto-redeploys. So adding a site is:
   edit `sites.ts` → commit → push → live in ~30 seconds.
