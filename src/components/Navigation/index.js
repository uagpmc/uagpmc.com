"use client";

import { useState } from "react";

const links = [
  { title: "What we do", url: "#" },
  { title: "Who we are", url: "#" },
  { title: "Where we are", url: "#" },
  { title: "News & Events", url: "#" },
  { title: "People & Careers", url: "#" },
  { title: "Equipment", url: "#" },
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
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="text-lg font-bold hover:text-uaggreen uppercase py-2"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </nav>
      <nav className="hidden w-full h-32 lg:flex flex-row justify-around items-center bg-white">
        <img src="/yeet21.png" alt="UAG Logo" className="py-4 h-32" />
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            className="text-lg font-bold hover:text-uaggreen uppercase"
          >
            {link.title}
          </a>
        ))}
      </nav>
    </>
  );
}
