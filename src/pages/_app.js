import '@/styles/globals.css'
import { Footer, Navbar } from '@/components'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
