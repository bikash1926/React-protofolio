import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button';



const Hero = () => {
  return (
      <section id="home" className="relative p-10 sm:p-16 lg:pt-36 ">
        <div className="container relative mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10">
          {/* Left Section */}
          <div>
            {/* Headline */}
           <h1 className="text-2xl sm:text-3xl lg:text-5xl font-stretch-50% font-semibold max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mb-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent mt-10">
  <span className="">Hi,</span> I'm Bikash Muduli
</h1>
            <h2 className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-2xl'>Aspiring Full Stack Developer</h2>
            <h2 className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-semibold text-2xl'>I build modern and responsive web applications using MERN Stack.</h2>

      
            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-8  pb-5 max-md:mb-10">
              <ButtonPrimary label="Download CV" icon="download" href="/Bikash.pdf" download/>
              <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
            </div>
          </div>
      
          {/* Right Section */}
          <div className="max-md:m-4  max-md:mt-10 ">
            <figure className="w-full max-w-[480px] mx-auto bg-gradient-to-t from-sky-300 via-sky-400/40 to-transparent rounded-[30px] overflow-hidden sm:m-10 ">
              <img
                src="/images/profilepic -Photoroom.png"
                alt="Profile Picture"
                className="w-full bg-transparent "
              />
            </figure>
          </div>
        </div>
      </section>
  );
}

export default Hero;
