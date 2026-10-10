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
  {
    name: "Patreon — Gerdegotit",
    url: "https://www.patreon.com/Gerdegotit",
    description: "Creator page for Gerdegotit on Patreon.",
    category: "Social",
    tags: ["patreon", "creator", "support"],
  },
  {
    name: "Dad, How Do I?",
    url: "https://www.youtube.com/channel/UCNepEAWZH0TBu7dkxIbluDw",
    description: "Practical how-to videos on everyday skills — ties, tires, cooking, money, and more.",
    category: "Social",
    tags: ["youtube", "howto", "tutorials", "dad"],
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
  {
    name: "Suno",
    url: "https://suno.com",
    description: "AI music generator — create songs from text prompts.",
    category: "AI",
    tags: ["music", "ai", "songs", "generator"],
  },
  {
    name: "Kimi",
    url: "https://www.kimi.com",
    description: "Moonshot AI's assistant with long context, agents, and coding tools.",
    category: "AI",
    tags: ["chatbot", "agent", "moonshot"],
  },
  {
    name: "Manus",
    url: "https://manus.im",
    description: "General-purpose AI agent that plans and finishes real tasks for you.",
    category: "AI",
    tags: ["agent", "automation", "assistant"],
  },
  {
    name: "Meta AI",
    url: "https://www.meta.ai",
    description: "Meta's free AI assistant across chat, image, and search.",
    category: "AI",
    tags: ["chatbot", "meta", "assistant"],
  },
  {
    name: "Leonardo AI",
    url: "https://leonardo.ai",
    description: "AI image generation platform for art, design, and assets.",
    category: "AI",
    tags: ["image", "art", "generator"],
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    description: "Google's multimodal AI assistant.",
    category: "AI",
    tags: ["chatbot", "google", "assistant"],
  },
  {
    name: "Adobe Firefly",
    url: "https://firefly.adobe.com",
    description: "Adobe's generative AI for images, video, and design.",
    category: "AI",
    tags: ["image", "adobe", "generator"],
  },
  {
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    description: "Google's AI notebook for researching and chatting with your documents.",
    category: "AI",
    tags: ["notes", "research", "google", "documents"],
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
  {
    name: "PhoText",
    url: "https://phototext.shop",
    description: "AI tool to click and edit text inside images and screenshots.",
    category: "Tools",
    tags: ["ai", "image", "text edit", "ocr"],
  },
  {
    name: "SoBrief",
    url: "https://sobrief.com",
    description: "AI-powered book summaries in text and audio, across many languages.",
    category: "Tools",
    tags: ["books", "summaries", "ai", "reading"],
  },
  {
    name: "PDFDrive",
    url: "https://www.pdfdrive.com",
    description: "Search and download free PDF books and documents.",
    category: "Tools",
    tags: ["pdf", "books", "download", "ebooks"],
  },
  {
    name: "PaperAnimator",
    url: "https://paperanimator.com",
    description: "Turn photos into paper cut-out and fold-out animations in the browser.",
    category: "Tools",
    tags: ["animation", "paper", "design", "video"],
  },
  {
    name: "FilePizza",
    url: "https://file.pizza",
    description: "Peer-to-peer file transfer in the browser — no cloud upload required.",
    category: "Tools",
    tags: ["file transfer", "p2p", "share", "privacy"],
  },
  {
    name: "Screen Studio",
    url: "https://screen.studio",
    description: "macOS screen recorder that auto-zooms and polishes demos in minutes.",
    category: "Tools",
    tags: ["screen recording", "mac", "demos", "video"],
  },
  {
    name: "Cleanup.pictures",
    url: "https://cleanup.pictures",
    description: "AI tool to remove unwanted objects, people, or text from photos.",
    category: "Tools",
    tags: ["ai", "photo", "remove", "edit"],
  },
  {
    name: "SkySnail",
    url: "https://skysnail.io",
    description: "AI thumbnail generator for YouTube and social video covers.",
    category: "Tools",
    tags: ["thumbnail", "youtube", "ai", "design"],
  },
  {
    name: "ViralityAI",
    url: "https://viralityai.net",
    description: "Find viral content ideas across Instagram, TikTok, and YouTube by keyword.",
    category: "Tools",
    tags: ["viral", "content", "social", "research"],
  },
  {
    name: "Pomelli",
    url: "https://labs.google.com/pomelli/about",
    description: "Google Labs AI tool for on-brand marketing campaigns and creatives.",
    category: "Tools",
    tags: ["marketing", "google", "brand", "ai"],
  },

  // Learning
  {
    name: "Google Classroom",
    url: "https://classroom.google.com",
    description: "Free classroom hub for assignments, materials, and class communication.",
    category: "Learning",
    tags: ["education", "google", "school"],
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org",
    description: "Free lessons and practice across math, science, and more.",
    category: "Learning",
    tags: ["education", "courses", "free"],
  },
  {
    name: "Codecademy",
    url: "https://www.codecademy.com",
    description: "Interactive coding courses for web, data, and programming skills.",
    category: "Learning",
    tags: ["coding", "courses", "programming"],
  },
  {
    name: "Alison",
    url: "https://alison.com",
    description: "Free online courses and certificates across many subjects.",
    category: "Learning",
    tags: ["courses", "certificates", "education"],
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
    name: "SuperSport",
    url: "https://supersport.com",
    description: "Live sports coverage, scores and highlights.",
    category: "Sports",
    tags: ["football", "live", "scores"],
  },

  // Live football
  {
    name: "FawaNews",
    url: "https://www.fawanews.sc",
    description: "Sports news and live match coverage.",
    category: "Live football",
    tags: ["football", "news", "live"],
  },

  // Movies & Watch
  {
    name: "MovieBox",
    url: "https://moviebox.co",
    description: "Movie and TV streaming / download platform.",
    category: "Movies & Watch",
    tags: ["movies", "streaming", "tv"],
  },
  {
    name: "VideoDownloader.site",
    url: "https://videodownloader.site",
    description: "Direct movie and video search / download companion.",
    category: "Movies & Watch",
    tags: ["movies", "download", "search", "video"],
  },

  // Torrents
  {
    name: "YTS",
    url: "https://yts.gg",
    description: "Torrent site focused on high-quality movie downloads.",
    category: "Torrents",
    tags: ["movies", "torrents", "download"],
  },
  {
    name: "YTS — Browse Movies",
    url: "https://yts.gg/browse-movies",
    description: "Direct browse page for searching and filtering YTS movie torrents.",
    category: "Torrents",
    tags: ["movies", "torrents", "search", "browse"],
  },
  {
    name: "Pirate Bay",
    url: "https://thepiratebay.org",
    description: "Classic torrent search engine.",
    category: "Torrents",
    tags: ["torrents", "piracy", "search"],
  },
  {
    name: "Pirates Bay",
    url: "https://www.pirateproxy-bay.com",
    description: "Proxy access to The Pirate Bay.",
    category: "Torrents",
    tags: ["proxy", "torrents", "piratebay"],
  },

  // Music
  {
    name: "Spotify",
    url: "https://open.spotify.com",
    description: "Music streaming platform with millions of songs and podcasts.",
    category: "Music",
    tags: ["streaming", "playlists", "podcasts"],
  },
  {
    name: "Audiomack",
    url: "https://audiomack.com",
    description: "Music streaming and discovery platform for artists and fans.",
    category: "Music",
    tags: ["streaming", "hip-hop", "artists"],
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com",
    description: "Google's music streaming service with songs, albums, and radio.",
    category: "Music",
    tags: ["streaming", "google", "playlists"],
  },

  // Music Download
  {
    name: "Spotidown",
    url: "https://spotidown.cc",
    description: "Download Spotify tracks and playlists as MP3.",
    category: "Music Download",
    tags: ["spotify", "download", "mp3"],
  },
  {
    name: "Tubidy",
    url: "https://tubidy.cc",
    description: "Search and download music and videos as MP3/MP4.",
    category: "Music Download",
    tags: ["mp3", "download", "videos"],
  },
  {
    name: "MP3Juice",
    url: "https://v6.mp3juice.za.com",
    description: "Free online MP3 search and download tool.",
    category: "Music Download",
    tags: ["mp3", "download", "search"],
  },

  // Playlist Transfer
  {
    name: "TuneMyMusic",
    url: "https://www.tunemymusic.com",
    description: "Transfer playlists between music services.",
    category: "Playlist Transfer",
    tags: ["playlist", "transfer", "spotify"],
  },
  {
    name: "Soundiiz",
    url: "https://soundiiz.com",
    description: "Transfer and manage playlists across music platforms.",
    category: "Playlist Transfer",
    tags: ["playlist", "transfer", "management"],
  },

  // Video downloaders
  {
    name: "VidsSave",
    url: "https://vidssave.com",
    description: "Online video downloader for multiple platforms.",
    category: "Video downloaders",
    tags: ["youtube", "download", "video"],
  },
  {
    name: "Y2Mate",
    url: "https://v38.www-y2mate.com",
    description: "YouTube and video converter / downloader.",
    category: "Video downloaders",
    tags: ["youtube", "mp3", "mp4"],
  },
  {
    name: "YT5s",
    url: "https://yt5s.in",
    description: "Free YouTube video and audio downloader.",
    category: "Video downloaders",
    tags: ["youtube", "download", "video"],
  },
  {
    name: "SaveFrom",
    url: "https://en1.savefrom.net",
    description: "Download videos from YouTube and other sites.",
    category: "Video downloaders",
    tags: ["youtube", "download", "video"],
  },
  {
    name: "Cobalt",
    url: "https://cobalt.tools",
    description: "Clean, open-source media downloader — paste a link, save video or audio.",
    category: "Video downloaders",
    tags: ["download", "video", "audio", "privacy"],
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
  {
    name: "Koha",
    url: "https://koha.wtf",
    description: "Personal site of AI educator and developer advocate Joshua Omobola.",
    category: "Dev & Tech",
    tags: ["portfolio", "ai", "developer", "education"],
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
    name: "Powerade",
    url: "https://www.powerade.com",
    description: "Sports drink brand by Coca-Cola.",
    category: "Shopping",
    tags: ["drinks", "sports", "hydration"],
  },

  // Fashion
  {
    name: "American Eagle",
    url: "https://www.ae.com",
    description: "Casual clothing and accessories brand.",
    category: "Fashion",
    tags: ["fashion", "clothing", "jeans"],
  },
  {
    name: "Mimoa",
    url: "https://mimoa.com",
    description: "Activewear and lifestyle brand by Georgina Rodríguez.",
    category: "Fashion",
    tags: ["activewear", "fashion", "women"],
  },
  {
    name: "Suvene",
    url: "https://suvene.de",
    description: "German streetwear brand focused on clean modern designs.",
    category: "Fashion",
    tags: ["streetwear", "hoodies", "joggers"],
  },
  {
    name: "FC Barcelona Store",
    url: "https://store.fcbarcelona.com",
    description: "Official FC Barcelona merchandise and kits.",
    category: "Fashion",
    tags: ["football", "merchandise", "barca"],
  },

  // Fun
  {
    name: "FakeUpdate",
    url: "https://fakeupdate.net",
    description: "Full-screen fake OS update screens for harmless pranks.",
    category: "Fun",
    tags: ["prank", "windows", "macos", "joke"],
  },
  {
    name: "Bored Panda",
    url: "https://www.boredpanda.com",
    description: "Viral stories, art, and entertainment from around the web.",
    category: "Fun",
    tags: ["viral", "stories", "art", "entertainment"],
  },
  {
    name: "Now I Know",
    url: "https://nowiknow.com",
    description: "Daily newsletter with one surprising true fact and the story behind it.",
    category: "Fun",
    tags: ["newsletter", "trivia", "facts"],
  },
];
