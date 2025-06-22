import React from 'react'

const SingleContactSocial = ({Icon, Link}) => {
  return (
    <div className='text-2xl text-orange h-12 border border-orange rounded-full p-3 flex items-center justify-center'>
      <a href={Link}
      className='cursor-pointer'
      >
        <Icon/>
      </a>
    </div>
  )
}

export default SingleContactSocial
