// src/components/Work.jsx
import React from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "/images/project-1.jpg",
    title: "Full Stack Music App",
    subtitle: "API, MVC, Development",

    url: "https://github.com/",
  },
  {
    image: "/images/project-2.jpg",
    title: "Free Stock Photo App",
    subtitle: "API, SPA",

    url: "https://github.com/",
  },
  {
    image: "/images/project-3.jpg",
    title: "Recipe App",
    subtitle: "Development, API",

    url: "https://github.com/",
  },
  {
    image: "/images/project-4.jpg",
    title: "Real Estate Website",
    subtitle: "Web Design, Development",

    url: "https://github.com/",
  },
  {
    image: "/images/project-5.jpg",
    title: "eCommerce Website",
    subtitle: "eCommerce, Development",

    url: "https://github.com/",
  },
  {
    image: "/images/project-6.jpg",
    title: "vCard Personal Portfolio",
    subtitle: "Web Design, Development",

    url: "https://github.com/",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20  text-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-12">My Recent Work</h2>
        <div style={{ height: "auto", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={400}
            damping={0.5}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
