import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft, Check, Activity, ArrowUpRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <Link
          to="/products"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Platforms
        </Link>

        <div className="inline-block border border-white/20 px-3.5 py-1 rounded-full bg-white/5 backdrop-blur-md mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
            {product.category}
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-none">
          {product.name}
        </h1>

        <p className="text-xl text-white/70 max-w-3xl font-body leading-relaxed mb-8">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {product.id === 'synthos' && (
            <a
              href="https://synthos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl"
            >
              Explore SynthOS Platform <ArrowUpRight size={16} />
            </a>
          )}
          <Link
            to="/contact"
            className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Schedule Demo
          </Link>
          <Link
            to="/rad"
            className="liquid-glass rounded-full px-8 py-4 text-white/80 text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Technical Documentation
          </Link>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-12">
            <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-10 border border-white/10">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#7342E2] uppercase mb-6">
                SYSTEM OVERVIEW
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed">
                {product.longDescription || product.description}
              </p>
            </div>

            <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-10 border border-white/10">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#7342E2] uppercase mb-6">
                CORE CAPABILITIES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="text-emerald-400" size={20} />
                <h3 className="font-heading font-bold text-xl text-white">Technical Specifications</h3>
              </div>

              <div className="space-y-4">
                {product.specs ? (
                  product.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-white/50">{spec.label}</span>
                      <span className="font-mono text-xs font-bold text-white">{spec.value}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-white/50 text-xs italic">
                    Detailed specifications available upon request.
                  </p>
                )}
              </div>
            </div>

            <div className="liquid-glass rounded-[2.5rem] p-4 border border-white/10 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${product.id}_detail/600/400`}
                alt="System Detail"
                className="w-full h-48 object-cover rounded-2xl opacity-70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="liquid-glass rounded-[2.5rem] p-10 md:p-16 border border-white/10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to deploy {product.name}?
          </h2>
          <p className="text-white/70 font-body text-base max-w-lg mx-auto mb-8">
            Our integration engineers are ready to help you architect your solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl"
            >
              CONTACT SALES
            </Link>
            <Link
              to="/products"
              className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-semibold hover:bg-white/10 transition-all"
            >
              VIEW ALL PLATFORMS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;