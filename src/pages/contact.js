import React, { useState } from 'react'
import Image from 'next/image'
import XImg from '../assets/X.png'
import LinkedInImg from '../assets/LinkedIn.png'
import InstaImg from '../assets/Instagram.png'
import FacebookImg from '../assets/Facebook.png'
import { Button } from '@/components'

const contact = () => {
  const [fisrt_name, setFirst_name] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <section className='flex flex-col md:flex-row w-full p-[5rem]'>
      <div className='w-1/2 hidden md:flex flex-col'>
        <h3 className='text-[#D434FE] text-4xl font-semibold py-4'>
          Get in touch
        </h3>
        <div className='my-4'>
          <p className='py-2'>
            Contact <br />
            Information
          </p>
          <p>
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p className='py-2'>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>
        </div>
        <div>
          <p className='text-[#D434FE] py-2'>Share on</p>
          <div className='flex items-center justify-between w-[10rem]'>
            <Image src={InstaImg} alt='' />
            <Image src={XImg} alt='' />
            <Image src={FacebookImg} alt='' />
            <Image src={LinkedInImg} alt='' />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center  md:w-1/2 w-full '>
        <div className='bg-[#FFFFFF08] shadow-md  w-[85%] p-4 rounded-xl flex flex-col items-center'>
          <div className='text-justify flex flex-col justify-start w-3/4'>
            <h3 className='text-[#D434FE]'>Questions or need assistance?</h3>
            <h3 className='text-[#D434FE]'>Let us know about it!</h3>
            <p className='text-[0.75rem]'>
              Email us below to any question related to our event
            </p>
          </div>
          {/**web view */}
          <form className='w-3/4 ' onSubmit={handleSubmit}>
            <div className='my-2'>
              <label></label>
              <input
                placeholder='First Name'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
              />
            </div>
            <div className='my-2'>
              <label></label>
              <input
                placeholder='Mail'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
              />
            </div>
            <div className='my-2'>
              <label></label>
              <textarea
                placeholder='Message'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
                rows={5}
                cols={10}></textarea>
            </div>
            <div className='flex items-center justify-center my-5'>
              <Button text='Submit' />
            </div>
          </form>
          {/**Mobile view */}
          <form className='w-3/4 hidden'>
            <div className='my-2'>
              <label></label>
              <input
                placeholder='Team Name'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
              />
            </div>
            <div className='my-2'>
              <label></label>
              <input
                placeholder='Topic'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
              />
            </div>
            <div className='my-2'>
              <label></label>
              <input
                placeholder='Email'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
              />
            </div>
            <div className='my-2'>
              <label></label>
              <textarea
                placeholder='Message'
                className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
                rows={5}
                cols={10}></textarea>
            </div>
            <div className='flex items-center justify-center my-5'>
              <Button text='Submit' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default contact
