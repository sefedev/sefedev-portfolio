import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "SefeDev | Official Portfolio Page",
  description: "This is an official portfolio page for Sefedev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${RobotoMono.variable} relative antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
