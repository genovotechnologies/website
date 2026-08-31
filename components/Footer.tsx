import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-10 pt-16 pb-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        {/* Left Side */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center space-x-2 text-[12px] text-white/50 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Genovo Technologies // Lagos, Nigeria</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/40">
            <span>© {new Date().getFullYear()} Genovo Technologies. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/clickup" className="hover:text-white/80 transition-colors">
              ClickUp Hub
            </Link>
          </div>
        </div>

        {/* Right Side: Three liquid-glass tag pills */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide">
            Low-level Systems
          </span>
          <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide">
            Machine Learning
          </span>
          <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/70 font-medium tracking-wide">
            Cybersecurity
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;