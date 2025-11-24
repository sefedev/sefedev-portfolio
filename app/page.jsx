import CaseStudy from "./components/sections/CaseStudy";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Processes from "./components/sections/Processes";
import RecentWork from "./components/sections/RecentWork";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-slate-900 text-gray-200">
      <Hero />
      <Services />
      {/* <CaseStudy /> */}
      {/* <Testimonials /> */}
      <Processes />
      <RecentWork />
      <Contact />
      <Footer />
    </main>
  )
}