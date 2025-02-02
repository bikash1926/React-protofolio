import React from "react";

const educationData = [
  {
    id: 1,
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/14787_ROLANDI_APP.jpg?h=260&w=360&mode=crop",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institute: "Roland Institute of Technology",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-wSSWxQHe_6HJSWibyVcyrg0M0wuKk0X9A&s",
    degree: "CHSE in Science (Physics, Chemistry, Mathematics)",
    institute: "Chatrapur Govt. Science College",
  },
 
];

const Edu = () => {
  return (
    <div className="max-w-6xl mx-auto my-7 p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-md:m-4">
      <h2 className="text-2xl font-bold text-zinc-200 col-span-full text-left">Education</h2>
      {educationData.map((edu) => (
        <div key={edu.id} className="p-6 bg-zinc-800 rounded-xl shadow-md flex flex-col items-center md:items-start">
          <img
            src={edu.image}
            alt="Education"
            className="w-full md:w-3/4 rounded-lg shadow-md"
          />
          <div className="text-center md:text-left mt-4">
            <p className="mt-2 text-zinc-200">
              🎓 {edu.degree}
              <br />📍 {edu.institute}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Edu;