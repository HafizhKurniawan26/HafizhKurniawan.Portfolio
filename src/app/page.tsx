"use client";
import ProfileCard from "@/components/ui/ProfileCard";
import React from "react";
import ProfileImg from "../assets/images/HafizhKurniawan.png";
import TextType from "@/components/ui/TextType";
import { Contact2 } from "@/components/contact-2";
import TechStackCards from "@/components/techStackCards";

const Page = () => {
  return (
    <div className="h-dvh text-white mx-2 md:mx-12" id="#">
      <section className="mb-32">
        <div className="h-dvh md:grid md:grid-cols-2 flex flex-col-reverse justify-center items-center gap-8 md:gap-12">
          <div className="flex flex-col justify-center md:ml-8">
            <h1 className="text-xl md:text-2xl text-center md:text-left">
              Hi Everyone,
            </h1>
            <h1 className="text-2xl md:text-3xl text-center md:text-left mb-4">
              I'm{" "}
              <span className="text-blue-400 font-semibold md:font-bold">
                Hafizh Kurniawan
              </span>
            </h1>

            <TextType
              text={[
                "Front-End Developer",
                "Informatics Student",
                "Web Enthusiast",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-2xl md:text-3xl italic text-center md:text-left font-semibold text-gray-400 underline underline-offset-8"
            />
          </div>

          <div className="flex justify-center items-center">
            <ProfileCard
              avatarUrl={ProfileImg.src}
              name=""
              title=""
              showUserInfo={false}
            />
          </div>
        </div>
      </section>

      <section className="mb-48">
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-8">
          About <span className="text-blue-400">Me</span>
        </h1>
        <p className="text-xl text-center md:mx-20">
          I am a highly motivated 5th-semester student with a profound passion
          for web development. My academic journey has provided me with a strong
          foundation in both front-end and back-end technologies, and I am
          dedicated to continuously expanding my knowledge and skill set beyond
          the classroom. I am actively seeking opportunities to contribute to
          innovative and impactful projects that challenge me to grow and solve
          real-world problems through clean, efficient code.
        </p>
      </section>

      <section id="techstack">
        <div className="bg-gray-900 h-full mx-2 sm:md:8 md:mx-20 rounded-4xl">
          <h1 className="text-center text-3xl md:text-4xl py-8 font-semibold">
            TechStack &<span className="text-blue-400"> Tools</span>
          </h1>

          <TechStackCards />
        </div>
      </section>

      <section id="contact">
        <Contact2
          title="Contact Us"
          description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
          phone="(123) 34567890"
          email="email@example.com"
          web={{ label: "shadcnblocks.com", url: "https://shadcnblocks.com" }}
        />
      </section>
    </div>
  );
};

export default Page;
