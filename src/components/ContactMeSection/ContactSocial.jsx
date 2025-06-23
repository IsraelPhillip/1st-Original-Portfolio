import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial Link='https://github.com/IsraelPhillip' Icon={FiGithub} />
      <SingleContactSocial Link='#' Icon={FaLinkedinIn} />
      <SingleContactSocial Link='https://www.instagram.com/israelphill' Icon={FaInstagram} />

    </div>
  )
}

export default ContactSocial
