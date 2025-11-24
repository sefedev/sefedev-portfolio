import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Sefe Studio",
  },
  description: "Building Cutting-edge websites, web apps, designs, and tech solutions for all types of business, brands and individuals.",
  keywords: [
    "Sefe Studio",
    "full-stack developer Nigeria",
    "web developer Lagos",
    "React Next.js developer",
    "UI/UX designer",
    "freelance developer",
    "website developer",
  ],
  authors: [{ name: "Sefedev", url: "https://sefedev.com" }], // Boosts authority
  creator: "Sefedev",
  publisher: "Sefedev",

  // Robots & Crawling (allow indexing)
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

  // Open Graph (Social Sharing - Facebook/LinkedIn)
  openGraph: {
    title: "Sefe Studio",
    description: "Building Cutting-edge websites, web apps, designs, and tech solutions for all types of business, brands and individuals.",
    url: "https://sefedev.com", // Replace with your domain
    siteName: "Sefe Studio",
    images: [
      {
        url: "/og-image.png", // Add 1200x630px image to /public/
        width: 1200,
        height: 700,
        alt: "Sefe Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Cards (X/Twitter Sharing)
  twitter: {
    card: "summary_large_image",
    title: "Sefe Studio",
    description: "Building Cutting-edge websites, web apps, designs, and tech solutions for all types of business, brands and individuals.",
    images: ["/og-image.png"], // 1200x675px in /public/
    creator: "@sephiano1", // Your Twitter handle
  },

  // Icons/Favicon (multi-platform)
  icons: {
    icon: "/favicon.ico", // 32x32 in /app/ or /public/
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png", // 180x180 for iOS
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },

  // Viewport & Misc (Mobile-First)
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000", // Matches your brand; shows in browser UI
  applicationName: "Sefe Studio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` ${RobotoMono.variable} relative antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
