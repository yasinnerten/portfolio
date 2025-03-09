import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default MyApp 