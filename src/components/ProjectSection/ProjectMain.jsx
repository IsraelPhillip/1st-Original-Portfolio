import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import img1 from '../../assets/website-img-1.jpg';
import img2 from '../../assets/website-img-2.webp';
import img3 from '../../assets/website-img-3.jpg';
import img4 from '../../assets/website-img-4.jpg';
import { motion } from "motion/react"
import {fadeIn} from '/src/FramerMotion/variants';


const projects=[
    {
        name: 'Movie App',
        year: 'Dec2024',
        align: 'right',
        image: img1,
        link: '#'
    }, {
        name: 'Phipest Construction',
        year: 'Mar2025',
        align: 'left',
        image: img2,
        link: '#'
    }, {
        name: 'Debate_X',
        year: 'Jan2025',
        align: 'right',
        image: img3,
        link: '#'
    }, {
        name: 'Model Fashion',
        year: 'sept2024',
        align: 'left',
        image: img4,
        link: '#'
    },
]
const ProjectMain = () => {
  return (
    <div id='projects' className='max-w[1200px] mx-auto px-4'>
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0}}
      >

      <ProjectText/>
      </motion.div>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />
        })}
      </div>
    </div>
  )
}

export default ProjectMain
