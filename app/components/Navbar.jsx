"use client";

import {
  GithubIcon,
  HamburgerIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Recent work", href: "#recent" },
  { name: "Get In Touch", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false)
  return (
    <nav
      className={`flex flex-col md:flex-row justify-end fixed md:left-1/2 md:-translate-x-1/2 lg:min-w-5xl min-w-screen px-4 md:px-10 lg:px-16  py-6 ${
        isOpen ? "bg-slate-800" : "bg-slate-800/90"
      } text-slate-200 font-semibold md:mx-auto rounded-b-xl z-50`}
    >
      {/* DESKTOP NAV */}
      <ul className="hidden md:flex md:gap-8 lg:gap-12  flex-1 text-sm">
        {NAV_LINKS.map((link, index) => (
          <li
            key={index}
            className="whitespace-nowrap w-fit hover:text-teal-500 duration-200 ease-in-out"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex items-center justify-center md:gap-6 lg:gap-8 min-w-[10rem]">
        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="mailto:iomosefe2016@gmail.com" target="_blank">
            <MailIcon />
          </Link>
        </li>

        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="https://www.github.com/sefedev" target="_blank">
            <GithubIcon />
          </Link>
        </li>

        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="https://wa.me/+2349058669734" target="_blank">
            <PhoneIcon />
          </Link>
        </li>

        <li className="hover:text-teal-500 hover:scale-125 duration-200 ease-in-out">
          <Link href="https://x.com/sephiano1" target="_blank">
            <TwitterIcon />
          </Link>
        </li>
      </ul>

      {/* HAMBURGER BUTTON */}
      <div className="md:hidden w-full flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-teal-500">IO</h1>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8"
        >
          <span
            className={`absolute inset-0 transition-opacity duration-250 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <HamburgerIcon className="text-teal-500" size={28}/>
          </span>
          <span
            className={`absolute inset-0 transition-opacity duration-250 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <X className="text-teal-500"/>
          </span>
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`flex flex-col md:hidden overflow-hidden transition-all duration-250 ease-in-outout transform ${
          isOpen
            ? "translate-y-0 opacity-100 mt-8 h-fit"
            : "-translate-y-full opacity-0 h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 flex-1">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="hover:text-teal-500 duration-200 ease-in-out whitespace-nowrap w-fit">
              <Link href={link.href} onClick={handleClose}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-8 mt-8 py-8">
          <li className="hover:text-teal-500 duration-200 ease-in-out cursor-pointer">
            <Link href="mailto:iomosefe2016@gmail.com" target="_blank" onClick={handleClose}>
            <MailIcon />
          </Link>
          </li>

          <li className="hover:text-teal-500 duration-200 ease-in-out cursor-pointer">
            <Link href="https://www.github.com/sefedev" target="_blank" onClick={handleClose}>
            <GithubIcon/>
            </Link>
          </li>

          <li className="hover:text-teal-500 duration-200 ease-in-out cursor-pointer">
            <Link href="https://wa.me/+2349058669734" target="_blank" onClick={handleClose}>
            <PhoneIcon/>
            </Link>
          </li>

          <li className="hover:text-teal-500 duration-200 ease-in-out cursor-pointer">
            <Link href="https://x.com/sephiano1" target="_blank" onClick={handleClose}>
            <TwitterIcon/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
