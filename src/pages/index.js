import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Hero, Navbar, Rules } from '@/components'
import Intro from '@/components/Intro'
import Criteria from '@/components/Criteria'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}>
        <Hero />
        <Intro />
        <Rules />
        <Criteria />
      </main>
    </>
  )
}
