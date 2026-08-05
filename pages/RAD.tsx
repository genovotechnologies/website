import React, { useEffect } from 'react';
import { RESEARCH_HIGHLIGHTS } from '../constants';
import { Cpu, Shield, Network, Code2, Database, Activity, Layers, ArrowRight, Lock, FileText, GitGraph, Component, Radio, Box, Download, FileCode, BookOpen } from 'lucide-react';

const RAD: React.FC = () => {
  useEffect(() => {
    document.title = "R&D & Innovation Labs | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Discover Genovo's research in distributed systems, neuromorphic computing, and O(n log n) neural networks. Engineering the unknown from first principles."
    );
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-36 md:pt-44 pb-24">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 mb-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7342E2] block mb-3">
          Genovo Innovation Labs
        </span>
        <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight leading-none text-white mb-6">
          ENGINEERING <br /> <span className="text-[#7342E2]">THE UNKNOWN</span>
        </h1>
        <p className="text-xl text-white/70 font-body max-w-xl leading-relaxed mb-8">
          Our Innovation Engine & Deep Technical Mastery. We don't just predict the future; we compile it from first principles.
        </p>
        <a
          href="#research"
          className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-all shadow-xl"
        >
          View Publications <ArrowRight size={16} />
        </a>
      </div>

      {/* Active Labs */}
      <div className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
            ACTIVE EXPERIMENTS
          </h2>
          <div className="h-px bg-white/10 flex-1 ml-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-between min-h-[300px] hover:border-white/30 transition-all">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white/10 p-3 rounded-2xl text-white">
                  <Component size={24} />
                </div>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/10">
                  Alpha
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Project Aether</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
                Decentralized compute harvesting from idle consumer IoT devices. Turning dormant silicon into a global supercomputer.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
              <span>ID: AE-992</span>
              <ArrowRight size={16} className="text-white/60" />
            </div>
          </div>

          <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-between min-h-[300px] hover:border-white/30 transition-all">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#7342E2]/20 p-3 rounded-2xl text-[#7342E2]">
                  <GitGraph size={24} />
                </div>
                <span className="px-3 py-1 bg-[#7342E2]/20 text-[#7342E2] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#7342E2]/30">
                  Research
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Quantum Lattice</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
                Post-quantum cryptography standards for blockchain interoperability. Securing the chain against Q-Day.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
              <span>ID: QL-104</span>
              <ArrowRight size={16} className="text-[#7342E2]" />
            </div>
          </div>

          <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-between min-h-[300px] hover:border-white/30 transition-all">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-emerald-500/20 p-3 rounded-2xl text-emerald-400">
                  <Cpu size={24} />
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-500/30">
                  Simulation
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Silicon Soul</h3>
              <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
                Neuromorphic chip architecture optimizing for sparse rewards. Giving ghosts to the machine.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
              <span>ID: SS-771</span>
              <ArrowRight size={16} className="text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Publications & Architecture Grid */}
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12" id="research">
        {/* Left: Publications */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-white/10 rounded-xl text-white">
                <BookOpen size={22} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">PUBLISHED RESEARCH</h2>
            </div>

            <div className="liquid-glass rounded-[2rem] border border-white/10 overflow-hidden divide-y divide-white/10">
              {RESEARCH_HIGHLIGHTS.map((paper, idx) => (
                <div key={idx} className="p-6 hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-white/50">{paper.date}</span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                      {paper.metric}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{paper.title}</h3>
                  <p className="text-sm text-white/70 font-body leading-relaxed mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">Author: {paper.author}</span>
                    <a
                      href={paper.url}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7342E2] hover:text-white transition-colors"
                    >
                      <Download size={14} /> PDF Paper
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Competencies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-white/10 rounded-xl text-white">
                <Layers size={22} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">TECHNICAL COMPETENCIES</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="liquid-glass p-6 rounded-2xl border border-white/10">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                  <Database size={20} />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-1">Systems Engineering</h3>
                <p className="text-white/60 text-xs font-body mb-4">Memory safety and kernel-bypass networking for ultra-low latency.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white/70">Rust / C++</span>
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white/70">eBPF</span>
                </div>
              </div>

              <div className="liquid-glass p-6 rounded-2xl border border-white/10">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                  <Lock size={20} />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-1">Distributed Consensus</h3>
                <p className="text-white/60 text-xs font-body mb-4">Byzantine fault tolerance and leaderless replication protocols.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white/70">Paxos</span>
                  <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white/70">Raft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Strategic Architecture Diagram */}
        <div className="lg:col-span-5">
          <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 flex flex-col items-center justify-center text-center">
            <h2 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-8">
              STRATEGIC ARCHITECTURE
            </h2>

            <div className="space-y-6 w-full max-w-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="liquid-glass p-4 rounded-2xl border border-white/10">
                  <Activity size={20} className="mx-auto mb-1 text-purple-400" />
                  <span className="text-[10px] font-bold text-white/80">NEURAL</span>
                </div>
                <div className="liquid-glass p-4 rounded-2xl border border-white/10">
                  <Code2 size={20} className="mx-auto mb-1 text-blue-400" />
                  <span className="text-[10px] font-bold text-white/80">LOGIC</span>
                </div>
              </div>

              <div className="w-px h-6 bg-white/20 mx-auto" />

              <div className="liquid-glass p-6 rounded-2xl border border-[#7342E2]/40 shadow-xl">
                <Layers size={28} className="mx-auto mb-2 text-[#7342E2]" />
                <h3 className="font-heading font-bold text-lg text-white">GENOVO CORE</h3>
                <p className="text-[10px] text-white/50 uppercase tracking-widest">The Metal Layer</p>
              </div>

              <div className="w-px h-6 bg-white/20 mx-auto" />

              <div className="grid grid-cols-2 gap-3">
                <div className="liquid-glass p-4 rounded-2xl border border-white/10">
                  <Network size={20} className="mx-auto mb-1 text-emerald-400" />
                  <span className="text-[10px] font-bold text-white/80">MESH</span>
                </div>
                <div className="liquid-glass p-4 rounded-2xl border border-white/10">
                  <Shield size={20} className="mx-auto mb-1 text-amber-400" />
                  <span className="text-[10px] font-bold text-white/80">SECURITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RAD;