import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    document.title = "Platforms - Synthos, SCOS, Asphallea | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Explore Genovo's portfolio of deep-tech platforms: Synthos for dataset validation, SCOS for industrial autonomy, and Asphallea for execution policy guardrails."
    );

    return () => clearTimeout(timer);
  }, []);

  const ProductSkeleton = () => (
    <div className="seamless-card p-8 md:p-12 flex flex-col md:flex-row gap-8 mb-12 animate-pulse">
      <div className="flex-1 space-y-4">
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
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7342E2] block mb-3">
              Platform Ecosystem
            </span>
            <h1 className="font-heading text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
              ENGINEERING <br />
              INTELLIGENCE
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-md font-body">
              Our portfolio of foundational platforms building the high-precision, deterministic nervous system of modern computation.
            </p>
          </div>

          <div className="relative h-[300px] lg:h-[360px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#7342E2]/15 rounded-full blur-3xl" />
            <div className="seamless-card relative z-10 w-full h-full p-6 flex items-center justify-center overflow-hidden">
              <img
                src="https://picsum.photos/seed/chip/800/500"
                className="w-full h-full object-cover rounded-[2rem] opacity-60 hover:opacity-85 transition-opacity duration-500"
                alt="Architecture"
              />
            </div>
          </div>
        </div>

        {/* System Stack Architecture Flowchart (No Icon Badges) */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#7342E2] rounded-full animate-pulse" />
            <h2 className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              SYSTEM STACK ARCHITECTURE
            </h2>
          </div>

          <div className="seamless-card p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="relative z-10 flex flex-col items-center space-y-10">
              {/* Level 1: Core Platforms */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
                <Link to="/products/synthos" className="seamless-card p-6 w-full sm:w-64 flex flex-col hover:border-[#7342E2]/50 transition-all">
                  <h3 className="font-heading font-bold text-lg text-white mb-1">Synthos</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Entropic Validation Engine</p>
                </Link>

                <Link to="/products/scos" className="seamless-card p-6 w-full sm:w-64 flex flex-col hover:border-[#7342E2]/50 transition-all">
                  <h3 className="font-heading font-bold text-lg text-white mb-1">SCOS</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Industrial Systems OS</p>
                </Link>

                <Link to="/products/asphallea" className="seamless-card p-6 w-full sm:w-64 flex flex-col hover:border-[#7342E2]/50 transition-all">
                  <h3 className="font-heading font-bold text-lg text-white mb-1">Asphallea</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Execution Policy Guardrail</p>
                </Link>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-[#7342E2]" />
              </div>

              {/* Level 2: Language Layer */}
              <div className="seamless-card p-6 w-full max-w-md flex items-center justify-between border border-[#7342E2]/30 shadow-lg">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">TocinLang</h3>
                  <p className="text-xs text-white/60">Systems Programming Language</p>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-mono text-white/80">&lt;/&gt;</div>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-[#7342E2]" />
              </div>

              {/* Level 3: Infrastructure Layer */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
                <div className="seamless-card p-6 w-full sm:w-72 flex flex-col">
                  <h3 className="font-heading font-bold text-base text-white mb-1">EPOCH VCS</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Merkle DAG Version Control</p>
                </div>

                <div className="seamless-card p-6 w-full sm:w-72 flex flex-col">
                  <h3 className="font-heading font-bold text-base text-white mb-1">TosinOS</h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">32-Bit Protected Mode Kernel</p>
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