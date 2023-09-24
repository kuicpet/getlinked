import React from 'react'
import Image from 'next/image'
import Partner1 from '../assets/Partner1.png'
import Partner2 from '../assets/Partner2.png'
import Partner3 from '../assets/Partner3.png'
import Partner4 from '../assets/Partner4.png'
import Partner5 from '../assets/Partner5.png'
import Partner6 from '../assets/Partner6.png'

const Partners = () => {
  return (
    <section className='flex flex-col w-full items-center justify-center my-[1rem] border-[#FFFFFF2E] border-b py-[2rem]'>
      <div className='flex flex-col'>
        <h3 className='text-center text-[2rem] font-bold'>
          Partners and Sponsors
        </h3>
        <p className='text-center text-[0.875rem] my-2'>
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
      </div>
      <div className='flex items-center justify-center  rounded-sm border border-[#D434FE] md:w-3/4 w-full p-6 my-5'>
        <div className='w-[85%] h-[85%]  grid grid-cols-3'>
          <div className='p-3 relative flex items-center justify-center border-b-2 border-r-2 border-[#D434FE]'>
            <Image src={Partner1} alt='' />
          </div>
          <div className='p-3 flex items-center justify-center border-b-2 border-r-2 border-l-2 border-[#D434FE]'>
            <Image src={Partner2} alt='' />
          </div>
          <div className='p-3 flex items-center justify-center border-b-2 border-l-2 border-[#D434FE]'>
            <Image src={Partner3} alt='' />
          </div>
          <div className='p-3 flex items-center justify-center border-t-2 border-r-2 border-[#D434FE]'>
            <Image src={Partner4} alt='' />
          </div>
          <div className='p-3 flex items-center justify-center border-t-2 border-l-2 border-r-2 border-[#D434FE]'>
            <Image src={Partner5} alt='' />
          </div>
          <div className='p-3 flex items-center justify-center border-t-2 border-l-2 border-[#D434FE]'>
            <Image src={Partner6} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
