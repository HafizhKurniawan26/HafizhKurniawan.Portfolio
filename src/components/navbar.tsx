"use client";
import Link from "next/link";
import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { FaCode, FaHome } from "react-icons/fa";

const Navbar = () => {
  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle =
        absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

      window.scrollTo({
        top: middle,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="rounded-full border-white/20 bg-white/10 shadow-lg backdrop-filter backdrop-blur-lg fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex py-4 px-6 gap-8 rounded-full border-2 border-gray-100 w-fit">
        <li>
          <Link
            href={"#"}
            onClick={(e) => handleLinkClick("#", e)}
            className="flex items-center gap-2"
          >
            <FaHome className="text-2xl text-white" />
          </Link>
        </li>
        <li>
          <Link
            href={"#techstack"}
            onClick={(e) => handleLinkClick("#techstack", e)}
            className="flex items-center gap-2"
          >
            <FaCode className="text-2xl text-white" />
          </Link>
        </li>
        <li>
          <Link
            href={"#contact"}
            onClick={(e) => handleLinkClick("#contact", e)}
            className="flex items-center gap-2"
          >
            <BiSolidContact className="text-2xl text-white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
