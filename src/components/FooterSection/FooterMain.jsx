import React from 'react'

const links = [
    { link: 'About Me', section: 'about' },
    { link: 'Skills', section: 'skills' },
    { link: 'Experience', section: 'experience' },
    { link: 'Projects', section: 'projects' },
    { link: 'Contact', section: 'contact' },
  ];

const FooterMain = () => {
  return (
    <div className='px-4'>
      <div className='bg-full bg-lightGrey h-[1px] mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 mx-w-1-[1200px] mx-auto'>
            <p className='text-3xl text-lightGrey'>Israel Phillip</p>
            <ul className='text-lightGrey text-2xl gap-4 flex'>
                {links.map((item,index)=>{
                    return <li key={index} ><a href="#" className='hover:text-white transition-all duration-500 cursor-pointer' >{item.link}</a></li>
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto mt-2 mb-12 text-right text-sm text-lightOrange'>© 2025 Israel Phillip | All rights reserved</p>
    </div>
  )
}

export default FooterMain
