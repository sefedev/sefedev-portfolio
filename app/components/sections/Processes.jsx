import React from "react";

const PROCESS = [
  {
    title:"Discovery Call",
    description: "We start with a free consultation to understand your business, goals, and target audience.",
    color: "from-blue-500 to-green-300"
  },
   {
    title:"Design & Strategy",
    description: "Our team creates a custom design and strategy tailored to your brand and objectives.",
    color: "from-green-500 to-yellow-300"
  },
   {
    title:"Development",
    description: "We build your website with clean code, responsive design, and optimized performance.",
    color: "from-green-500 to-blue-300"
  },
   {
    title:"Launch & Support",
    description: "Your website goes live, and we provide ongoing support to ensure everything runs smoothly.",
    color: "from-orange-300 to-orange-800"
  },
];

const Process = ({ description, title, color, number }) => {
  return (
    <div
      className="h-64 p-6 border border-teal-500 flex flex-col justify-center items-start bg-slate-800/60 col-span-1 rounded-xl gap-2.5 hover:-translate-y-3 
  transition-transform 
  duration-300 
  ease-out hover:border-3"
    >
      <div className={`bg-gradient-to-tl size-12 grid place-items-center text-2xl font-bold ${color} rounded-full text-slate-900`}>
        {number}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Processes = () => {
  return (
    <section id="process" className="flex flex-col gap-4 items-center px-4 md:px-12 lg:px-24 py-12">
      <h2 className="text-3xl font-semibold text-center">
        How We Bring Your Vision to Life
      </h2>
      <p className="text-center max-w-2xl">
        Our streamlined process ensures you get a professional website in 30
        days or less, without the complexity.
      </p>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  lg:gap-2 py-6 px-0">
        {PROCESS.map(({description, title, color }, id) => (
          <Process
            key={id}
            number={id+1}
            description={description}
            title={title}
            color={color}
          />
        ))}
      </div>
    </section>
  );
};

export default Processes;
