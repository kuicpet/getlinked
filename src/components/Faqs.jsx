import React, { useState } from 'react'
import Image from 'next/image'
import Think from '../assets/Think.png'
import PlusImg from '../assets/+.svg'
import MinusImg from '../assets/minus.png'

const faqs = [
  {
    ques: 'Can I work on a project I started before the hackathon?',
    res: 'yes',
  },
  {
    ques: 'What happens if I need help during the hackathon?',
    res: '',
  },
  {
    ques: 'What happens if I don&apos;t have an idea for a project?',
    res: '',
  },
  {
    ques: 'Can I join a team or do I have to come with one?',
    res: '',
  },
  {
    ques: 'What happens after the hackathon ends',
    res: '',
  },
  {
    ques: 'Can I work on a project I started before the hackathon?',
    res: '',
  },
]

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqShow = {
    height: '150px',
    transition: '0.5s',
  }

  const faqHide = {
    height: '50px',
    transition: '0.5s',
  }

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className='flex items-center w-full mt-[2rem] flex-col md:flex-row border-[#FFFFFF2E] border-b'>
      <div className='md:w-1/2 w-full m-4'>
        <h4 className='text-[2rem] font-bold'>
          Frequently Ask
          <br /> <span className='text-[#D434FE]'>Question</span>
        </h4>
        <p className='text-[0.875rem] md:w-[80%] w-full'>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className='my-4'>
          {faqs.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  activeIndex === index
                    ? 'active'
                    : 'flex items-center justify-between p-2 my-2 border-b border-[#D434FE]'
                }`}
                onClick={() => toggle(index)}>
                <h3 className='text-[0.875rem]'>{item.ques}</h3>
                <div className='lg:flex transition ease-in-out delay-75 cursor-pointer'>
                  {activeIndex !== index ? (
                    <Image src={PlusImg} alt='' className='' width={16} />
                  ) : (
                    <Image src={MinusImg} alt='' />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <div className='flex items-center justify-start text-justify shadow-md p-2 rounded-sm border-b border-[#D434FE]'>
                  <p className=''>{item.res}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='w-1/2 purple'>
        <Image src={Think} alt='' />
      </div>
    </section>
  )
}

export default Faqs
