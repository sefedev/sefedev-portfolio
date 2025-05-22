"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { ChevronRight, CircleCheck, Loader } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus(true);
      } else {
        toast("An error occured, Please try again.");
      }
    } catch (error) {
      console.error("Error sending Email:", error);
    } finally {
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setIsLoading(false)
    }
  };

  return (
    <section id="contact" className="flex flex-col gap-4 items-center px-4 md:px-12 lg:px-24 py-12">
      <Toaster />
      <div
        className={`h-screen ${
          status ? "block" : "hidden"
        } w-full fixed inset-0 z-50 bg-black/50`}
      >
        <div className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-2 rounded-lg place-items-center p-6 bg-gray-100 text-gray-900 shadow-lg duration-200 sm:max-w-lg">
          <CircleCheck size={64} />
          <h1 className="text-xl font-bold text-center">
            Message Submitted Successfully
          </h1>
          <p className="text-gray-800 text-sm mb-4 text-center mt-2">
            Your message received. We will get back to you shortly!{" "}
          </p>
          <Button
            className="w-fit cursor-pointer"
            onClick={() => setStatus(false)}
          >
            Close
          </Button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold mb-1">Get In Touch</h1>
      <p className="max-w-3xl text-center tracking-[0.05rem] leading-8">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col my-8 gap-6">
        {/* NAME INPUT */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        {/* EMAIL INPUT */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        {/* MOBILE INPUT */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mobile">Mobile</label>
          <input
            name="mobile"
            type="text"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your Mobile Number"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        {/* MESSAGE INPUT */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message">Message</label>
          <textarea
            rows={4}
            aria-multiline="true"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
            className="bg-white text-black p-2 min-w-xs md:min-w-md rounded"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? "bg-teal-200" : "bg-teal-500"
          } flex justify-center items-center gap-1 rounded hover:bg-teal-300 cursor-pointer py-4 font-semibold text-white w-full`}
        >
          {isLoading ? (
            <Loader className="animate-spin w-full" />
          ) : (
            <>
              <span>Submit</span>
              <ChevronRight size={16} />{" "}
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
