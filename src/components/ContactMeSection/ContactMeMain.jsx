import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto justify-center mt-[100px] px-4'>
        <h2 className='text-6xl text-cyan mb-10 text-center'>Contact Me</h2>
        <div className='flex justify-between gap-24 p-8 bg-darkGrey rounded-2xl lg:flex-row sm:flex-col'>
            <ContactMeLeft/>
            <ContactMeRight/>
        </div>
      
    </div>
  )
}

export default ContactMeMain
