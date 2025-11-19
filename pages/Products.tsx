import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Cpu, Globe, Layers, Terminal, Box, Database, ArrowDown } from 'lucide-react';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    // SEO
    document.title = "Our Platforms - SynthOS, Taskr, SCOS | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Explore Genovo's portfolio of deep-tech platforms: SynthOS for AI validation, Taskr for global talent matching, SCOS for industrial autonomy, and more.");

    return () => clearTimeout(timer);
  }, []);

  const ProductSkeleton = () => (
    <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col-reverse md:flex-row bg-white border border-gray-200 shadow-sm mb-16">
       {/* Content Section Skeleton */}
       <div className="p-8 sm:p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10 w-full animate-pulse">
           <div className="mb-8 bg-gray-200 w-16 h-16 rounded-2xl"></div>
           <div className="h-12 bg-gray-200 rounded-xl w-3/4 mb-4"></div>
           <div className="h-5 bg-gray-200 rounded-full w-1/3 mb-8"></div>
           
           <div className="space-y-4 mb-12">
               <div className="h-4 bg-gray-200 rounded-full w-full"></div>
               <div className="h-4 bg-gray-200 rounded-full w-11/12"></div>
               <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
           </div>
           
           <div className="flex gap-3 mb-12">
               <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
               <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
               <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
           </div>
           
           <div className="mt-auto h-14 w-48 bg-gray-200 rounded-full"></div>
       </div>
       {/* Image Section Skeleton */}
       <div className="h-64 sm:h-80 md:h-auto md:flex-1 bg-gray-100 animate-pulse">
           <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200/50"></div>
       </div>
    </div>
  );

  return (
    <div className="bg-[#F5F5F5] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-none">
              ENGINEERING <br/>
              INTELLIGENCE
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Our Comprehensive Portfolio of Foundational Platforms. 
              Building the nervous system of the digital future.
            </p>
          </div>
          <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
              {/* Abstract 3D-like graphic placeholder or small chart */}
              <div className="absolute inset-0 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>
              <img src="https://picsum.photos/seed/chip/600/400" className="relative z-10 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" alt="Chip Architecture" />
          </div>
        </div>

        {/* Core Mission Flowchart */}
        <div className="mb-32">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 bg-[#1A1A1A] rounded-full"></div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">CORE MISSION: FOUNDATIONAL RAILS</h2>
            </div>

            <div className="relative bg-white rounded-[3rem] p-6 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
                
                {/* Flowchart Container */}
                <div className="relative z-10 flex flex-col items-center space-y-12 md:space-y-16">
                    
                    {/* Level 1: Applications */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 w-full">
                        <div className="bg-[#1A1A1A] text-white p-6 rounded-3xl w-full sm:w-64 flex items-center gap-4 shadow-lg hover:-translate-y-1 transition-transform">
                            <div className="bg-white/20 p-3 rounded-xl flex-shrink-0"><Cpu size={24} /></div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm sm:text-base truncate">SynthOS</h3>
                                <p className="text-[10px] opacity-60 uppercase tracking-wider">AI Validation</p>
                            </div>
                        </div>
                        <div className="bg-orange-500 text-white p-6 rounded-3xl w-full sm:w-64 flex items-center gap-4 shadow-lg hover:-translate-y-1 transition-transform">
                            <div className="bg-white/20 p-3 rounded-xl flex-shrink-0"><Globe size={24} /></div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm sm:text-base truncate">Taskr</h3>
                                <p className="text-[10px] opacity-80 uppercase tracking-wider">Global Talent</p>
                            </div>
                        </div>
                        <div className="bg-emerald-500 text-white p-6 rounded-3xl w-full sm:w-64 flex items-center gap-4 shadow-lg hover:-translate-y-1 transition-transform">
                            <div className="bg-white/20 p-3 rounded-xl flex-shrink-0"><Layers size={24} /></div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm sm:text-base truncate">SCOS</h3>
                                <p className="text-[10px] opacity-80 uppercase tracking-wider">Industrial OS</p>
                            </div>
                        </div>
                    </div>

                    {/* Connector 1 */}
                    <div className="flex flex-col items-center">
                         <div className="w-px h-8 bg-gray-300"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>

                    {/* Level 2: Language */}
                    <div className="bg-purple-600 text-white p-8 rounded-[2rem] w-full max-w-md flex flex-col sm:flex-row items-center justify-between shadow-xl hover:scale-105 transition-transform cursor-pointer gap-4 sm:gap-0">
                         <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                             <div className="bg-white/20 p-4 rounded-2xl"><Terminal size={32} /></div>
                             <div>
                                <h3 className="text-2xl font-bold">TosinLang</h3>
                                <p className="text-sm opacity-80">Systems Programming Language</p>
                             </div>
                         </div>
                         <div className="bg-white/10 px-3 py-1 rounded text-xs font-mono mt-2 sm:mt-0">&lt;/&gt;</div>
                    </div>

                     {/* Connector 2 */}
                    <div className="flex flex-col items-center">
                         <div className="w-px h-8 bg-gray-300"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>

                    {/* Level 3: Infrastructure */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 w-full">
                        <div className="bg-gray-800 text-white p-6 rounded-3xl w-full sm:w-72 flex items-center gap-4 shadow-lg">
                            <div className="bg-white/10 p-3 rounded-xl flex-shrink-0"><Database size={24} /></div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm sm:text-base truncate">EPOCH VCS</h3>
                                <p className="text-[10px] opacity-60 uppercase tracking-wider">Distributed Storage</p>
                            </div>
                        </div>
                         <div className="bg-cyan-600 text-white p-6 rounded-3xl w-full sm:w-72 flex items-center gap-4 shadow-lg">
                            <div className="bg-white/10 p-3 rounded-xl flex-shrink-0"><Box size={24} /></div>
                            <div className="min-w-0">
                                <h3 className="font-bold text-sm sm:text-base truncate">NavierFlow</h3>
                                <p className="text-[10px] opacity-80 uppercase tracking-wider">CFD Engine</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* Detailed Product Cards */}
        <div className="space-y-16 md:space-y-24" id="all-products">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1A1A]">PLATFORM DETAILS</h2>
                <ArrowDown className="mx-auto mt-4 animate-bounce text-gray-400" />
            </div>
            {loading ? (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            ) : (
              PRODUCTS.map((product, index) => (
                <div key={product.id}>
                   <ProductCard product={product} reversed={index % 2 === 1} />
                </div>
              ))
            )}
        </div>

      </div>
    </div>
  );
};

export default Products;