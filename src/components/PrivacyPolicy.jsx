import React from 'react'
import Image from 'next/image'
import ShiledImg from '../assets/Shield.png'
import LockImg from '../assets/lock.png'
import Button from './Button'
import ListImg from '../assets/list.png'

const PrivacyPolicy = () => {
  return (
    <section className='flex items-center w-full mt-[2rem] flex-col md:flex-row border-[#FFFFFF2E] border-b py-10'>
      <div className='md:w-1/2 w-full m-4'>
        <h4 className='text-[2rem] font-bold'>
          Privacy Policy and
          <br /> <span className='text-[#D434FE]'>Terms</span>
        </h4>
        <p className='text-[0.875rem] md:w-[80%] w-full'>
          Last updated on September 12, 2023
        </p>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className='flex border-2 border-[#D434FE] flex-col p-10 rounded-md my-4'>
          <p className='my-5'>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className='my-3 text-[#D434FE]'>Licensing Policy</p>
          <p className='my-2'>Here are terms of our Standard License:</p>
          <ul className='my-5'>
            <li className='my-2'>
              <span className='text-[0.875rem]'>
                <Image src={ListImg} alt='' />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </span>
            </li>
            <li className='my-2 flex items-center justify-between'>
              <span className=' text-[0.875rem]'>
                <Image src={ListImg} alt='' />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </span>
            </li>
          </ul>
          <div className='flex items-center justify-center'>
            <Button text='Read More' />
          </div>
        </div>
      </div>
      <div className='w-1/2 shield'>
        <Image src={LockImg} alt='' />
      </div>
    </section>
  )
}

export default PrivacyPolicy
