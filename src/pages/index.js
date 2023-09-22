import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  Faqs,
  Hero,
  Partners,
  PrivacyPolicy,
  Prizes,
  Rules,
  Timeline,
} from '@/components'
import Intro from '@/components/Intro'
import Criteria from '@/components/Criteria'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}>
        <Hero />
        <Intro />
        <Rules />
        <Criteria />
        <Faqs />
        <Timeline />
        <Prizes />
        <Partners />
        <PrivacyPolicy />
      </main>
    </>
  )
}
