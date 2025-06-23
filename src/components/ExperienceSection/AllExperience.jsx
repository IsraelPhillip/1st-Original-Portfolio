import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Phillip Apps",
    date: "2024 - Present",
    responsibilities: [
      "Implementing Reusable Component",
      "Participating in scale application",
      "Working on performance of web application",
      "Generating new ideas for web design and Development",
    ],
  },
  {
    job: "Web Developer",
    company: "Phipest-Bens Intl Ltd",
    date: "2024 - Present",
    responsibilities: [
      "Implementing Reusable Component",
      "Participating in scale application",
      "Working on performance of web application",
      "Generating new ideas for web design and Development",
    ],
  },
  {
    job: "Front-End Developr",
    company: "Phillip Apps",
    date: "2024 - Present",
    responsibilities: [
      "Implementing Reusable Component",
      "Participating in scale application",
      "Working on performance of web application",
      "Generating new ideas for web design and Development",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-col items-center justify-between gap-8 flex-wrap mt-12">
      {experiences.map((experience, index) => {
        return (
          <div className="flex items-center gap-4">
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <div>
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllExperience;
