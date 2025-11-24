import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WORKS = [
  {
    id: 1,
    name: "The PinApp",
    description:
      "An event platform designed to bring people together, whether you're hosting, attending or just exploring.",
    href: "https://www.thepinapp.com/",
    image: "/the-pinapp.png",
    tags: ["Platform", "Events", "Community"],
  },
 // Add more projects here as you uncomment them
  {
    id: 2,
    name: "Inventory Management System",
    description: "A comprehensive solution for tracking and managing Inventory across organizations.",
    href: "#",
    image: "/inventory.png",
    tags: ["Management", "Analytics", "Enterprise"],
  },
];

const RecentWork = () => {
  return (
    <section
      id="recent"
      className="w-full py-20 px-4 md:px-12 lg:px-24"
    >
      <div className="flex flex-col gap-3 items-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
          <div className="w-2 h-2 rounded-full bg-teal-500" />
          <span className="text-sm font-medium text-teal-600">Featured Work</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Recent Projects
        </h2>
        <p className="max-w-2xl text-center leading-relaxed mt-2">
          Crafting digital experiences that solve real problems and drive meaningful results.
          Here's a selection of recent work I'm proud of.
        </p>
      </div>

      <Carousel opts={{ align: "center", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {WORKS.map(({ id, name, description, href, image, tags }) => (
            <CarouselItem
              key={id}
              className="pl-4 basis-full md:basis-1/2 lg:basis-full"
            >
              <div className="group relative h-full">
                {/* Card Container */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  
                  {/* Image Section */}
                  <div className="relative w-full grid place-items-center lg:w-1/2 h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                    <Image
                      src={image}
                      alt={name}
                      width={260}
                      height={260}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between p-8 lg:p-10 w-full lg:w-1/2">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {name}
                      </h3>

                      <p className="text-slate-600 leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full md:w-fit mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-200 group/btn"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="relative border border-slate-300 hover:bg-slate-100" />
          <CarouselNext className="relative border border-slate-300 hover:bg-slate-100" />
        </div>
      </Carousel>
    </section>
  );
};

export default RecentWork;