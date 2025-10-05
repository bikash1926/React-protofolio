import React from "react";

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
          <p
            className="text-zinc-300 mb4
             md:mb-8 md:text-xl md:max-w-[60ch] font-mono "
          >
            Welcome! Hi, I’m Bikash Muduli, a passionate Computer Science and
            Engineering student at Roland Institute of Technology. I love
            building modern and responsive web applications with React, Node.js,
            and MongoDB, blending creativity with clean code. I’m currently
            sharpening my Full Stack Development and Data Structures &
            Algorithms skills with the goal of becoming a high-paying Full Stack
            Developer by 2025. Beyond coding, I enjoy solving real-world
            problems through projects, participating in hackathons, and
            continuously learning new technologies to stay ahead in the
            ever-evolving tech world. 
          </p>
            <h2 className="text-gray-100">Interests: Full Stack Development | UI/UX | Problem Solving | Open-Source </h2> 
           <h2 className="text-gray-100">Goal: To craft impactful
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
