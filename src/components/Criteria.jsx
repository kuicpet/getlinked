import React from 'react'
import Image from 'next/image'
import Group from '../assets/man_woman.png'

const Criteria = () => {
  return (
    <section className='flex items-center w-full mt-[2rem] flex-col md:flex-row border-[#FFFFFF2E] border-b'>
      <div className='w-1/2'>
        <Image src={Group} alt='' />
      </div>
      <div className='md:w-1/2 w-full m-4'>
        <h4 className='text-[2rem] font-bold'>
          Judging Criteria <br />{' '}
          <span className='text-[#D434FE]'>Key attributes</span>
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
    </section>
  )
}

export default Criteria
