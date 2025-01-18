import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-slate-900 w-full py-4 px-4 md:px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl md:text-3xl font-bold relative group flex items-center">
            <div className="mr-2 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-slate-900 font-black text-lg">X</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-green-500 group-hover:text-green-400 transition-colors duration-300">&lt;</span>
                <span className="text-white font-extrabold tracking-wider">Pass</span>
                <span className="text-green-500 group-hover:text-green-400 transition-colors duration-300">-</span>
                <span className="text-green-500 font-extrabold">X</span>
                <span className="text-green-500 group-hover:text-green-400 transition-colors duration-300">/&gt;</span>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 group 
              hover:scale-110 active:scale-95 hover:rotate-12
              relative overflow-hidden shadow-lg hover:shadow-green-700/50
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-600/20 before:to-transparent 
              before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500"
            aria-label="Toggle theme"
          >
            <div className="relative w-6 h-6">
              {/* Sun Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 text-yellow-400 transition-all duration-500 absolute
                  transform group-hover:scale-110 group-hover:rotate-180
                  ${isDarkMode ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              
              {/* Moon Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 text-blue-300 transition-all duration-500 absolute
                  transform group-hover:scale-110 group-hover:-rotate-180
                  ${isDarkMode ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </div>
          </button>

          {/* GitHub Button */}
          <a
            href="https://github.com/developerAbhi02"
            className="hidden sm:flex items-center px-4 py-2 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white rounded-lg transition-all duration-300 group shadow-lg hover:shadow-green-700/50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
            </svg>
            <span className="ml-2 font-medium group-hover:tracking-wider transition-all duration-300">GitHub</span>
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 group"
          >
            <div className="space-y-1.5 p-1">
              <span className={`block w-6 h-0.5 bg-green-500 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-green-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-green-500 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Dropdown Menu */}
      <div className={`absolute top-full right-0 w-56 mt-2 mr-6 bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-slate-700/50 transform transition-all duration-300 origin-top-right ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="py-2 px-1">
          <Link to="/" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">🏠</span>
            <span>Home</span>
          </Link>
          <Link to="/blog" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">📝</span>
            <span>Blog</span>
          </Link>
          <Link to="/documentation" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">📚</span>
            <span>Documentation</span>
          </Link>
          <Link to="/faq" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">❓</span>
            <span>FAQ</span>
          </Link>
          <Link to="/about" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">ℹ️</span>
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">📧</span>
            <span>Contact</span>
          </Link>
          <Link to="/services" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">⚙️</span>
            <span>Services</span>
          </Link>
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">📊</span>
            <span>Dashboard</span>
          </Link>
          <div className="h-px bg-slate-700/50 my-2"></div>
          <Link to="/settings" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">⚙️</span>
            <span>Settings</span>
          </Link>
          <Link to="/help" className="flex items-center px-4 py-2 text-white hover:bg-green-500/10 hover:text-green-400 rounded-lg transition-colors duration-200">
            <span className="mr-3">❓</span>
            <span>Help & Support</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
