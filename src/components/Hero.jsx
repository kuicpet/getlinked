import React from 'react'
import Button from './Button'
import Man from '../assets/man.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full flex flex-col'>
      <div className='flex relative mb-5'>
        <h2 className='ml-auto text-[1.75rem] italic'>
          Igniting a Revolution in HR Innovation
        </h2>
      </div>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='md:w-1/2 w-full'>
          <h1 className='text-[4.5rem] font-bold'>
            getlinked Tech
            <br />
            Hackathon <span className='text-[#D434FE]'>1.0</span>
          </h1>
          <p className='text-[1.25rem] my-4'>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button text='Register' />
          <h3 className='my-6 font-mono'>
            00<span>H</span>
            00<span>M</span>
            00<span>S</span>
          </h3>
        </div>
        <div className='md:w-1/2 w-full'>
          <Image src={Man} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Hero
