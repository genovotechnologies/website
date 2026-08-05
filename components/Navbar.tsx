import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Synthos', path: '/products/synthos' },
    { label: 'SCOS', path: '/products/scos' },
    { label: 'Asphallea', path: '/products/asphallea' },
    { label: 'Research', path: '/research' },
    { label: 'Company', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-[1280px] mx-auto px-6 py-5 w-full flex items-center justify-between">
      {/* Left: Official Genovo Titlebar Logo + Text */}
      <Link to="/" className="flex items-center space-x-3 group z-10">
        <img
          src="/favicon.ico"
          alt="Genovo Logo"
          className="w-7 h-7 object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
        <span className="font-heading font-bold text-xl tracking-tight text-white">
          Genovo
        </span>
      </Link>

      {/* Desktop Links (Center) */}
      <div className="hidden md:flex items-center gap-8 bg-white/[0.02] backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-lg">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Desktop Actions (Right) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/research"
          className="text-white/70 hover:text-white transition-colors text-sm font-medium px-3 py-2"
        >
          Documentation
        </Link>
        <a
          href="https://github.com/genovotechnologies"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
        >
          Access Repos
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="text-white p-2 focus:outline-none rounded-lg bg-white/5 border border-white/10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu: Framer Motion slide-in sheet from right, background #0A0A0A */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-40"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-[#0A0A0A] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-50"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pt-2">
                  <div className="flex items-center space-x-2.5">
                    <img src="/favicon.ico" alt="Genovo Logo" className="w-6 h-6 object-contain" />
                    <span className="font-heading font-bold text-lg text-white">Genovo</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white p-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <Link
                  to="/research"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-white/70 hover:text-white text-sm font-medium py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
                >
                  Documentation
                </Link>
                <a
                  href="https://github.com/genovotechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="liquid-glass text-center rounded-full py-3 text-white text-sm font-medium block"
                >
                  Access Repos
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;