// app/layout.tsx
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head"; // optional – metadata does most of it

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const absolute = (path) => `https://sefestudio.vercel.app${path}`;

export const metadata = {
  // ---- Title Template (page-specific) ----
  title: {
    default: "Sefe Studio – Cutting-edge Web Solutions",
    template: "%s | Sefe Studio", // used by child pages
  },
  description:
    "Building cutting-edge websites, web apps, designs, and tech solutions for businesses, brands, and individuals in Nigeria and beyond.",
  keywords: [
    "Sefe Studio",
    "full-stack developer Nigeria",
    "web developer Lagos",
    "React Next.js developer",
    "UI/UX designer",
    "freelance developer",
    "website developer",
  ],
  authors: [{ name: "Sefedev", url: "https://github.com/sefedev" }],
  creator: "Sefedev",
  publisher: "Sefedev",

  // ---- Robots ----
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ---- Canonical & Alternates ----
  alternates: {
    canonical: "https://sefestudio.vercel.app",
    // languages: { "en": "https://sefedev.com/en", ... } // add later
  },

  // ---- Open Graph ----
  openGraph: {
    title: "Sefe Studio – Cutting-edge Web Solutions",
    description:
      "We craft high-performance websites, web apps, UI/UX designs, and tech solutions for every kind of business.",
    url: "https://sefestudio.vercel.app",
    siteName: "Sefe Studio",
    locale: "en_US",
    type: "website",
    images: [
      // Main preview (1200×630)
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Sefe Studio – Web Development & Design",
      },
      // Square logo for platforms that show a brand icon
      {
        url: "logo-200x200.png", // 200×200 PNG/SVG
        width: 200,
        height: 200,
        alt: "Sefe Studio Logo",
      },
    ],
  },

  // ---- Twitter Cards ----
  twitter: {
    card: "summary_large_image",
    title: "Sefe Studio – Cutting-edge Web Solutions",
    description:
      "High-performance websites, web apps, UI/UX designs, and tech solutions.",
    images: ["og-image.png"],
    creator: "@sephiano1",
  },

  // ---- Icons (multi-size, SVG fallback) ----
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-152.png", sizes: "152x152" },
    ],
  },

  // ---- Misc ----
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  applicationName: "Sefe Studio",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },

  // ---- Extra SEO helpers (Next.js accepts them under `metadata`) ----
  other: {
    "sitemap": absolute("/sitemap.xml"),
    // Preload critical font (example)
    // "link": JSON.stringify([{
    //   rel: "preload",
    //   href: "/fonts/roboto-mono-v22-latin-regular.woff2",
    //   as: "font",
    //   type: "font/woff2",
    //   crossOrigin: ""
    // }])
  },
};

/* ---------- Structured Data (JSON-LD) ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sefe Studio",
  url: "https://sefedev.com",
  logo: ".logo-square.png",
  sameAs: [
    "https://twitter.com/sephiano1",
    "https://linkedin.com/company/sefe-studio",
    // add more social profiles
  ],
  description:
    "Full-stack web development, UI/UX design, and tech solutions based in Lagos, Nigeria.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@sefedev.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Manifest (PWA) */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${robotoMono.variable} relative antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}