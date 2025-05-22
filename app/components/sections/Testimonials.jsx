import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const TESTIMONIALS = [
  {
    name: "Ihaza Omosefe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reprehenderit voluptates blanditiis optio quae est corporis aliquam libero ducimus accusamus.",
  },
  {
    name: "Danilola Akintola",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reprehenderit voluptates blanditiis optio quae est corporis aliquam libero ducimus accusamus.",
  },
  {
    name: "Nnamdi Emeodi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reprehenderit voluptates blanditiis optio quae est corporis aliquam libero ducimus accusamus.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex flex-col gap-4 items-center px-4 md:px-12 lg:px-24 py-12">
      {/* TESTIMONIAL HEADER */}
      <h1 className="text-3xl font-semibold mb-2">Testimonials</h1>
      <p className="max-w-3xl text-center tracking-[0.05rem] leading-8">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>

      {/* TESTIMONIAL CARDS */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 py-8">
        {TESTIMONIALS.map(({ name, description }, id) => (
          <div
            key={id}
            className="relative flex flex-col gap-6 border border-gray-700 rounded-lg p-8 max-w-lg"
          >
            <Quote
              className="absolute fill-white stroke-0 -top-4 left-4"
              size={32}
            />

            <p className="tracking-wider leading-6 font-light text-sm ">
              {description}
            </p>

            <div className="flex items-center gap-4">
              <Image
                src="/client-img.png"
                alt="woman"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
