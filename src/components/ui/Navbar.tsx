"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useExperience } from '@/context/ExperienceContext';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { experience, toggleExperience, isMounted } = useExperience();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  if (!isMounted) return null; // Avoid hydration mismatch

  const isCyberpunk = experience === 'cyberpunk';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-500 border-b
        ${isCyberpunk 
          ? 'bg-[#050505]/80 border-[#00f3ff]/20' 
          : 'bg-white/80 border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-xl font-bold tracking-tighter transition-colors duration-300
                ${isCyberpunk ? 'text-glow-blue text-[#00f3ff]' : 'text-black'}`}
            >
              HJ
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span 
                      className={isActive 
                        ? (isCyberpunk ? "text-[#00f3ff] text-glow-blue" : "text-black font-semibold") 
                        : (isCyberpunk ? "text-gray-300 hover:text-[#00f3ff]" : "text-gray-500 hover:text-black")}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 
                          ${isCyberpunk ? 'bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]' : 'bg-black'}`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Desktop Experience Toggle */}
            <button
              onClick={toggleExperience}
              className={`ml-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300
                ${isCyberpunk 
                  ? 'border border-[#0f0] text-[#0f0] bg-[#003300]/30 shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:bg-[#003300]/60' 
                  : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200'}`}
              aria-label="Toggle visual experience"
            >
              {isCyberpunk ? '[ > CYBERPUNK ]' : 'MINIMAL'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleExperience}
              className={`mr-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300
                ${isCyberpunk 
                  ? 'border border-[#0f0] text-[#0f0] bg-[#003300]/30 shadow-[0_0_10px_rgba(0,255,0,0.3)]' 
                  : 'bg-gray-100 text-gray-800 border border-gray-200'}`}
              aria-label="Toggle visual experience"
            >
              {isCyberpunk ? '> CYBERPUNK' : 'MINIMAL'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors
                ${isCyberpunk ? 'text-[#0f0] hover:bg-[#003300]/50' : 'text-gray-800 hover:bg-gray-100'}`}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden ${isCyberpunk ? 'bg-[#050505]/95' : 'bg-white/95'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                      ${isActive 
                        ? (isCyberpunk ? 'text-[#00ffff] bg-[#003300]/50 border-l-2 border-[#00ffff]' : 'text-black bg-gray-100 border-l-2 border-black')
                        : (isCyberpunk ? 'text-gray-300 hover:text-[#0f0] hover:bg-gray-900' : 'text-gray-600 hover:text-black hover:bg-gray-50')}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
