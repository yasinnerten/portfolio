import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Ahmet Yasin Erten | DevOps Engineer</title>
        <meta name="description" content="Portfolio of Ahmet Yasin Erten, Associate DevOps Engineer based in Istanbul, Turkey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Background Image */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://yasinnerten.com/static/1697474830965.jpg" 
            alt="Istanbul Skyline"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/70" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <div className="mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://yasinnerten.com/static/linkedin.jpg"
              alt="Ahmet Yasin Erten"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%'
              }}
            />
          </div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ahmet Yasin Erten
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-6 text-blue-200 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Associate DevOps Engineer
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specializing in cloud infrastructure, system administration, and DevOps automation in Istanbul, Turkey
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/experience">
              <a className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 font-medium">
                My Experience
              </a>
            </Link>
            <Link href="/projects">
              <a className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-lg transition duration-300 font-medium">
                View Projects
              </a>
            </Link>
            <a 
              href="https://yasinnerten.com/static/Ahmet_Yasin_Erten.pdf" 
              download
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-300 font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Contact Information Quick Links */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm transform transition duration-300 hover:scale-105">
              <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:yasinnerten@hotmail.com" className="text-blue-200 hover:text-white">yasinnerten@hotmail.com</a>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm transform transition duration-300 hover:scale-105">
              <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+905319184189" className="text-blue-200 hover:text-white">+90 531 918 4189</a>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm transform transition duration-300 hover:scale-105">
              <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/yasinnerten" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">linkedin.com/in/yasinnerten</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}