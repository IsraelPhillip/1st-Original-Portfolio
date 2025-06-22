import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange uppercase text-3xl text-bold font-special text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='2' text='Years'/>
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExperienceInfo number='8' text='Websites'/>

      </div>
      <p className='text-center text-white'>With Years of experience building dynamic and user-Friendly web application</p>
      <ExperienceInfo number='$10k' text='Max Budget' />

    </div>
  )
}

export default ExperienceTopLeft
