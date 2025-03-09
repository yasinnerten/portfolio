import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Ahmet Yasin Erten</title>
        <meta name="description" content="About Ahmet Yasin Erten - Associate DevOps Engineer" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-indigo-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A passionate DevOps Engineer with a focus on automation, infrastructure management, and system optimization.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">My Background</h2>
            <p className="text-gray-700 mb-6">
              I am an Associate DevOps Engineer with a background in Industrial Engineering and a passion for technology and automation. My journey in the tech industry began during my studies at Istanbul Technical University, where I worked as a System Administrator and developed a strong foundation in Linux systems and network management.
            </p>
            <p className="text-gray-700 mb-6">
              Throughout my career, I've had the opportunity to work in various IT roles, from system administration to DevOps engineering. I've gained experience with enterprise IT environments, virtualization platforms, and cloud infrastructure, allowing me to develop a well-rounded skill set.
            </p>
            <p className="text-gray-700 mb-10">
              Currently, I work at BTS Group on the Sybelle SDDC Platform, where I assist with DevOps missions and contribute to automation and virtualization enhancements. I'm passionate about optimizing workflows, implementing robust CI/CD pipelines, and ensuring system reliability and security.
            </p>

            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">BSc in Industrial Engineering</h3>
              <p className="text-gray-600 mb-2">Istanbul Technical University (2019 - 2025)</p>
              <p className="text-gray-700">
                GPA: 3.0/4.0<br />
                Thesis: Usage Prediction and System Design on Digital Twin with Metro Istanbul
              </p>
            </div>
            <div className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Erasmus+ Exchange</h3>
              <p className="text-gray-600 mb-2">Technical University of Kaiserslautern (2022 - 2023)</p>
              <p className="text-gray-700">
                Studied Business Informatics<br />
                Completed 4 projects and 1 case study
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">CCNA</h3>
                <p className="text-gray-600">Cisco Certified Network Associate</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">RedHat System Administration</h3>
                <p className="text-gray-600">Levels 1 & 2</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">German Language</h3>
                <p className="text-gray-600">A2 Certificate</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Voluntary Activities</h2>
            <div className="mb-6 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">TEMA Foundation</h3>
              <p className="text-gray-600 mb-2">May 2020 - Present</p>
              <p className="text-gray-700">
                Participated in reforestation efforts and natural habitat protection initiatives across Turkey.
              </p>
            </div>
            <div className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">ESTIEM</h3>
              <p className="text-gray-600 mb-2">Nov 2020 - June 2022</p>
              <p className="text-gray-700">
                Coordinated student exchange programs and management events across European universities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 