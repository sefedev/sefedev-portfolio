import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BRANDS = ["Clickup", "Dropbox", "Paychex", "Elastic", "Stripe"];
const Hero = () => {
  return (
    <section className="flex flex-col gap-8 min-h-dvh lg:px-24 md:px-12 px-4">
      {/* MAIN HERO */}
      <div className="flex items-center justify-center md:gap-32 gap-8 flex-1 pt-32">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold tracking-wide text-3xl bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
            Sefe Studios
          </h1>
          <h2 className="text-5xl font-semibold md:max-w-md">Get a Professional Website without the Hassle</h2>
          <p className="md:max-w-sm text-sm font-light mb-4">
          We Focus on Building a fast, high converting websites and also custom web app to help provide solutions and as well grow businesses of any scale level. 
         {" "}
          </p>
          <Link
            href="#contact"
            className="flex items-center justify-center py-4 rounded-lg gap-2 cursor-pointer hover:bg-teal-400 bg-teal-600 font-bold tracking-widest drop-shadow-xl transition duration-200 drop-shadow-teal-800 shadow-chart-3"
          >
            Let's Get Started
            <ChevronRightIcon size={16} />
          </Link>
        </div>
        <div>
          <div className="hidden md:grid rounded-full place-items-center overflow-hidden">
            <Image src="/hero-png.png" alt="man" width={480} height={600} />
          </div>
        </div>
      </div>

      {/* WORKED WITH SECTION */}
      {/* <div className="md:px-24 lg:px-32 flex flex-col gap-4 py-8">
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
      </div> */}
    </section>
  );
};

export default Hero;
