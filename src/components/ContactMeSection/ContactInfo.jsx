import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text='kolybrytme@gmail.com' Image={MdOutlineEmail} />
      <SingleInfo text='+2349034533849' Image={MdOutlinePhone} />
      <SingleInfo text='Ibadan, Nigeria' Image={IoLocationOutline} />

    </div>
  )
}

export default ContactInfo
