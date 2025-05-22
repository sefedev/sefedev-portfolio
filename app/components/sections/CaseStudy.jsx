import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CASES = [
  {
    title: "Fintech",
    subtitle: "DadiPay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "https://www.google.com",
    image: 1,
  },
  {
    title: "EdTech",
    subtitle: "Byju",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "https://www.google.com",
    image: 2,
  },
  {
    title: "Pharma",
    subtitle: "Mediplus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "https://www.google.com",
    image: 3,
  },
];

const Card = ({ title, subtitle, description, link, image, cls }) => {
  return (
    <div className={`flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full ${cls}`}>
      <div className="flex flex-col md:items-start items-center gap-4">
        <span className="bg-teal-200 text-teal-600 font-bold text-[0.6rem] p-1.5 rounded-2xl">
          {title}
        </span>
        <h3 className="md:text-left font-semibold text-2xl">{subtitle}</h3>
        <p className="md:text-left leading-7 tracking-wide text-sm max-w-[26rem]">{description}</p>
        <Link
          href={link}
          className="inline-flex gap-1.5 items-center bg-teal-500 hover:bg-teal-300 duration-200 ease-in-out font-semibold text-slate-800 px-6 py-2.5 my-4 rounded-md"
        >
          View Case Study <ChevronRight size={16} />
        </Link>
      </div>
      <Image
        src={`/case-${image}.png`}
        alt="Case Study Image"
        width={420}
        height={280}
        className="rounded"
      />
    </div>
  );
};

const CaseStudy = () => {
  return (
    <section id="case-studies" className="flex flex-col px-4 md:px-12 lg:px-24 my-16 items-center gap-4 text-center">
      <h1 className="text-3xl font-semibold mb-2">Case Studies</h1>
      <p className="max-w-lg tracking-[0.05rem] leading-8">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>

      {/* CASE STUDY CARDS */}
      <div className="w-full flex flex-col gap-16 my-8">
        {CASES.map(
          ({ title, subtitle, description, link, image, cls }, index) => (
            <Card
              key={image}
              title={title}
              subtitle={subtitle}
              description={description}
              link={link}
              image={image}
              cls={index % 2 === 0 ? "" : "md:flex-row-reverse"}
            />
          )
        )}
      </div>
    </section>
  );
};

export default CaseStudy;
