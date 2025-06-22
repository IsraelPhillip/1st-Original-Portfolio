import React from 'react'
import { motion } from "motion/react"
import {fadeIn} from '/src/FramerMotion/variants';

const SingleExperience = ({experience}) => {
  return (
    <motion.div
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0}}
    className='md:h-[350px] md:w-[240px] sm:w-full sm:h-auto border-2 border-orange border-dashed rounded-2xl p-4  mt-12'>
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>

      <ul className='list-disc  text-white pl-4 mt-4 '>{experience.responsibilities.map((resp,index)=>{
        return <li key={index}>{resp}</li>
      })}</ul>
    </motion.div>
  )
}

export default SingleExperience
