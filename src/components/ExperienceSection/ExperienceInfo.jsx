import React from 'react'

const ExperienceInfo = ({number,text}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-6xl font-bold text-cyan'>{number}</p> <br />
      <p className='text-xl font-bold text-lightGrey -mt-4 uppercase'>{text}</p>
    </div>
  )
}

export default ExperienceInfo
