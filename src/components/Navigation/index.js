"use client";

import { useState } from "react";

const links = [
  {
    name: "What we do",
    // url: "/what-we-do",
    className: "opacity-50 cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    name: "Who we are",
    // url: "/who-we-are",
    className: "opacity-50 cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    name: "Where we are",
    // url: "/where-we-are",
    className: "opacity-50 cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    name: "News & Events",
    // url: "/news-and-events",
    className: "opacity-50 cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    name: "People & Careers",
    // url: "/people-and-careers",
    className: "opacity-50 cursor-not-allowed",
    title: "Coming soon...",
  },
  {
    title: "Equipment",
    // url: "/equipment",
    className: "opacity-50 cursor-not-allowed",
    title: "Coming soon...",
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-16 lg:hidden flex flex-row justify-between items-center bg-white px-2">
        <img src="/yeet21.png" alt="UAG Logo" className="py-2 h-16" />
        <button
          className="text-xl font-bold hover:text-uaggreen uppercase"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center divide-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`text-lg font-bold hover:text-uaggreen uppercase py-2 ${link.className}`}
                title={link.title}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      <nav className="hidden w-full h-32 lg:flex flex-row justify-around items-center bg-white">
        <img src="/yeet21.png" alt="UAG Logo" className="py-4 h-32" />
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`text-lg font-bold hover:text-uaggreen uppercase ${link.className}`}
            title={link.title}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
}
