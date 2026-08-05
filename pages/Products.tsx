import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Cpu, Globe, Layers, Terminal, Box, Database, ArrowDown } from 'lucide-react';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    document.title = "Our Platforms - SynthOS, Taskr, SCOS | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Explore Genovo's portfolio of deep-tech platforms: SynthOS for AI validation, Taskr for global talent matching, SCOS for industrial autonomy, and more."
    );

    return () => clearTimeout(timer);
  }, []);

  const ProductSkeleton = () => (
    <div className="liquid-glass rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 mb-12 animate-pulse">
      <div className="flex-1 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-white/10" />
        <div className="h-8 bg-white/10 rounded-lg w-1/2" />
        <div className="h-4 bg-white/10 rounded w-1/4" />
        <div className="h-16 bg-white/10 rounded-lg w-full" />
        <div className="h-10 bg-white/10 rounded-full w-40" />
      </div>
      <div className="h-64 md:h-auto md:flex-1 bg-white/5 rounded-2xl" />
    </div>
  );

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Hero Header */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#7342E2] uppercase block mb-3">
              Platform Ecosystem
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
              ENGINEERING <br />
              INTELLIGENCE
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-md font-body">
              Our portfolio of foundational platforms building the high-precision nervous system of modern computation.
            </p>
          </div>

          <div className="relative h-[300px] lg:h-[360px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#7342E2]/20 rounded-full blur-3xl" />
            <div className="liquid-glass relative z-10 w-full h-full rounded-[2.5rem] p-6 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="https://picsum.photos/seed/chip/800/500"
                className="w-full h-full object-cover rounded-[2rem] opacity-70 hover:opacity-90 transition-opacity duration-500"
                alt="Architecture"
              />
            </div>
          </div>
        </div>

        {/* Core Mission Flowchart */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#7342E2] rounded-full animate-pulse" />
            <h2 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              SYSTEM STACK ARCHITECTURE
            </h2>
          </div>

          <div className="liquid-glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative z-10 flex flex-col items-center space-y-10 md:space-y-12">
              {/* Level 1 */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
                <div className="liquid-glass p-6 rounded-2xl w-full sm:w-64 flex items-center gap-4 border border-white/10 hover:border-white/30 transition-all">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">SynthOS</h3>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">AI Validation</p>
                  </div>
                </div>

                <div className="liquid-glass p-6 rounded-2xl w-full sm:w-64 flex items-center gap-4 border border-white/10 hover:border-white/30 transition-all">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">Taskr</h3>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Global Talent</p>
                  </div>
                </div>

                <div className="liquid-glass p-6 rounded-2xl w-full sm:w-64 flex items-center gap-4 border border-white/10 hover:border-white/30 transition-all">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">SCOS</h3>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Industrial OS</p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-[#7342E2]" />
              </div>

              {/* Level 2 */}
              <div className="liquid-glass p-6 rounded-2xl w-full max-w-md flex items-center justify-between border border-[#7342E2]/40 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7342E2]/30 p-3 rounded-xl text-white">
                    <Terminal size={28} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">TosinLang</h3>
                    <p className="text-xs text-white/60">Systems Programming Language</p>
                  </div>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-mono text-white/80">&lt;/&gt;</div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-[#7342E2]" />
              </div>

              {/* Level 3 */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
                <div className="liquid-glass p-6 rounded-2xl w-full sm:w-72 flex items-center gap-4 border border-white/10">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Database size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">EPOCH VCS</h3>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Distributed Storage</p>
                  </div>
                </div>

                <div className="liquid-glass p-6 rounded-2xl w-full sm:w-72 flex items-center gap-4 border border-white/10">
                  <div className="bg-white/10 p-3 rounded-xl text-white">
                    <Box size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">NavierFlow</h3>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">CFD Engine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Product Cards */}
        <div className="space-y-16 md:space-y-20" id="all-products">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">PLATFORM SPECIFICATIONS</h2>
            <ArrowDown className="mx-auto mt-4 animate-bounce text-white/40" />
          </div>

          {loading ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} reversed={index % 2 === 1} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;