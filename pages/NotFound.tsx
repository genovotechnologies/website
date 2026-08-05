import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CornerUpLeft, Grid } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "The requested page does not exist. Return to Genovo Technologies home or explore our platforms."
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden flex items-center justify-center pt-20">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <div className="inline-block px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold tracking-widest mb-6">
            SYSTEM ERROR: 404
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4 tracking-tighter leading-[0.9] text-white">
            LOST IN THE <br />
            <span className="text-[#7342E2]">DATASTREAM</span>
          </h1>

          <p className="text-white/70 text-lg max-w-md mb-10 border-l-2 border-[#7342E2] pl-6 leading-relaxed font-body">
            It seems the requested page has drifted from our systems. The vector you are looking for does not exist in this dimension.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="liquid-glass px-8 py-4 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <Grid size={18} /> EXPLORE PLATFORMS
            </Link>
            <Link
              to="/"
              className="px-8 py-4 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition flex items-center justify-center gap-2 shadow-xl"
            >
              <CornerUpLeft size={18} /> RETURN HOME
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <div className="liquid-glass relative w-[400px] h-[400px] rounded-full flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="text-center p-8">
              <span className="block font-heading text-6xl font-bold tracking-widest text-white/90">404</span>
              <span className="text-xs text-white/50 uppercase tracking-[0.3em] mt-2 block">
                Signal Lost
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;