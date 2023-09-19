import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='flex items-center justify-center border-none rounded-md w-[10.75rem] p-2 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-500'>
      {text}
    </button>
  )
}

export default Button
