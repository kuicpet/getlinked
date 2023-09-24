import React, { useState } from 'react'
import { Button } from '@/components'
import Image from 'next/image'
import ManImg from '../assets/3d.png'
import WalkmanImg from '../assets/walkm.png'
import WalkwomanImg from '../assets/walkw.png'
import axios from 'axios'

const register = () => {
  const [team_name, setTeam_name] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [email, setEmail] = useState('')
  const [project_topic, setProject_topic] = useState('')
  const [category, setCategory] = useState(0)
  const [group_size, setGroup_size] = useState(0)
  const [privacy_policy, setPrivacy_policy] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(`https://backend.getlinked.ai/hackathon/registration`, {
          team_name,
          phone_number,
          email,
          project_topic,
          category,
          group_size,
          privacy_policy,
        })
        .then((response) => {
          console.log(response)
          {/**Alert */}
          setTeam_name('')
          setCategory(0)
          setEmail('')
          setPhone_number('')
          setGroup_size(0)
          setPrivacy_policy(false)
          setProject_topic('')
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='flex w-full my-4'>
      <div className='w-1/2 hidden md:block'>
        <Image src={ManImg} alt='' />
      </div>
      <div className='flex justify-center md:w-1/2 p-4 mx-2'>
        <div className='bg-[#FFFFFF08] shadow-md  w-full p-4 rounded-xl flex flex-col items-center'>
          <div className='flex flex-col w-[90%] mb-5'>
            <h1 className='text-[#D434FE] text-3xl mb-5'>Register</h1>
            {/**mobile img */}
            <Image src={ManImg} alt='' className='md:hidden' />
            <p className='text-sm mb-2 items-center flex'>
              Be part of this movement!{' '}
              <span className='flex'>
                <Image src={WalkwomanImg} alt='' />
                <Image src={WalkmanImg} alt='' />
              </span>{' '}
            </p>
            <h2 className='text-2xl'>CREATE YOUR ACCOUNT</h2>
          </div>
          <form className='md:w-[90%]' onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-1 my-5'>
              <div className='md:w-[95%]'>
                <label>Team’s Name</label>
                <input
                  required
                  value={team_name}
                  onChange={(e) => setTeam_name(e.target.value)}
                  placeholder='Enter the name of your group'
                  className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  required
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                  placeholder='Enter your phone number'
                  className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
                />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-1 my-5'>
              <div className='md:w-[95%]'>
                <label>Email</label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
                />
              </div>
              <div>
                <label>Project Topic</label>
                <input
                  required
                  value={project_topic}
                  onChange={(e) => setProject_topic(e.target.value)}
                  placeholder='What is your group project topic'
                  className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'
                />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-1 my-5'>
              <div className='md:w-[95%]'>
                <label>Category</label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'>
                  <option>Select your category</option>
                  <option value='1'>Mobile</option>
                  <option value='2'>Web</option>
                  <option value='3'>Backend</option>
                </select>
              </div>
              <div>
                <label htmlFor='group-size'>Group Size</label>
                <select
                  required
                  value={group_size}
                  onChange={(e) => setGroup_size(e.target.value)}
                  id='group-size'
                  name='group-size'
                  className='border border-white bg-transparent w-full rounded px-2 py-1 outline-none'>
                  <option>Select</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </div>
            </div>
            <div>
              <p className='text-[#D434FE]'>
                Please review your registration details before submitting
              </p>
              <div className='flex w-full items-center justify-between'>
                <input
                  type='checkbox'
                  value={privacy_policy}
                  onChange={(e) => setPrivacy_policy(true)}
                />
                <p className='text-sm'>
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
            <div className='w-full flex justify-center my-5'>
              <Button text='Register Now' special />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default register
