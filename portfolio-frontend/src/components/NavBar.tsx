'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const navClass = scrolled 
    ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3 transition-all duration-300"
    : "bg-transparent py-5 transition-all duration-300"
  
  const linkClass = scrolled
    ? "text-gray-800 hover:text-blue-600"
    : "text-white hover:text-blue-200"
  
  return (
    <nav className={`fixed w-full z-50 ${navClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className={scrolled ? "text-blue-600 font-bold text-2xl" : "text-white font-bold text-2xl"}>
            AYE
          </a>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <a className={`font-medium transition-colors duration-300 ${router.pathname === '/' ? (scrolled ? 'text-blue-600' : 'text-blue-300') : linkClass}`}>
              Home
            </a>
          </Link>
          <Link href="/experience">
            <a className={`font-medium transition-colors duration-300 ${router.pathname === '/experience' ? (scrolled ? 'text-blue-600' : 'text-blue-300') : linkClass}`}>
              Experience
            </a>
          </Link>
          <Link href="/projects">
            <a className={`font-medium transition-colors duration-300 ${router.pathname === '/projects' ? (scrolled ? 'text-blue-600' : 'text-blue-300') : linkClass}`}>
              Projects
            </a>
          </Link>
          <motion.a 
            href="/Ahmet Yasin Erten.pdf"
            download
            className={`font-medium flex items-center gap-1 transition-colors duration-300 ${scrolled ? 'text-green-600 hover:text-green-700' : 'text-green-300 hover:text-green-200'}`}
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </motion.a>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className={scrolled ? "text-gray-800 focus:outline-none" : "text-white focus:outline-none"}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute w-full bg-white shadow-md px-6 py-4 mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className={`font-medium ${router.pathname === '/' ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </Link>
            <Link href="/experience">
              <a className={`font-medium ${router.pathname === '/experience' ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </Link>
            <Link href="/projects">
              <a className={`font-medium ${router.pathname === '/projects' ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </Link>
            <a 
              href="/Ahmet Yasin Erten.pdf" 
              download
              className="font-medium text-green-600 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
} 