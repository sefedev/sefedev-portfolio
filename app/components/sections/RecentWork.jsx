import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const WORKS = [
  {
    name: "Inventory Management System ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Attendance Management System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Attendance Management System ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Attendance Management System ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Attendance Management System ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const RecentWork = () => {
  return (
    <section id="recent" className="flex flex-col gap-4 items-center px-4 md:px-12 lg:px-24 py-12">
      <h1 className="text-3xl font-semibold mb-2">Recent Work</h1>
      <p className="max-w-3xl text-center tracking-[0.05rem] leading-8 mb-12">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>
      <Carousel >
        <CarouselContent className="max-w-xs md:max-w-md lg:max-w-3xl">
          {WORKS.map(({ name, description }, index) => (
            <CarouselItem className="flex flex-col gap-4 items-start basis-full md:basis-1/2">
                <Image src="/computer.png" alt="computer" width={320} height={250} className="mb-4"/>
                <h2 className="text-xl font-semibold max-w-md">{name}</h2>
                <p className="font-light max-w-md">{description}</p>
                
                <Button className="bg-green-500 text-white w-full md:w-fit hover:bg-green-300 cursor-pointer font-semibold"><span>Know More</span><ChevronRight /></Button>
                
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default RecentWork;
