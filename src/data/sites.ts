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
  // Social
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    description: "Photo and video sharing social network.",
    category: "Social",
    tags: ["photos", "stories", "reels"],
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    description: "Professional networking and career platform.",
    category: "Social",
    tags: ["jobs", "networking", "business"],
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    description: "Video sharing and streaming platform.",
    category: "Social",
    tags: ["videos", "streaming", "creators"],
  },
  {
    name: "Discord",
    url: "https://discord.com",
    description: "Voice, video and text chat for communities and friends.",
    category: "Social",
    tags: ["chat", "gaming", "communities"],
  },

  // AI
  {
    name: "Claude",
    url: "https://claude.ai",
    description: "Anthropic's advanced AI assistant.",
    category: "AI",
    tags: ["chatbot", "assistant", "anthropic"],
  },
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    description: "OpenAI's conversational AI chatbot.",
    category: "AI",
    tags: ["chatbot", "openai", "assistant"],
  },
  {
    name: "Grok",
    url: "https://grok.com",
    description: "xAI's helpful and maximally truth-seeking AI.",
    category: "AI",
    tags: ["chatbot", "xai", "assistant"],
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    description: "AI-powered answer engine with sources.",
    category: "AI",
    tags: ["search", "research", "answers"],
  },

  // Tools
  {
    name: "Image to Text",
    url: "https://www.imagetotext.info",
    description: "Free online OCR tool to extract text from images.",
    category: "Tools",
    tags: ["ocr", "text extraction", "utility"],
  },
  {
    name: "Canva",
    url: "https://www.canva.com",
    description: "Easy online design tool for graphics, presentations and more.",
    category: "Tools",
    tags: ["design", "graphics", "templates"],
  },

  // Sports
  {
    name: "FotMob",
    url: "https://fotmob.com",
    description: "Live football scores, stats and news.",
    category: "Sports",
    tags: ["football", "scores", "live"],
  },
  {
    name: "FawaNews",
    url: "https://www.fawanews.sc",
    description: "Sports news and live match coverage.",
    category: "Sports",
    tags: ["football", "news", "live"],
  },

  // Movies & Watch
  {
    name: "YTS",
    url: "https://yts.gg",
    description: "Torrent site focused on high-quality movie downloads.",
    category: "Movies & Watch",
    tags: ["movies", "torrents", "download"],
  },
  {
    name: "MovieBox",
    url: "https://moviebox.co",
    description: "Movie and TV streaming / download platform.",
    category: "Movies & Watch",
    tags: ["movies", "streaming", "tv"],
  },
  {
    name: "The Pirate Bay",
    url: "https://thepiratebay.org",
    description: "Classic torrent search engine.",
    category: "Movies & Watch",
    tags: ["torrents", "piracy", "search"],
  },
  {
    name: "Pirate Proxy Bay",
    url: "https://www.pirateproxy-bay.com",
    description: "Proxy access to The Pirate Bay.",
    category: "Movies & Watch",
    tags: ["proxy", "torrents", "piratebay"],
  },

  // Music
  {
    name: "Spotidown",
    url: "https://spotidown.cc",
    description: "Download Spotify tracks and playlists as MP3.",
    category: "Music",
    tags: ["spotify", "download", "mp3"],
  },
  {
    name: "TuneMyMusic",
    url: "https://www.tunemymusic.com",
    description: "Transfer playlists between music services.",
    category: "Music",
    tags: ["playlist", "transfer", "spotify"],
  },
  {
    name: "Tubidy",
    url: "https://tubidy.cc",
    description: "Search and download music and videos as MP3/MP4.",
    category: "Music",
    tags: ["mp3", "download", "videos"],
  },
  {
    name: "MP3Juice",
    url: "https://v6.mp3juice.za.com",
    description: "Free online MP3 search and download tool.",
    category: "Music",
    tags: ["mp3", "download", "search"],
  },
  {
    name: "Soundiiz",
    url: "https://soundiiz.com",
    description: "Transfer and manage playlists across music platforms.",
    category: "Music",
    tags: ["playlist", "transfer", "management"],
  },

  // Dev & Tech
  {
    name: "Supabase",
    url: "https://supabase.com",
    description: "Open-source Firebase alternative with Postgres database.",
    category: "Dev & Tech",
    tags: ["backend", "database", "postgres"],
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    description: "Platform for frontend frameworks and static sites.",
    category: "Dev & Tech",
    tags: ["hosting", "nextjs", "deployment"],
  },
  {
    name: "GitHub",
    url: "https://github.com",
    description: "Code hosting and collaboration platform for developers.",
    category: "Dev & Tech",
    tags: ["git", "code", "open-source"],
  },

  // Shopping
  {
    name: "Beats by Dre",
    url: "https://www.beatsbydre.com",
    description: "Premium headphones, earbuds and speakers.",
    category: "Shopping",
    tags: ["headphones", "audio", "apple"],
  },
  {
    name: "American Eagle",
    url: "https://www.ae.com",
    description: "Casual clothing and accessories brand.",
    category: "Shopping",
    tags: ["fashion", "clothing", "jeans"],
  },
  {
    name: "Powerade",
    url: "https://www.powerade.com",
    description: "Sports drink brand by Coca-Cola.",
    category: "Shopping",
    tags: ["drinks", "sports", "hydration"],
  },
  {
    name: "Mimoa",
    url: "https://mimoa.com",
    description: "Activewear and lifestyle brand by Georgina Rodríguez.",
    category: "Shopping",
    tags: ["activewear", "fashion", "women"],
  },
  {
    name: "Suvene",
    url: "https://suvene.de",
    description: "German streetwear brand focused on clean modern designs.",
    category: "Shopping",
    tags: ["streetwear", "hoodies", "joggers"],
  },
  {
    name: "FC Barcelona Store",
    url: "https://store.fcbarcelona.com",
    description: "Official FC Barcelona merchandise and kits.",
    category: "Shopping",
    tags: ["football", "merchandise", "barca"],
  },
];
