import React, { useState, useRef, useEffect } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import TextType from "./TextType";

const Hero = () => {
  return (
    <section id="home" className="relative p-10 sm:p-16 lg:pt-36">
      <div className="container relative mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10">
        {/* Left Section */}
        <div>
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mt-10 font-mono">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Bikash Muduli
            </span>
          </h1>

          <TextType
            as="h2"
            text={[
              "Aspiring Full Stack Developer 💻",
              "Building Modern MERN Apps 🚀",
              "Turning Ideas into Reality ✨",
            ]}
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={[
              "linear-gradient(to right, #ec4899, #22d3ee)",
              "linear-gradient(to right, #a855f7, #06b6d4)",
              "linear-gradient(to right, #f472b6, #60a5fa)",
            ]}
            className="font-mono text-2xl font-semibold bg-clip-text text-transparent animate-gradient-x"
          />

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-8 pb-5 max-md:mb-10">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/Bikash.pdf"
              download
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="max-md:m-4 max-md:mt-10">
          <figure className="w-full max-w-[480px] mx-auto overflow-hidden rounded-2xl">
            <img
              src="/images/profilepic -Photoroom.png"
              alt="Profile Picture"
              className="w-full "
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
