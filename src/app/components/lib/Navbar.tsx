"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Why Choose Us",
    href: "#why-to-choose",
  },
  {
    label: "Our Services",
    href: "#services",
  },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "why-to-choose", "services"];
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full flex justify-center z-50 backdrop-blur-2xl">
      <div className="max-w-[90%] flex w-full justify-between items-center py-3">
        {/* logo */}
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" width={80} height={20} />
        </Link>

        {/* nav-links */}
        <ul className=" items-center md:flex hidden gap-10">
          {navLinks.map((l, idx) => {
            const hrefId = l.href.replace("#", "") || "home";
            const isActive = activeSection === hrefId;

            return (
              <li key={idx}>
                <Link
                  href={l.href}
                  className={`${
                    isActive ? "text-[#5454D4] font-semibold" : "text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* button */}
        <Link
          href="#contact-us"
          className="border border-white rounded-lg sm:px-8 px-5 sm:py-2 py-1 text-sm "
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
}
