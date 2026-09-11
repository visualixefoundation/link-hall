export type Site = {
  name: string;
  url: string;
  description: string;
  category: string;
  tags?: string[];
};

// Add new sites here. Each one needs: name, url, description, category.
// tags are optional but make search better.
// Category names here are also what shows up in the sidebar / filter list,
// in the order they first appear below.

export const sites: Site[] = [
  // Example entries — replace or remove these, then add your own.
  {
    name: "Example Social Site",
    url: "https://example.com",
    description: "A short, plain-language description of what this site is and why it's worth visiting.",
    category: "Social",
    tags: ["community"],
  },
  {
    name: "Example Live Sports Site",
    url: "https://example.com",
    description: "A short description of this live sports resource.",
    category: "Live Sports",
    tags: ["scores", "live"],
  },
  {
    name: "Example Entertainment Site",
    url: "https://example.com",
    description: "A short description of this entertainment site.",
    category: "Entertainment",
    tags: [],
  },
  {
    name: "Example Movies & Watch Site",
    url: "https://example.com",
    description: "A short description of this movies/streaming resource.",
    category: "Movies & Watch",
    tags: ["streaming"],
  },
];
