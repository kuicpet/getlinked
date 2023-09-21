import React from 'react'
import Image from 'next/image'
import CupImg from '../assets/cup.png'

const Prizes = () => {
  return (
    <section className='flex w-full items-center justify-center my-[2rem] border-[#FFFFFF2E] border-b py-[2rem]'>
      <div className='flex w-full'>
        <div className='flex w-1/2'>
          <Image src={CupImg} alt='' />
        </div>
        <div className='flex flex-col w-1/2 items-center'>
          <div className=''>
            <h3 className=' text-[2rem] font-bold'>
              Prizes and <br />
              <span className='text-[#D434FE]'>Rewards</span>
            </h3>
            <p className='text-justify text-[0.875rem]'>
              Here is the breakdown of the time we anticipate <br /> using for
              the upcoming event.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
