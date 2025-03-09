import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Head>
        <title>Experience | Ahmet Yasin Erten</title>
        <meta name="description" content="Professional experience of Ahmet Yasin Erten - Associate DevOps Engineer" />
      </Head>

      {/* About Me Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/1697474830965.jpg" 
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <motion.div 
                className="rounded-full overflow-hidden border-4 border-white shadow-xl w-64 h-64 mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/linkedn.jpg"
                  alt="Ahmet Yasin Erten"
                  width={256}
                  height={256}
                  className="rounded-full"
                />
              </motion.div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <motion.h1 
                className="text-4xl font-bold mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="text-xl mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I am a passionate Associate DevOps Engineer with a strong background in system administration, virtualization platforms, and enterprise IT environments. My expertise spans across cloud infrastructure management, automation, and maintaining secure IT operations.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a 
                  href="/Ahmet Yasin Erten.pdf" 
                  download
                  className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-100 rounded-lg transition duration-300 font-medium inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Full Resume
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-12">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">BTS Group</h3>
                  <p className="text-lg font-medium text-blue-600">Associate DevOps Engineer</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full">Oct 2024 – Present</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Working on Sybelle SDDC Platform, assisting with DevOps missions and implementing automation solutions for cloud infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">DevOps</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Cloud Computing</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Automation</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">BTS Group</h3>
                  <p className="text-lg font-medium text-blue-600">DevOps Engineering Intern</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full">May 2024 – Sept 2024</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Worked on hands-on DevOps projects with mentorship from senior engineers, gaining practical experience in CI/CD pipelines and infrastructure management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">CI/CD</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Infrastructure</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Mentorship</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">Eczacıbaşı Esan</h3>
                  <p className="text-lg font-medium text-blue-600">Information Technology Intern</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full">Oct 2023 – April 2024</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Conducted IT audits, managed service operations, and contributed to information security initiatives across 7 mining locations, ensuring adherence to industry standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">IT Audit</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Information Security</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Service Operations</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">Istanbul Technical University IT Department</h3>
                  <p className="text-lg font-medium text-blue-600">System Administrator</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full">Feb 2024 – Sept 2024</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Responsible for Linux systems, DevOps operations, and advanced server management, ensuring the reliability and security of university IT infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Linux</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Server Management</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">DevOps</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">Istanbul Technical University IT Department</h3>
                  <p className="text-lg font-medium text-blue-600">Part-Time Network and System Engineer</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 font-medium py-1 px-3 rounded-full">June 2022 - Aug 2022</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Applied knowledge from RedHat and CCNA certification to manage databases and servers efficiently, contributing to stable network infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">RedHat</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">CCNA</span>
                <span className="bg-gray-100 text-gray-800 text-sm py-1 px-3 rounded-full">Database Management</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>

          <div className="space-y-10">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Istanbul Technical University</h3>
                  <p className="text-lg text-blue-200">BSc in Industrial Engineering</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-800 text-blue-100 font-medium py-1 px-3 rounded-full">2019 - 2025</span>
                </div>
              </div>
              <p className="text-gray-200 mb-4">
                GPA: 3.0/4.0
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Thesis:</strong> Usage Prediction and System Design on Digital Twin with Metro Istanbul
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Technical University of Kaiserslautern</h3>
                  <p className="text-lg text-blue-200">Erasmus+ Exchange</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-800 text-blue-100 font-medium py-1 px-3 rounded-full">2022 - 2023</span>
                </div>
              </div>
              <p className="text-gray-200 mb-4">
                Studied Business Informatics, completed 4 projects and 1 case study on international IT management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications and Activities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-10 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Certifications
              </motion.h2>

              <div className="space-y-6">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-blue-800">CCNA (Cisco Certified Network Associate)</h3>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-blue-800">RedHat System Administration 1 & 2</h3>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-blue-800">German A2 Language Certificate</h3>
                </motion.div>
              </div>
            </div>

            <div>
              <motion.h2 
                className="text-3xl font-bold mb-10 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Voluntary Activities
              </motion.h2>

              <div className="space-y-6">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-green-800">TEMA Foundation</h3>
                  <p className="text-gray-600 mt-2">May 2020 - Present</p>
                  <p className="text-gray-700 mt-2">
                    Contributing to reforestation efforts and natural habitat protection across Turkey.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-green-800">ESTIEM</h3>
                  <p className="text-gray-600 mt-2">Nov 2020 - June 2022</p>
                  <p className="text-gray-700 mt-2">
                    Coordinated student exchange programs and management events across European universities.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 