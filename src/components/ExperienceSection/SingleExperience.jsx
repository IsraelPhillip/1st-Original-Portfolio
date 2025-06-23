import React from 'react'


const SingleExperience = ({experience}) => {
  return (
    <div
    className='md:h-[350px] md:w-[240px] sm:w-full sm:h-auto border-2 border-orange border-dashed rounded-2xl p-4  mt-12'>
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>

      <ul className='list-disc  text-white pl-4 mt-4 '>{experience.responsibilities.map((resp,index)=>{
        return <li key={index}>{resp}</li>
      })}</ul>
    </div>
  )
}

export default SingleExperience
