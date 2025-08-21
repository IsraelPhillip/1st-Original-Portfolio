import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Phillip Apps",
    date: "2024 - Present",
    responsibilities: [
      "Developing and maintaining highly responsive user interfaces using React and Tailwind CSS.",
      "Building reusable and scalable front-end components to speed up project delivery.",
      "Optimizing web applications for better performance, accessibility, and mobile responsiveness.",
      "Collaborating on UI/UX improvements to enhance customer engagement and satisfaction."
    ],
  },
  {
    job: "Web Developer",
    company: "Phipest-Bens Intl Ltd",
    date: "2024 - Present",
    responsibilities: [
      "Designed and launched the company’s official website with a modern, user-friendly layout.",
      "Integrated responsive design practices to ensure seamless viewing across devices.",
      "Worked closely with stakeholders to align digital solutions with business goals.",
      "Implemented SEO and performance enhancements, improving online visibility and speed."
    ],
  },
  {
    job: "Front-End Developer",
    company: "Freelance Projects",
    date: "2023 - 2024",
    responsibilities: [
      "Created interactive web experiences for client projects with React and JavaScript.",
      "Collaborated with back-end developers to integrate APIs and ensure smooth data flow.",
      "Introduced new development workflows that improved efficiency and code quality.",
      "Explored innovative front-end techniques, keeping projects aligned with industry trends."
    ],
  }
  
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
