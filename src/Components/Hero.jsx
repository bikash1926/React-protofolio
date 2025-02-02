import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button';



const Hero = () => {
  return (
      <section id="home" className="relative p-10 sm:p-16 lg:pt-36">
        <div className="container relative mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10">
          {/* Left Section */}
          <div>
            {/* Availability Status */}
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-lg">
                <img src="/images/avatar-1.jpg" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
              </figure>
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
              </div>
            </div>
      
            {/* Headline */}
            <h2 className="headline-1 text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
              Building Scalable Modern Websites for the Future
            </h2>
      
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <ButtonPrimary label="Download CV" icon="download" />
              <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
            </div>
          </div>
      
          {/* Right Section */}
          <div className="max-md:m-4  max-md:mt-50 ">
            <figure className="w-full max-w-[480px] mx-auto bg-gradient-to-t from-sky-300 via-sky-400/40 to-transparent rounded-[60px] overflow-hidden sm:m-10">
              <img
                src="/images/profilepic -Photoroom.png"
                alt="Profile Picture"
                className="w-full bg-transparent"
              />
            </figure>
          </div>
        </div>
      </section>
  );
}

export default Hero;
