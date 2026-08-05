import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import NotFound from './NotFound';

const ArchitectureDiagram: React.FC<{ type?: string }> = ({ type }) => {
  if (type === 'synthos') {
    return (
      <div className="w-full py-8 border-y border-white/10 flex flex-col items-center justify-center text-center space-y-6">
        <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Synthos Pipeline Architecture</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="floating-panel p-6 text-center">
            <div className="text-sm font-bold text-white mb-1">Ingestion Layer</div>
            <div className="text-xs text-white/50">10TB/hr Streaming</div>
          </div>
          <div className="floating-panel p-6 text-center bg-[#7342E2]/10">
            <div className="text-sm font-bold text-white mb-1">Entropic Engine</div>
            <div className="text-xs text-emerald-400">&lt;1ms Drift Analysis</div>
          </div>
          <div className="floating-panel p-6 text-center">
            <div className="text-sm font-bold text-white mb-1">Validation Mesh</div>
            <div className="text-xs text-white/50">Execution Guardrail</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'scos') {
    return (
      <div className="w-full py-8 border-y border-white/10 flex flex-col items-center justify-center text-center space-y-6">
        <div className="text-xs font-mono text-white/50 uppercase tracking-widest">SCOS Microkernel Hypervisor</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="floating-panel p-6 text-center">
            <div className="text-sm font-bold text-white mb-1">Bare-Metal Core</div>
            <div className="text-xs text-white/50">40ns Latency</div>
          </div>
          <div className="floating-panel p-6 text-center bg-amber-500/10">
            <div className="text-sm font-bold text-white mb-1">Hypervisor</div>
            <div className="text-xs text-amber-400">ASIL-D Certified</div>
          </div>
          <div className="floating-panel p-6 text-center">
            <div className="text-sm font-bold text-white mb-1">Autonomous Bus</div>
            <div className="text-xs text-white/50">50MB Footprint</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'asphallea') {
    return (
      <div className="w-full py-8 border-y border-white/10 flex flex-col items-center justify-center text-center space-y-6">
        <div className="text-xs font-mono text-white/50 uppercase tracking-widest">Asphallea Execution Policy Sandbox</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          <div className="floating-panel p-6 text-center">
            <div className="text-sm font-bold text-white mb-1">Syscall Intercept</div>
            <div className="text-xs text-white/50">&lt;5μs Overhead</div>
          </div>
          <div className="floating-panel p-6 text-center bg-emerald-500/10">
            <div className="text-sm font-bold text-white mb-1">AST Policy Engine</div>
            <div className="text-xs text-emerald-400">Zero-Trust Guard</div>
          </div>
          <div className="floating-panel p-6 text-center">
            <div className="text-sm font-bold text-white mb-1">eBPF Sandbox</div>
            <div className="text-xs text-white/50">Capability Limits</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-6 text-center text-white/50 text-xs font-mono border-y border-white/10">
      System Architecture Diagram v2.1
    </div>
  );
};

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
      <div className="max-w-[1280px] mx-auto px-6 mb-20">
        <Link
          to="/products"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Platforms
        </Link>

        <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
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
          <a
            href={product.githubUrl || "https://github.com/genovotechnologies"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl"
          >
            <Github size={18} /> View Repository on GitHub
          </a>
          <Link
            to="/contact"
            className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Schedule Integration Demo
          </Link>
          <Link
            to="/research"
            className="liquid-glass rounded-full px-8 py-4 text-white/80 text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Documentation & Assets
          </Link>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1280px] mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="text-xs font-bold tracking-[0.25em] text-[#7342E2] uppercase mb-4">
                SYSTEM OVERVIEW
              </h2>
              <p className="text-lg sm:text-xl text-white/80 font-body leading-relaxed">
                {product.longDescription || product.description}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[0.25em] text-[#7342E2] uppercase mb-6">
                ARCHITECTURE PIPELINE
              </h2>
              <ArchitectureDiagram type={product.architectureType || product.id} />
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[0.25em] text-[#7342E2] uppercase mb-6">
                CORE CAPABILITIES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Specs */}
          <div className="lg:col-span-5 space-y-10">
            <div className="floating-panel p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-6">Technical Specifications</h3>

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

            <div className="floating-panel p-8 text-center">
              <h4 className="font-heading font-bold text-lg text-white mb-2">Repository & Codebase</h4>
              <p className="text-white/60 text-xs mb-6 font-body">
                Access the source code, security audit logs, and integration documentation on GitHub.
              </p>
              <a
                href={product.githubUrl || "https://github.com/genovotechnologies"}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-6 py-2.5 text-xs text-white uppercase tracking-wider font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                <Github size={14} /> Open GitHub Repository <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="floating-panel p-10 md:p-16 text-center">
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