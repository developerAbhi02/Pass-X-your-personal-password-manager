import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white/50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-md border-t border-gray-200 dark:border-slate-800 transition-all duration-300">
      {/* Newsletter Section */}
      <div className="w-full bg-green-50 dark:bg-slate-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Stay Updated with Pass-X</h2>
            <p className="text-slate-600 dark:text-slate-400">Join our newsletter for security tips, updates, and exclusive offers!</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 transform group-hover:rotate-12 transition-all duration-300">
                <span className="text-white font-black text-xl">X</span>
              </div>
              <div>
                <div className="flex items-center text-2xl font-bold">
                  <span className="text-green-600 dark:text-green-500">&lt;</span>
                  <span className="text-slate-700 dark:text-white">Pass</span>
                  <span className="text-slate-500">-</span>
                  <span className="text-green-600 dark:text-green-500">X</span>
                  <span className="text-green-600 dark:text-green-500">/&gt;</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Secure your digital life
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Your trusted password manager. Keep all your credentials safe and secure with military-grade encryption.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/privacy-policy" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/blog" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Blog
              </Link>
              <Link to="/documentation" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Documentation
              </Link>
              <Link to="/faq" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                FAQ
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Resources</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="#" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Security Tips
              </Link>
              <Link to="#" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Password Generator
              </Link>
              <Link to="#" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Help Center
              </Link>
              <Link to="#" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Community
              </Link>
              <Link to="#" className="text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-500 transition-colors duration-300">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/developerAbhi02" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group">
                <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
              </a>
              <a href="mailto:contact@pass-x.com" className="group">
                <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white mb-2">Contact Info</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Email: contact@pass-x.com</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Phone: +1 (234) 567-8900</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {new Date().getFullYear()} Pass-X. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600 dark:text-slate-400">Made with</span>
              <span className="text-red-500 animate-pulse">❤</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">by Pass-X Team</span>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
            "Securing your digital world, one password at a time. Join thousands of users who trust Pass-X for their password management needs."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
