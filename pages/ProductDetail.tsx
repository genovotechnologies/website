import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft, Check, Terminal, Cpu, Zap, Shield, Activity } from 'lucide-react';
import NotFound from './NotFound';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
        document.title = `${product.name} - ${product.category} | Genovo Technologies`;
        document.querySelector('meta[name="description"]')?.setAttribute('content', product.description);
    } else {
        document.title = "Product Not Found | Genovo Technologies";
    }
  }, [id, product]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 rounded-b-[3rem] overflow-hidden ${product.color}`}>
        {/* Background Abstract */}
        <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Platforms
            </Link>
            <div className="inline-block border border-black/10 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-6">
                 <span className="text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-6 ${product.textColor || 'text-[#1A1A1A]'}`}>
              {product.name}
            </h1>
            <p className={`text-xl md:text-2xl font-light max-w-3xl leading-relaxed opacity-90 ${product.textColor || 'text-[#1A1A1A]'}`}>
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
             <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
                 Schedule Demo
             </button>
             <button className="bg-white text-[#1A1A1A] px-8 py-4 rounded-2xl font-bold text-sm shadow-lg hover:scale-105 transition-transform">
                 Technical Documentation
             </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             
             {/* Left Column: Detailed Info */}
             <div className="lg:col-span-7 space-y-16">
                 <div>
                     <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">SYSTEM OVERVIEW</h2>
                     <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                         {product.longDescription || product.description}
                     </p>
                 </div>

                 <div>
                     <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8">CORE CAPABILITIES</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {product.features.map((feature, idx) => (
                             <div key={idx} className="flex items-start p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors">
                                 <div className="bg-[#1A1A1A] text-white p-1 rounded-full mt-0.5 mr-3">
                                     <Check size={12} />
                                 </div>
                                 <span className="font-medium text-gray-800">{feature}</span>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>

             {/* Right Column: Specs & Visuals */}
             <div className="lg:col-span-5 space-y-8">
                 <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
                     <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-8">
                             <Activity className="text-green-400" />
                             <h3 className="font-bold text-lg">Technical Specifications</h3>
                         </div>
                         
                         <div className="space-y-6">
                             {product.specs ? (
                                 product.specs.map((spec, idx) => (
                                     <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                         <span className="text-sm text-gray-400">{spec.label}</span>
                                         <span className="font-mono text-sm font-bold text-white text-right">{spec.value}</span>
                                     </div>
                                 ))
                             ) : (
                                 <p className="text-gray-400 italic">Detailed specifications available upon request.</p>
                             )}
                         </div>
                     </div>
                 </div>

                 <div className="relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-lg group">
                     <img 
                        src={`https://picsum.photos/seed/${product.id}_detail/600/600`} 
                        alt="System Detail" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                     <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl">
                         <span className="text-xs font-bold uppercase tracking-wider text-black">System Architecture v2.1</span>
                     </div>
                 </div>
             </div>

         </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Ready to deploy {product.name}?</h2>
              <p className="text-gray-600 mb-10">
                  Our integration engineers are ready to help you architect your solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/contact" className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
                     CONTACT SALES
                 </Link>
                 <Link to="/products" className="bg-white text-[#1A1A1A] border border-gray-200 px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                     VIEW ALL PLATFORMS
                 </Link>
              </div>
          </div>
      </div>

    </div>
  );
};

export default ProductDetail;