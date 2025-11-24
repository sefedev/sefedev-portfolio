"use client";

import { HamburgerIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Work Flow", href: "#process" },
  { name: "Recent work", href: "#recent" },
  { name: "Get In Touch", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <nav
      className={`flex flex-col md:flex-row justify-end fixed md:left-1/2 md:-translate-x-1/2 lg:min-w-5xl min-w-screen px-4 md:px-10 lg:px-16  py-6 ${
        isOpen ? "bg-slate-800" : "bg-slate-800/90"
      } text-slate-200 font-semibold md:mx-auto rounded-b-xl z-50`}
    >
      {/* LOGO */}
      <Image
        src="/logo-only.png"
        width={56}
        height={48}
        alt="Sefe Studio Logo"
        className="hidden md:flex"
      />

      {/* DESKTOP NAV */}
      <ul className="hidden md:flex items-center justify-end gap-12 flex-1 text-sm">
        {NAV_LINKS.map((link, index) => (
          <li
            key={index}
            className="whitespace-nowrap w-fit hover:text-teal-500 duration-200 ease-in-out"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* HAMBURGER BUTTON */}
      <div className="md:hidden w-full flex items-center justify-between">
        <Image
          src="/logo-only.png"
          width={48}
          height={48}
          alt="Sefe Studio Logo"
          className=""
        />
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
            <HamburgerIcon className="text-teal-500" size={28} />
          </span>
          <span
            className={`absolute inset-0 transition-opacity duration-250 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <X className="text-teal-500" />
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
        <ul className="flex flex-col items-center gap-8 flex-1 mb-6">
          {NAV_LINKS.map((link, index) => (
            <li
              key={index}
              className="hover:text-teal-500 duration-200 ease-in-out whitespace-nowrap w-fit"
            >
              <Link href={link.href} onClick={handleClose}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
