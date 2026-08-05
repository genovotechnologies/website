import React from 'react';
import { Product } from '../types';
import { ArrowRight, Box, Cpu, Globe, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  reversed?: boolean;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'synthos': return <Cpu size={28} />;
    case 'taskr': return <Globe size={28} />;
    case 'scos': return <Layers size={28} />;
    case 'tosinlang': return <Terminal size={28} />;
    default: return <Box size={28} />;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product, reversed }) => {
  return (
    <div
      id={product.id}
      className={`liquid-glass group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col-reverse ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } border border-white/10 hover:border-white/20 min-h-[460px]`}
    >
      {/* Content Section */}
      <div className="p-8 sm:p-10 md:p-12 flex-1 flex flex-col justify-center relative z-10 text-white">
        <div className="mb-6 bg-white/10 w-fit p-3.5 rounded-2xl backdrop-blur-md border border-white/10 text-white group-hover:scale-110 transition-transform">
          {getIcon(product.id)}
        </div>

        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">{product.name}</h3>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">
            {product.category}
          </span>
        </div>

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
          {product.id === 'synthos' ? (
            <a
              href="https://synthos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-black hover:bg-white/90 transition-all duration-300 transform group-hover:translate-x-1"
            >
              Explore Platform <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white text-black hover:bg-white/90 transition-all duration-300 transform group-hover:translate-x-1"
            >
              Explore Platform <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Visual Image Overlay Section */}
      <div className="relative h-64 sm:h-80 md:h-auto md:flex-1 overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src={`https://picsum.photos/seed/${product.id}_v2/900/900`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        <div className="absolute bottom-6 right-6 bg-[#050505]/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-lg z-20 hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[11px] font-medium text-white/80 uppercase tracking-wider">Operational</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;