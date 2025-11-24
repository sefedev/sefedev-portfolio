import {
  Code,
  Headset,
  Palette,
  Rocket,
  Search,
  Smartphone,
} from "lucide-react";
import React from "react";

const SERVICES = [
  {
    logo: <Rocket size={24}/>,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive sales. Perfect for campaigns, product launches, and special promotions.",
    color: "from-blue-500 to-green-500",
  },
  {
    logo: <Code size={24} />,
    title: "Custom Websites",
    description:
      "Fully customized websites built from scratch to match your brand identity and business goals. Responsive, fast, and optimized for conversions.",
    color: "from-blue-500 to-green-500",
  },
  {
    logo: <Palette size={24} />,
    title: "Brand Websites",
    description:
      "Showcase your brand's story with stunning, professional websites that establish credibility and build trust with your audience.",
    color: "from-blue-500 to-green-500",
  },
  {
    logo: <Smartphone size={24} />,
    title: "Responsive Design",
    description:
      "Every website we build looks perfect on all devices - desktop, tablet, and mobile. Your users get a seamless experience everywhere.",
    color: "from-blue-500 to-green-500",
  },
  {
    logo: <Search size={24} />,
    title: "SEO Optimized",
    description:
      "Built with SEO best practices from day one. Fast loading times, clean code, and proper structure to help you rank better.",
    color: "from-blue-500 to-green-500",
  },
  {
    logo: <Headset size={24} />,
    title: "Ongoing Support",
    description:
      "We're here for you after launch. Get updates, maintenance, and support to keep your website running smoothly.",
    color: "from-blue-500 to-green-500",
  },
];

const Service = ({ logo, description, title, color }) => {
  return (
    <div
      className="h-64 p-6  border-teal-500 flex flex-col justify-center items-start bg-slate-800/60 col-span-1 rounded-xl gap-2.5 hover:-translate-y-3 
  transition 
  duration-300 
  ease-out hover:border-3"
    >
      <div className={`bg-gradient-to-tl ${color} p-2.5 rounded-2xl`}>
        {logo}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="flex flex-col gap-4 items-center px-4 md:px-12 lg:px-24 py-12">
      <h2 className="text-3xl font-semibold text-center">
        Complete Web Solution for You Business
      </h2>
      <p className="text-center max-w-2xl">
        From custom websites to landing pages, we deliver professional web
        solutions tailored to your brand's unique needs.
      </p>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6 px-0 md:px-12">
        {SERVICES.map(({ logo, description, title, color }, id) => (
          <Service
            key={id}
            logo={logo}
            description={description}
            title={title}
            color={color}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
