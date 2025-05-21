import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col gap-4 items-center px-4 md:px-12 lg:px-24 py-12">
      <h1 className="text-3xl font-semibold mb-1">Get In Touch</h1>
      <p className="max-w-3xl text-center tracking-[0.05rem] leading-8">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>

      <form className="flex flex-col my-8 gap-6">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mobile_number">Mobile</label>
          <input
            name="mobile_number"
            type="text"
            placeholder="Enter your Mobile Number"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message">Message</label>
          <textarea
            rows={4}
            aria-multiline="true"
            name="message"
            type="text"
            placeholder="Enter your Message"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        <button
          type="submit"
          className="flex justify-center items-center gap-1 rounded bg-teal-500 hover:bg-teal-300 cursor-pointer py-4 font-semibold text-white w-full"
        >
          <span>Submit</span>
          <ChevronRight size={16} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
