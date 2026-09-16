import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteName = "Link Hall";
const title = "Link Hall: A directory of good sites";
const description =
  "A hand-picked directory of good websites, sorted by category — with search and shareable filters.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s · ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "link directory",
    "curated websites",
    "useful sites",
    "link hall",
    "web directory",
  ],
  authors: [{ name: "Visualixe Foundation" }],
  creator: "Visualixe Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('link-hall-theme');
    var dark = stored === 'dark' || (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
