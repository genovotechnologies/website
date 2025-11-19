import React, { useEffect } from 'react';
import { RESEARCH_HIGHLIGHTS } from '../constants';
import { Cpu, Shield, Network, Code2, Database, Activity, Layers, ArrowRight, Lock, FileText, GitGraph, Component, Radio, Box, Download, FileCode, BookOpen, ChevronRight } from 'lucide-react';

const RAD: React.FC = () => {
  useEffect(() => {
    document.title = "R&D & Innovation Labs | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Discover Genovo's research in distributed systems, neuromorphic computing, and O(n log n) neural networks. Engineering the unknown from first principles.");
  }, []);

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Header / Hero */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="flex flex-col lg:flex-row justify-between items-end mb-24 relative z-10">
            <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 mb-8 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Genovo Innovation Labs</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-[#1A1A1A] mb-6 tracking-tighter leading-[0.9]">
                    ENGINEERING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-gray-500">THE UNKNOWN</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl font-light leading-relaxed">
                    Our Innovation Engine & Deep Technical Mastery. We don't just predict the future; we compile it from first principles.
                </p>
            </div>
            <div className="mt-10 lg:mt-0 flex gap-4">
                 <a href="#research" className="px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] text-sm font-bold uppercase tracking-widest rounded-2xl hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all shadow-sm">
                    View Publications
                </a>
            </div>
         </div>

         {/* Active Labs Section - Enhanced UI */}
         <div className="mb-32">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">ACTIVE EXPERIMENTS</h2>
                <div className="h-px bg-gray-200 flex-1 ml-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Lab Card 1 - Project Aether */}
                <div className="group relative bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         <div className="flex justify-between items-start mb-8">
                            <div className="bg-blue-100/50 p-3 rounded-2xl border border-blue-100">
                                <Component className="text-blue-600" size={24} />
                            </div>
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-100">Alpha</span>
                         </div>
                         <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-blue-600 transition-colors">Project Aether</h3>
                         <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                             Decentralized compute harvesting from idle consumer IoT devices. Turning dormant silicon into a global supercomputer.
                         </p>
                         <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                             <span className="font-mono text-xs text-gray-400">ID: AE-992</span>
                             <ArrowRight className="text-gray-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" size={18} />
                         </div>
                     </div>
                </div>

                {/* Lab Card 2 - Quantum Lattice (Dark Mode Card) */}
                <div className="group relative bg-[#1A1A1A] rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         <div className="flex justify-between items-start mb-8">
                            <div className="bg-white/10 p-3 rounded-2xl border border-white/5">
                                <GitGraph className="text-orange-400" size={24} />
                            </div>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-orange-500/20">Research</span>
                         </div>
                         <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Quantum Lattice</h3>
                         <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                             Post-quantum cryptography standards for blockchain interoperability. Securing the chain against Q-Day.
                         </p>
                         <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                             <span className="font-mono text-xs text-gray-500">ID: QL-104</span>
                             <ArrowRight className="text-gray-500 group-hover:text-orange-400 transition-transform group-hover:translate-x-1" size={18} />
                         </div>
                     </div>
                </div>

                 {/* Lab Card 3 - Silicon Soul */}
                 <div className="group relative bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                     <div className="relative z-10 flex flex-col h-full">
                         <div className="flex justify-between items-start mb-8">
                            <div className="bg-emerald-100/50 p-3 rounded-2xl border border-emerald-100">
                                <Cpu className="text-emerald-600" size={24} />
                            </div>
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-100">Simulation</span>
                         </div>
                         <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-emerald-600 transition-colors">Silicon Soul</h3>
                         <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                             Neuromorphic chip architecture optimizing for sparse rewards. Giving ghosts to the machine.
                         </p>
                         <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                             <span className="font-mono text-xs text-gray-400">ID: SS-771</span>
                             <ArrowRight className="text-gray-300 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" size={18} />
                         </div>
                     </div>
                </div>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             {/* Left Column: Content (7 columns) */}
             <div className="lg:col-span-7 space-y-20">
                 {/* Published Research Section */}
                 <div id="research">
                     <div className="flex items-center gap-4 mb-8">
                         <div className="p-3 bg-[#1A1A1A] rounded-xl text-white shadow-lg">
                            <BookOpen size={24} />
                         </div>
                         <div>
                            <h2 className="text-2xl font-bold text-[#1A1A1A]">PUBLISHED RESEARCH</h2>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Repository: Peer-Reviewed Papers</p>
                         </div>
                     </div>
                     
                     {/* Repository Style List */}
                     <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 p-5 bg-gray-50 border-b border-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            <div className="col-span-2 pl-2">Date</div>
                            <div className="col-span-6">Publication Details</div>
                            <div className="col-span-2">Metric</div>
                            <div className="col-span-2 text-right pr-2">Access</div>
                        </div>
                        
                        {/* List Items */}
                        <div className="divide-y divide-gray-100">
                            {RESEARCH_HIGHLIGHTS.map((paper, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 hover:bg-blue-50/30 transition-all duration-300 group items-start relative">
                                    {/* Mobile Date */}
                                    <div className="col-span-12 md:hidden flex justify-between items-center mb-2">
                                        <span className="font-mono text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{paper.date}</span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-800 border border-gray-200">{paper.metric}</span>
                                    </div>

                                    {/* Date Column (Desktop) */}
                                    <div className="hidden md:block col-span-2 pt-1">
                                        <div className="font-mono text-xs text-gray-500 font-medium pl-2">{paper.date}</div>
                                    </div>
                                    
                                    {/* Content Column */}
                                    <div className="col-span-12 md:col-span-6">
                                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-blue-700 transition-colors leading-tight flex items-start gap-2">
                                           <FileText size={16} className="mt-1 text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                           {paper.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-3">
                                            {paper.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                                            <span className="font-semibold text-gray-600">Author: {paper.author}</span>
                                        </div>
                                    </div>

                                    {/* Metric Column (Desktop) */}
                                    <div className="hidden md:block col-span-2 pt-1">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-600 border border-gray-200">
                                            {paper.metric}
                                        </span>
                                    </div>

                                    {/* Action Column */}
                                    <div className="col-span-12 md:col-span-2 flex md:justify-end pt-1 pr-2">
                                        <a href={paper.url} className="w-full md:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-100 px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md group-hover:border-blue-500/30">
                                            <Download size={14} />
                                            <span>PDF</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Footer */}
                        <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-center">
                             <button className="text-xs font-bold text-gray-500 hover:text-[#1A1A1A] uppercase tracking-widest flex items-center gap-2 transition-colors">
                                View Archive <ChevronRight size={14} />
                             </button>
                        </div>
                     </div>
                 </div>

                 {/* Technical Competencies */}
                 <div>
                    <div className="flex items-center gap-4 mb-8">
                         <div className="p-3 bg-[#1A1A1A] rounded-xl text-white shadow-lg">
                            <Layers size={24} />
                         </div>
                         <div>
                            <h2 className="text-2xl font-bold text-[#1A1A1A]">TECHNICAL COMPETENCIES</h2>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Core Engineering Pillars</p>
                         </div>
                     </div>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         {/* Card 1 */}
                         <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                             <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                                    <Database size={28} />
                                </div>
                             </div>
                             <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Systems Engineering</h3>
                             <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12">
                                 Memory safety and kernel-bypass networking for ultra-low latency.
                             </p>
                             <div className="flex gap-2 flex-wrap">
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">Rust / C++</span>
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">eBPF</span>
                             </div>
                         </div>
                         
                         {/* Card 2 */}
                         <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                             <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                                    <Lock size={28} />
                                </div>
                             </div>
                             <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Distributed Consensus</h3>
                             <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12">
                                 Byzantine fault tolerance and leaderless replication protocols.
                             </p>
                              <div className="flex gap-2 flex-wrap">
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">Paxos</span>
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">Raft</span>
                             </div>
                         </div>

                         {/* Card 3 */}
                          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                             <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                                    <Radio size={28} />
                                </div>
                             </div>
                             <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Signal Processing</h3>
                             <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12">
                                 DSP for noise reduction and pattern recognition in messy data streams.
                             </p>
                              <div className="flex gap-2 flex-wrap">
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">FFT</span>
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">Wavelets</span>
                             </div>
                         </div>

                         {/* Card 4 */}
                         <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                             <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                                    <FileCode size={28} />
                                </div>
                             </div>
                             <h3 className="font-bold text-lg text-[#1A1A1A] mb-3">Compiler Design</h3>
                             <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12">
                                 LLVM backend optimization and custom Intermediate Representation.
                             </p>
                              <div className="flex gap-2 flex-wrap">
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">LLVM</span>
                                 <span className="px-2 py-1 bg-gray-50 rounded-md text-[10px] font-bold uppercase text-gray-600 border border-gray-100">JIT</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Right Column: Strategic Architecture */}
             <div className="lg:col-span-5">
                 <div className="sticky top-32">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 text-center lg:text-left">STRATEGIC ARCHITECTURE</h2>
                    
                    <div className="bg-[#1A1A1A] rounded-[3rem] p-10 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center text-white">
                        {/* Abstract Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] [background-size:40px_40px] opacity-50"></div>
                        
                        {/* Diagram Content */}
                        <div className="relative z-10 flex flex-col items-center space-y-8 w-full">
                            
                            {/* Top Layer */}
                            <div className="flex gap-4 w-full justify-center">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-full max-w-[140px] text-center transform hover:scale-105 transition-transform">
                                    <Activity className="mx-auto mb-2 text-blue-400" size={20} />
                                    <div className="text-[10px] font-bold tracking-wider">NEURAL</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-full max-w-[140px] text-center transform hover:scale-105 transition-transform">
                                    <Code2 className="mx-auto mb-2 text-purple-400" size={20} />
                                    <div className="text-[10px] font-bold tracking-wider">LOGIC</div>
                                </div>
                            </div>

                            {/* Arrow Down */}
                            <div className="h-8 w-px bg-gradient-to-b from-gray-500 to-white/20"></div>

                            {/* Core Layer */}
                            <div className="bg-white text-black p-8 rounded-3xl w-full shadow-[0_0_50px_rgba(255,255,255,0.1)] relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
                                <div className="text-center">
                                    <Layers className="mx-auto mb-4 text-[#1A1A1A]" size={32} />
                                    <h3 className="text-xl font-bold mb-1">GENOVO CORE</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">The Metal Layer</p>
                                </div>
                            </div>

                            {/* Arrow Down */}
                            <div className="h-8 w-px bg-gradient-to-b from-white/20 to-gray-500"></div>

                            {/* Base Layer */}
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
                                    <Network className="mx-auto mb-2 text-green-400" size={20} />
                                    <div className="text-[10px] font-bold tracking-wider text-gray-400">MESH</div>
                                </div>
                                 <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-colors">
                                    <Database className="mx-auto mb-2 text-orange-400" size={20} />
                                    <div className="text-[10px] font-bold tracking-wider text-gray-400">STATE</div>
                                </div>
                                 <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center col-span-2 hover:bg-white/10 transition-colors">
                                    <Shield className="mx-auto mb-2 text-red-400" size={20} />
                                    <div className="text-[10px] font-bold tracking-wider text-gray-400">SECURITY</div>
                                </div>
                            </div>

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