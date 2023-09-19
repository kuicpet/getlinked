import Link from 'next/link'
import { Button } from '.'

const Navbar = () => {
  return (
    <nav className='w-full p-2 border-b border-b-[rgba(255, 255, 255, 0.18);] flex items-center justify-between'>
      <div>
        <p className='font-bold text-2xl m-4'>
          <Link href={`/`}>
            get<span className='text-[#D434FE]'>linked</span>
          </Link>
        </p>
      </div>
      <div className='flex w-[60%] justify-evenly items-center'>
        <Link href={`/`}>Timeline</Link>
        <Link href={`/`}>Overview</Link>
        <Link href={`/`}>FAQs</Link>
        <Link href={`/contact`}>Contact</Link>
        <div className=''>
          <Button text='Register' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
