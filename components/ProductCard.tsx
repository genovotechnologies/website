import React from 'react';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  reversed?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, reversed }) => {
  return (
    <div
      id={product.id}
      className={`editorial-row group relative flex flex-col ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-stretch gap-10 py-12 border-b border-white/10`}
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-between text-white pr-4">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50 block mb-3">
            {product.category}
          </span>

          <h3 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 group-hover:text-[#7342E2] transition-colors">
            {product.name}
          </h3>

          <p className="text-base sm:text-lg leading-relaxed text-white/70 mb-8 max-w-xl font-body">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {product.features.map((feature, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium tracking-wide px-3.5 py-1 rounded-full bg-white/5 text-white/80"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#7342E2] transition-colors"
          >
            Explore Specifications <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Right Image Visual */}
      <div className="flex-1 relative min-h-[280px] sm:min-h-[340px] rounded-3xl overflow-hidden bg-white/5">
        <img
          src={`https://picsum.photos/seed/${product.id}_v2/900/600`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default ProductCard;