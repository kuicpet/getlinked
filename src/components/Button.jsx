import React from 'react'

const Button = ({ text, onClick, special }) => {
  return (
    <button
      className={`flex items-center justify-center border-none rounded-md ${special ? 'w-full' : 'w-[10.75rem]'} p-2 bg-gradient-to-l from-purple-600 via-pink-500 to-pink-500`}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
