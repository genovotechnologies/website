import React from 'react';
import { Product } from '../types';
import { ArrowRight, Box, Cpu, Globe, Terminal, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  reversed?: boolean;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'synthos': return <Cpu size={32} />;
    case 'taskr': return <Globe size={32} />;
    case 'scos': return <Layers size={32} />;
    case 'tosinlang': return <Terminal size={32} />;
    default: return <Box size={32} />;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product, reversed }) => {
  return (
    <div className={`group relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 flex flex-col-reverse ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} ${product.color} hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-transparent hover:border-white/20 min-h-[auto] md:min-h-[600px]`}>
      {/* Content Section */}
      <div className={`p-8 sm:p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10 ${product.textColor} transition-transform duration-700 group-hover:-translate-y-1`}>
        <div className="mb-6 md:mb-8 bg-white/20 w-fit p-3 md:p-4 rounded-2xl backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform duration-500">
            {getIcon(product.id)}
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{product.name}</h3>
        <p className="text-xs font-bold opacity-60 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-current"></span>
           {product.category}
        </p>
        <p className="text-base md:text-lg leading-relaxed opacity-90 mb-8 md:mb-10 font-medium max-w-md">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
            {product.features.map((feature, idx) => (
                <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                    {feature}
                </span>
            ))}
        </div>

        <div className="mt-auto">
             <Link to={`/products/${product.id}`} className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm shadow-lg transition-all duration-300 transform translate-y-0 group-hover:translate-y-[-4px] group-hover:shadow-xl bg-white text-black hover:bg-[#1A1A1A] hover:text-white">
                Explore Platform <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
      </div>
      
      {/* Abstract Visual Section with Parallax-like Effect */}
      <div className="relative h-64 sm:h-80 md:h-auto md:flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10 mix-blend-multiply pointer-events-none" />
        <img 
          src={`https://picsum.photos/seed/${product.id}_v2/900/900`} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
        />
        
        {/* Floating overlay UI element for depth */}
        <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 hidden md:block">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">System Active</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;