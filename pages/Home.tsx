import React, { useEffect } from 'react';
import { PlayCircle, ArrowRight, FileText, Hexagon } from 'lucide-react';
import { PRODUCTS, ARTICLES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Genovo Technologies | Engineering the Future of Intelligence";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Genovo Technologies is a systems-first, AI-native company building foundational software rails, including SynthOS, Taskr, and SCOS, for the next era of computation.");
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 pt-10 lg:pt-0">
            <div className="inline-flex items-center space-x-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Systems First</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1A1A1A] leading-[0.9] tracking-tighter mb-8">
              ENGINEERING <br/> INSIGHTS
            </h1>
            <p className="text-xl text-gray-600 font-light mb-10 max-w-lg leading-relaxed">
              The Future of Tech, One Post at a Time. Building foundational software rails for the next era.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] font-bold text-sm tracking-widest uppercase rounded-2xl hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 shadow-sm">
                Explore Platforms
              </Link>
            </div>
          </div>

          {/* Organic Hero Visual */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
             <div className="absolute w-full h-full bg-blue-100/50 rounded-full blur-3xl animate-pulse"></div>
             <div className="relative z-10 w-full h-full p-8">
                 <img 
                   src="https://picsum.photos/seed/genovo_art/800/800" 
                   className="w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition duration-700"
                   alt="Abstract Technology"
                 />
                 {/* Floating Decor */}
                 <div className="absolute top-12 -right-4 bg-white p-5 rounded-3xl shadow-xl animate-bounce duration-[3000ms]">
                    <Hexagon size={32} className="text-[#1A1A1A]" strokeWidth={1.5} />
                 </div>
                 <div className="absolute bottom-12 -left-8 bg-[#1A1A1A] text-white px-6 py-3 rounded-full shadow-xl">
                    <span className="text-sm font-bold tracking-wider">GENOVO 2025</span>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-10 pl-2">FEATURED ARTICLE</h2>

        <div className="w-full mb-24">
           <div className="group relative bg-[#050505] rounded-[3rem] overflow-hidden text-white min-h-[500px] flex flex-col md:flex-row shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="p-12 md:p-24 flex-1 flex flex-col justify-center z-10 relative">
                  <div className="mb-6">
                      <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">Deep Tech</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                    SynthOS: Eradicating the $5B Model Collapse Problem
                  </h3>
                  <p className="text-gray-400 mb-12 text-lg font-light">
                     By Oluwatosin Ablaye Afolabi • March 11, 2025
                  </p>
                  <Link to="/products" className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-wider w-fit hover:bg-gray-200 transition transform hover:scale-105 duration-200">
                    READ FULL POST
                  </Link>
              </div>
              <div className="absolute inset-0 md:relative md:flex-1 overflow-hidden">
                 <img 
                    src="https://picsum.photos/seed/synthos_bg/1000/1000" 
                    className="w-full h-full object-cover opacity-40 md:opacity-80 group-hover:scale-110 transition duration-1000 ease-out" 
                    alt="SynthOS Abstract" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>
           </div>
        </div>

        {/* Latest Articles - Organic Blob Grid */}
        <div className="mb-12 pl-2">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">LATEST ARTICLES</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <div 
                key={idx} 
                className={`p-10 rounded-[2.5rem] min-h-[240px] flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-xl cursor-pointer group ${article.color} ${article.textColor}`}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/30 rounded-2xl backdrop-blur-sm">
                        <article.icon size={24} className="opacity-90" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 p-2 rounded-full">
                        <ArrowRight size={16} />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold leading-tight mb-3">{article.title}</h3>
                    <p className="text-xs opacity-70 font-bold uppercase tracking-wide">{article.date}</p>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Topics - Soft Pills */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
                <span className="font-bold text-lg text-[#1A1A1A]">EXPLORE TOPICS</span>
            </div>
            <div className="flex flex-wrap gap-3">
                {['All', 'AI/ML', 'Product', 'Company News', 'Engineering', 'Research'].map((topic, idx) => (
                    <button key={idx} className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${idx === 0 ? 'bg-[#1A1A1A] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                        {topic}
                    </button>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;