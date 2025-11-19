import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CornerUpLeft, Grid } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "The requested page does not exist. Return to Genovo Technologies home or explore our platforms.");
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-3/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[80px]"></div>
        <img src="https://picsum.photos/seed/scifi_space/1920/1080" className="w-full h-full object-cover opacity-10 mix-blend-screen" alt="Data Stream" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
            <div className="inline-block px-3 py-1 rounded-full border border-red-500/30 bg-red-900/10 text-red-400 text-xs font-bold tracking-widest mb-6">
                SYSTEM ERROR: 404
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter leading-[0.9]">
              LOST IN THE <br/>
              <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">DATASTREAM</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-md mb-12 border-l-2 border-blue-500/50 pl-6 leading-relaxed font-light">
              It seems the requested page has drifted from our systems. 
              The vector you are looking for does not exist in this dimension.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="px-8 py-4 border border-white/20 rounded-2xl text-sm font-bold hover:bg-white hover:text-black transition flex items-center justify-center">
                   <Grid size={18} className="mr-2" /> EXPLORE PLATFORMS
                </Link>
                <Link to="/" className="px-8 py-4 bg-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-500 transition flex items-center justify-center shadow-lg shadow-blue-900/20">
                   <CornerUpLeft size={18} className="mr-2" /> RETURN HOME
                </Link>
            </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
            {/* Abstract 404 Graphic */}
            <div className="relative w-[500px] h-[500px]">
               <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-24 border border-purple-500/10 rounded-full animate-[spin_25s_linear_infinite]"></div>
               
               {/* Center Content */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center backdrop-blur-sm p-10 rounded-full border border-white/5">
                      <span className="block font-mono text-6xl font-bold tracking-widest text-white/80">404</span>
                      <span className="text-xs text-gray-500 uppercase tracking-[0.3em] mt-2 block">Signal Lost</span>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;