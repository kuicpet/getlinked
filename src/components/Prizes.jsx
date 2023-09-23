import React from 'react'
import Image from 'next/image'
import CupImg from '../assets/Cup.png'
import BronzeImg from '../assets/bronze.png'
import SilverImg from '../assets/silver.png'
import GoldImg from '../assets/gold.png'

const Prizes = () => {
  return (
    <section className='flex w-full items-center justify-center my-[2rem] border-[#FFFFFF2E] border-b py-[2rem]'>
      <div className='flex w-full'>
        <div className='flex w-1/2'>
          <Image src={CupImg} alt='' />
        </div>
        <div className='flex flex-col w-3/4 '>
          <div className=''>
            <h3 className=' text-[2rem] font-bold'>
              Prizes and <br />
              <span className='text-[#D434FE]'>Rewards</span>
            </h3>
            <p className='text-justify text-[0.875rem]'>
              Here is the breakdown of the time we anticipate <br /> using for
              the upcoming event.
            </p>
            <div className='flex flex-row w-full my-7 gap-2'>
              <div className='flex flex-col items-center p-2 justify-center bg-[#D434FE1F] border-[#D434FE] relative border h-[16.5rem] w-1/3 rounded'>
                <Image src={SilverImg} alt='bronze' className='' width='11rem' />
                <div className='flex flex-col items-center mb-3'>
                  <h3 className='text-2xl font-bold'>
                    2nd <br /> Runner
                  </h3>
                  <h2 className='text-[#D434FE] text-[2rem] font-bold'>
                    N300000
                  </h2>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center p-2 border bg-[#903AFF1F] relative border-[#903AFF] h-[18.75rem] w-1/3 rounded'>
                <Image src={GoldImg} alt='bronze' className='w-[18.5rem]' />
                <div className='flex flex-col items-center mb-3'>
                  <h3 className='text-2xl font-bold'>
                    1st <br /> Runner
                  </h3>
                  <h2 className='text-[#903AFF] text-[2rem] font-bold'>
                    N400000
                  </h2>
                </div>
              </div>
              <div className='bg-[#D434FE1F] border border-[#D434FE] relative  w-1/3 h-[16.5rem] rounded'>
                <Image src={BronzeImg} alt='bronze' />
                <div className='flex flex-col items-center mb-3'>
                  <h3 className='text-2xl font-bold'>
                    3rd <br /> Runner
                  </h3>
                  <h2 className='text-[#D434FE] text-[2rem] font-bold'>
                    N150000
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
