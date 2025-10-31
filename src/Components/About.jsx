import React from "react";
import DecryptedText from "./DecryptedText";

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 10,
    },
    {
      label: "Years of experience",
      number: 1,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12 reveal-up">
          <DecryptedText
            text="Welcome! Hi, I’m Bikash Muduli, a passionate Computer Science and Engineering student at Roland Institute of Technology. I love building modern and responsive web applications with React, Node.js, and MongoDB, blending creativity with clean code. I’m currently sharpening my Full Stack Development and Data Structures & Algorithms skills with the goal of becoming a high-paying Full Stack Developer by 2025. Beyond coding, I enjoy solving real-world problems through projects, participating in hackathons, and continuously learning new technologies to stay ahead in the ever-evolving tech world."
            speed={30} // lower = faster animation
            maxIterations={25}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
            animateOn="view" // animate when scrolled into view
            parentClassName="bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-semibold mb-4 md:mb-8 md:text-xl md:max-w-[60ch] font-mono"
          />
            <h2 className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Interests: Full Stack Development | UI/UX | Problem Solving | Open-Source </h2> 
           <h2 className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Goal: To craft impactful
            digital experiences and grow as a professional developer.</h2> 
          <div className="flex flex-wrap gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl text-green-500">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            {/* <img src="images/logo.svg" 
                alt="" 
                height={30}
                width={30}
                className='ml-auto md:w-[40px] md:h-[40px]' /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
