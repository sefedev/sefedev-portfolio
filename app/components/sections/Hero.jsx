import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BRANDS = ["Clickup", "Dropbox", "Paychex", "Elastic", "Stripe"];
const Hero = () => {
  return (
    <section className="flex flex-col gap-8 min-h-screen lg:px-24 md:px-12 px-4">
      {/* MAIN HERO */}
      <div className="flex items-center justify-center md:gap-32 gap-8 flex-1 pt-32">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold tracking-wide text-5xl">Ihaza Omosefe</h1>
          <p className="md:max-w-sm text-sm font-light mb-4">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Link href="#contact" className="flex items-center justify-center py-4 rounded-lg gap-2 cursor-pointer hover:bg-teal-400 bg-teal-600 font-bold tracking-widest drop-shadow-xl drop-shadow-teal-800 shadow-chart-3">
            Let's Get Started
            <ChevronRightIcon size={16} />
          </Link>
        </div>
        <div>
          <div className="hidden md:grid size-84 rounded-full place-items-center overflow-hidden">
            <Image src="/hero-img.png" alt="man" width={480} height={480} />
          </div>
        </div>
      </div>

      {/* WORKED WITH SECTION */}
      <div className="md:px-24 lg:px-32 flex flex-col gap-4 py-8">
        <h2 className="text-sm font-semibold">Worked with</h2>
        <ul className="grid grid-cols-2 md:flex justify-center flex-wrap gap-4">
          {BRANDS.map((brand, id) => (
            <li
              key={id}
              className="border px-12 grid place-items-center text-gray-600 font-bold py-3 rounded border-slate-700"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
