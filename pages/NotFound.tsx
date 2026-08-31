import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Terminal, 
  Search, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Layers, 
  FileText, 
  Compass, 
  Sparkles,
  RefreshCcw,
  CheckCircle2
} from 'lucide-react';

const SYSTEM_ROUTES = [
  { label: 'Synthos Engine', path: '/products/synthos', category: 'Validation Engine', icon: Database, desc: 'Entropic streaming dataset validation platform' },
  { label: 'SCOS Operating System', path: '/products/scos', category: 'Deterministic Kernel', icon: Cpu, desc: 'High-precision microkernel hypervisor' },
  { label: 'Asphallea Security', path: '/products/asphallea', category: 'Zero-Trust Guardrails', icon: ShieldCheck, desc: 'Deterministic AST runtime policy enforcement' },
  { label: 'Research & Publications', path: '/research', category: 'Whitepapers', icon: FileText, desc: 'Academic papers on distributed microkernels and validation' },
  { label: 'Innovation Labs (R&D)', path: '/rad', category: 'Deep R&D', icon: Layers, desc: 'Aether IoT compute, Quantum Lattice & Silicon Soul' },
  { label: 'ClickUp Enablement', path: '/clickup', category: 'Operations Hub', icon: Sparkles, desc: 'Internal engineering onboarding and sprint cadence' },
  { label: 'Company & Team', path: '/about', category: 'Organization', icon: Compass, desc: 'Mission, engineering philosophy, and leadership' },
  { label: 'Careers & Roles', path: '/careers', category: 'Talent', icon: Sparkles, desc: 'Open engineering positions and fellowships' },
];

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    document.title = "404 - Vector Lost in Datastream | Genovo Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "The requested route does not exist in Genovo Technologies systems. Search our platforms or return to the main hub."
      );
    }
    setCurrentTime(new Date().toISOString());
  }, []);

  const filteredRoutes = SYSTEM_ROUTES.filter(route => 
    route.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.path.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden pt-28 md:pt-36 pb-24">
      {/* Background ambient decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#7342E2]/15 via-[#ff5722]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Error Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>PAGE_FAULT // VECTOR_NOT_FOUND (404)</span>
              </div>

              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95] uppercase">
                Lost in the <br />
                <span className="bg-gradient-to-r from-[#ff5722] via-[#7342E2] to-purple-400 bg-clip-text text-transparent">
                  Datastream.
                </span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl font-body max-w-xl leading-relaxed mb-8 border-l-2 border-[#7342E2] pl-5">
                The requested address <code className="text-[#ff5722] bg-white/5 px-2 py-0.5 rounded font-mono text-sm">{location.pathname || 'unmapped'}</code> does not map to any active register or execution plane.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all flex items-center gap-2 shadow-xl shadow-white/10"
                >
                  <Home size={16} /> Return to Home
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="liquid-glass px-6 py-3.5 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Previous Route
                </button>
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-all flex items-center gap-1.5"
                >
                  Explore Systems
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Diagnostic Telemetry Box (Right Column) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="liquid-glass rounded-3xl p-6 md:p-8 border border-white/10 bg-black/40 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                  <Terminal size={14} className="text-[#ff5722]" />
                  <span>CORE_DIAGNOSTICS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Code/Log Readout */}
              <div className="font-mono text-xs space-y-2 text-white/80 leading-relaxed">
                <div className="text-white/40">// Hardware &amp; Hypervisor Trace:</div>
                <div className="flex justify-between">
                  <span className="text-white/50">TIMESTAMP:</span>
                  <span className="text-white/80">{currentTime || '2026-08-31T00:00:00Z'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">FAULT_CODE:</span>
                  <span className="text-red-400 font-bold">0x00000194</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">TARGET_VECTOR:</span>
                  <span className="text-[#ff5722] truncate max-w-[200px]">{location.pathname}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">KERNEL_STATE:</span>
                  <span className="text-emerald-400">ISOLATED / SAFE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">ENTROPY_DRIFT:</span>
                  <span className="text-purple-400">100.0% UNINDEXED</span>
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] text-white/50">
                  Recommendation: Query active subsystems or initiate safe redirect to primary mesh node.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40">Genovo Hypervisor v4.2</span>
                <button
                  onClick={() => window.location.reload()}
                  className="text-xs text-white/70 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RefreshCcw size={12} /> Re-scan
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Search & Recommended Navigation */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1 uppercase">
                Active System Nodes
              </h2>
              <p className="text-sm text-white/60">
                Jump directly to verified endpoints and documentation across the Genovo ecosystem.
              </p>
            </div>

            {/* Quick Filter Search */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search subsystems (e.g. scos, synthos)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#7342E2] transition-colors"
              />
            </div>
          </div>

          {/* Grid of Verified Routes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.path}
                  to={route.path}
                  className="liquid-glass rounded-2xl p-5 border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        {route.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-[#ff5722] transition-colors mb-1">
                      {route.label}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                      {route.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-white/80 transition-colors">
                    <span>{route.path}</span>
                    <span className="text-[#ff5722]">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="text-center py-12 text-white/50 text-sm">
              No matching system node for "<span className="text-white">{searchQuery}</span>". Try searching for "products", "research", or return home.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
