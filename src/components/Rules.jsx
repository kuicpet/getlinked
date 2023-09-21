import React from 'react'
import Woman from '../assets/woman.png'
import Image from 'next/image'

const Rules = () => {
  return (
    <section
      className='flex items-center w-full mt-[2rem] flex-col md:flex-row border-[#FFFFFF2E] border-b'>
      <div className='md:w-1/2 w-full m-4'>
        <h4 className='text-[2rem] font-bold'>
          Rules and <br /> <span className='text-[#D434FE]'>Guidelines</span>
        </h4>
        <p className='text-[0.875rem] md:w-[80%] w-full'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className='w-1/2'>
        <Image src={Woman} alt='' />
      </div>
    </section>
  )
}

export default Rules
