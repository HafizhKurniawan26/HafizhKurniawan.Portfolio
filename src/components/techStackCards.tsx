"use client";
import React from "react";
import RoundedCard from "./ui/roundedCard";
import ReactJS from "../assets/images/download (1).png";
import HTML from "../assets/images/download (2).png";
import CSS from "../assets/images/css2.jpeg";
import JavaScript from "../assets/images/js.png";
import NextJS from "../assets/images/nextjs.jpeg";
import TailwindCSS from "../assets/images/tailwind.png";
import TypeScript from "../assets/images/ts.png";
import Vscode from "../assets/images/vsc.jpeg";
import Github from "../assets/images/github.png";

const TechStackCards = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 justify-center gap-4 md:gap-12 p-4 md:p-12">
      <RoundedCard title="HTML" img={HTML.src} />
      <RoundedCard title="CSS" img={CSS.src} />
      <RoundedCard title="JavaScript" img={JavaScript.src} />
      <RoundedCard title="ReactJS" img={ReactJS.src} />
      <RoundedCard title="NextJS" img={NextJS.src} />
      <RoundedCard title="TailwindCSS" img={TailwindCSS.src} />
      <RoundedCard title="TypeScript" img={TypeScript.src} />
      <RoundedCard title="Vscode" img={Vscode.src} />
      <RoundedCard title="Github" img={Github.src} />
    </div>
  );
};

export default TechStackCards;
