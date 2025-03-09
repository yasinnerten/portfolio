import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const Projects: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  return (
    <div className="bg-gray-100">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-64 relative">
                <Image 
                  src="/1697474830965.jpg" 
                  alt="Digital Twin Project"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-2xl font-bold p-6">Usage Prediction and System Design on Digital Twin</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">Linux</span>
                  <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">System Admin</span>
                  <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">DevOps</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Responsible for advanced server configuration, system monitoring, and DevOps automation at Istanbul Technical University's IT department. Implemented monitoring solutions and streamlined deployment processes.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Istanbul Technical University</p>
                  <span className="text-sm font-medium text-blue-600">Feb 2024 - Sept 2024</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-64 relative">
                <Image 
                  src="/1697474830965.jpg" 
                  alt="Digital Twin Project"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-2xl font-bold p-6">Usage Prediction and System Design on Digital Twin</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">Digital Twin</span>
                  <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">Prediction</span>
                  <span className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full">System Design</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Thesis project with Metro Istanbul, implementing a digital twin solution for usage prediction and optimized system design. Applied data modeling techniques to improve operational efficiency.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Istanbul Technical University</p>
                  <span className="text-sm font-medium text-blue-600">2024 - 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Interested in collaborating?
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm always open to discussing new projects, opportunities, and partnerships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="/Ahmet Yasin Erten.pdf" 
              download
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download My Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects 