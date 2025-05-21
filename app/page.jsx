import CaseStudy from "./components/sections/CaseStudy";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import RecentWork from "./components/sections/RecentWork";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-slate-900 text-gray-200">
      <Hero />
      <CaseStudy />
      <Testimonials />
      <RecentWork />
      <Contact />
      <Footer />
    </main>
  )
}