import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white break-words text-ellipsis whitespace-normal overflow-hidden'>I'm a dedicated and detail-oriented web developer focused on crafting modern, responsive, and user-centric websites. I specialize in React, Tailwind CSS, and JavaScript, combining clean UI/UX with optimized performance. From landing pages to full-scale web applications, I deliver pixel-perfect interfaces and smooth user experiences — built with scalable, maintainable code.

</p> 

<div id='contact' >
<button  className='border border-orange rounded-full py-2 px-4 items-center text-lg flex mt-10 hover:bg-orange transition-full duration-500 md:self-start sm:self-center cursor-pointer text-white hover:text-cyan'>Hire Me</button>

</div>
      
    </div>
  )
}

export default AboutMeText
