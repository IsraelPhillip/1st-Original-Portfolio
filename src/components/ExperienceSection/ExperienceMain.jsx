import React from 'react'
import AllExperience from './AllExperience'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'


const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>
      <div>

      <ExperienceText/>
      </div>
      <div>
      <ExperienceTop/>
      </div>
      <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
      <AllExperience/>
    </div>
  )
}

export default ExperienceMain
