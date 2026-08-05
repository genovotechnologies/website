import React from 'react';
import { Product } from '../types';
import { ArrowRight, Box, Cpu, Globe, Terminal, Layers, Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  reversed?: boolean;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'synthos': return <Cpu size={26} />;
    case 'scos': return <Layers size={26} />;
    case 'asphallea': return <Shield size={26} />;
    case 'tosinlang': return <Terminal size={26} />;
    default: return <Box size={26} />;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product, reversed }) => {
  return (
    <div
      id={product.id}
      className={`seamless-card group relative overflow-hidden transition-all duration-700 flex flex-col-reverse ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } min-h-[440px]`}
    >
      {/* Content Section */}
      <div className="p-8 sm:p-10 md:p-14 flex-1 flex flex-col justify-center relative z-10 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform">
            {getIcon(product.id)}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
            {product.category}
          </span>
        </div>

        <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 group-hover:text-[#7342E2] transition-colors">
          {product.name}
        </h3>

        <p className="text-base leading-relaxed text-white/70 mb-6 max-w-lg font-body">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {product.features.map((feature, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium tracking-wide px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm bg-white text-black hover:bg-white/90 transition-all duration-300 transform group-hover:translate-x-1 shadow-lg"
          >
            Explore Platform <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Visual Ambient Section */}
      <div className="relative h-64 sm:h-80 md:h-auto md:flex-1 overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent z-10 pointer-events-none" />
        <img
          src={`https://picsum.photos/seed/${product.id}_v2/900/900`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        <div className="absolute bottom-6 right-6 bg-[#050505]/70 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-lg z-20 hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-[11px] font-medium text-white/80 uppercase tracking-wider">System Active</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;