import React from 'react'

const AboutMePic = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
      <div className='h-[500px] w-[300px] absolute rounded-[100px] overflow-hidden'>
        <img src="/about-me.jpg" alt="" className='h-full w-auto object-cover' />
      </div>
      <div className='h-[500px] w-[250px] bg-orange absolute left-[-30px] bottom-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></div>
    </div>
  )
}

export default AboutMePic
