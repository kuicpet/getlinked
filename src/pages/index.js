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
  const events = [
    {
      step: 1,
      date: 'November 18, 2023',
      title: 'Hackathon Announcement',
      description:
        'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
    },
    {
      step: 2,
      date: 'November 18, 2023',
      title: 'Teams Registration begins',
      description:
        'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    },
    {
      step: 3,
      date: 'November 18, 2023',
      title: 'Teams Registration ends',
      description: 'Interested Participants are no longer Allowed toregister',
    },
    {
      step: 4,
      date: 'November 18, 2023',
      title: 'Announcement of the accepted teams and ideas',
      description:
        'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    },
    {
      step: 5,
      date: 'November 18, 2023',
      title: 'Getlinked Hackathon 1.0 Offically Begins',
      description:
        'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    },
    {
      step: 6,
      date: 'November 18, 2023',
      title: 'Demo Day',
      description:
        'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on his day',
    },
  ]
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}>
        <Hero />
        <Intro />
        <Rules />
        <Criteria />
        <Faqs />
        <Timeline events={events} />
        <Prizes />
        <Partners />
        <PrivacyPolicy />
      </main>
    </>
  )
}
