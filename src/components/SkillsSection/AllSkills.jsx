import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import SingleSkill from './SingleSkill';

const skills = [{
    skill: 'HTML',
    icon: FaHtml5
},
{
    skill: 'CSS',
    icon: FaCss3Alt
},{
    skill: 'Javascript',
    icon: IoLogoJavascript
},{
    skill: 'TypeScript',
    icon: SiTypescript
},{
    skill: 'ReactJS',
    icon: FaReact
},{
    skill: 'Redux',
    icon: SiRedux
},{
    skill: 'NextJS',
    icon: SiNextdotjs
},{
    skill: 'Tailwind CSS',
    icon: SiTailwindcss
}
]
const AllSkills = () => {
  return <div>
      <div className='flex gap-2 relative items-center justify center mx-auto max-w-[1200px]'>
      {skills.map((item, index) => (
        <div>
            <SingleSkill
          key={index}
          text={item.skill}
          imgSvg={<item.icon />}
        />
        </div>
       
      ))}
    </div>
    </div>
  
}

export default AllSkills
