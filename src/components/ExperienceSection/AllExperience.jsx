import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Phillip Apps",
    date: "2024 - Present",
    responsibilities: [
      "Built responsive UIs with React and Tailwind CSS.",
      "Developed reusable front-end components.",
      "Improved performance and accessibility.",
      "Enhanced UI/UX for better engagement."
    ],
  },
  {
    job: "Web Developer",
    company: "Phipest-Bens Intl Ltd",
    date: "2024 - Present",
    responsibilities: [
      "Designed and deployed the company website.",
      "Implemented mobile-friendly, responsive layouts.",
      "Aligned web solutions with business needs.",
      "Optimized SEO and site performance."
    ],
  },
  {
    job: "Front-End Developer",
    company: "Freelance Projects",
    date: "2023 - 2024",
    responsibilities: [
      "Built interactive client websites with React.",
      "Integrated APIs with front-end applications.",
      "Improved workflow and code quality.",
      "Adopted modern front-end practices."
    ],
  }
]
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
