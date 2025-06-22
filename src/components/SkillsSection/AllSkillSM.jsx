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
import { motion } from "motion/react"
import {fadeIn} from '/src/FramerMotion/variants';
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

const AllSkillSM = () => {
  return <motion.div
  variants={fadeIn('up', 0.2)}
  initial='hidden'
  whileInView='show'
  viewport={{once: false, amount: 0.7}}
  className='grid md:grid-cols-4 sm:grid-cols-2 my-12 gap-12'>
      {skills.map((item,index)=>{
        return <div key={index} className='flex flex-col items-center ' >
            <item.icon className='text-7xl text-orange'/>
            <p className='text-center mt-4 text-white'>{item.skill}</p>
        </div>
      })}
    </motion.div>
  
}

export default AllSkillSM
