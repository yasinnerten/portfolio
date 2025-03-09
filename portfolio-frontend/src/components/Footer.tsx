export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ahmet Yasin Erten</h3>
            <p className="text-gray-400 mb-6">Associate DevOps Engineer based in Istanbul, specialized in cloud infrastructure and system administration.</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/yasinnerten" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm12.5 12.3h-3v-5.6c0-3.4-4-3.1-4 0v5.6h-3v-11h3v1.7c1.4-2.6 7-2.8 7 2.5v6.8z" />
                </svg>
              </a>
              <a href="mailto:yasinnerten@hotmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a href="tel:+905319184189" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.5 2.5c-2.8-1.5-5.2-3.8-6.7-6.7l2.5-2.5c.3-.3.4-.7.2-1-.3-1.2-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Istanbul, Turkey</p>
            <p className="text-gray-400 mb-2">+90 531 918 4189</p>
            <p className="text-gray-400 mb-4">yasinnerten@hotmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Ahmet Yasin Erten. All Rights Reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS and Go</p>
        </div>
      </div>
    </footer>
  )
} 