import React, { useEffect } from 'react';
import { ArrowRight, Terminal, Globe, Zap, Briefcase, Users } from 'lucide-react';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = "Careers at Genovo | Join the Collective";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Join Genovo Technologies. We are hiring systems engineers, compiler architects, and ML researchers to build the operating systems of tomorrow. Remote-first.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
        {/* Hero */}
        <div className="bg-[#1A1A1A] text-white pt-32 pb-24 rounded-b-[3rem] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                 <div className="inline-block border border-white/20 px-4 py-2 rounded-full mb-6 bg-white/5 backdrop-blur-sm">
                     <span className="text-xs font-bold tracking-widest uppercase">Join The Collective</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">ENGINEERING <br/> OUR FUTURE TEAM</h1>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
                     Join Architects of Tomorrow's Digital World. Building the operating system for the next generation of intelligence.
                 </p>
                 <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:shadow-blue-500/50">
                     EXPLORE PLATFORMS
                 </button>
             </div>
        </div>

        {/* Culture Diagram - Node Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
                <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">OUR CULTURE</h2>
                <h3 className="text-3xl font-bold text-[#1A1A1A]">CONNECTED INTELLIGENCE</h3>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Node 1 */}
                <div className="bg-[#191970] text-white p-8 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[280px]">
                    <div className="flex items-start justify-between">
                         <div className="bg-white/20 p-3 rounded-2xl">
                            <Terminal size={24} />
                         </div>
                         <span className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded-lg">Autonomy</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Independent Execution</h3>
                        <p className="text-blue-200 text-sm">We hire managers of one. You define the how, we agree on the what.</p>
                    </div>
                </div>

                {/* Node 2 */}
                <div className="bg-[#FF5F1F] text-white p-8 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[280px] mt-0 md:mt-12">
                    <div className="flex items-start justify-between">
                         <div className="bg-white/20 p-3 rounded-2xl">
                            <Zap size={24} />
                         </div>
                         <span className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded-lg">Impact</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Deep Tech Mission</h3>
                        <p className="text-orange-100 text-sm">Solving hard engineering problems, not just CRUD apps.</p>
                    </div>
                </div>

                {/* Node 3 */}
                <div className="bg-[#10B981] text-white p-8 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between min-h-[280px]">
                    <div className="flex items-start justify-between">
                         <div className="bg-white/20 p-3 rounded-2xl">
                            <Globe size={24} />
                         </div>
                         <span className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded-lg">Remote</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Global Inclusivity</h3>
                        <p className="text-green-100 text-sm">Talent is distributed evenly, opportunity is not. We bridge that.</p>
                    </div>
                </div>
            </div>

            {/* Connecting Lines for visual effect (Desktop only) */}
            <div className="hidden md:block relative h-20 mt-[-40px] z-[-1]">
                 <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                     <path d="M200,0 C200,100 500,100 500,50" stroke="#E5E7EB" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                     <path d="M500,50 C500,100 800,0 800,0" stroke="#E5E7EB" strokeWidth="3" fill="none" strokeDasharray="8 8" />
                 </svg>
            </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
             <div className="flex items-center gap-3 mb-10">
                 <div className="bg-[#1A1A1A] p-2 rounded-lg text-white"><Briefcase size={20} /></div>
                 <h2 className="text-3xl font-bold text-[#1A1A1A]">WHY JOIN GENOVO?</h2>
             </div>
             
             <div className="mb-12">
                 <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                     We are building the foundational rails for the AI economy. If you love compilers, distributed systems, and solving for n-dimensional constraints, this is home.
                 </p>
             </div>

             <div className="space-y-6">
                 <div className="bg-gray-50 hover:bg-[#1A1A1A] hover:text-white rounded-3xl p-8 transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-800">
                     <div className="flex flex-col md:flex-row md:items-center justify-between">
                         <div>
                             <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold">Senior Systems Engineer</h3>
                                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded-md group-hover:bg-blue-600 group-hover:text-white">RUST</span>
                             </div>
                             <p className="text-sm text-gray-500 group-hover:text-gray-400">Core Infrastructure • Remote</p>
                         </div>
                         <div className="mt-4 md:mt-0 bg-white text-black p-3 rounded-full group-hover:bg-gray-800 group-hover:text-white transition">
                             <ArrowRight size={20} />
                         </div>
                     </div>
                 </div>

                 <div className="bg-gray-50 hover:bg-[#1A1A1A] hover:text-white rounded-3xl p-8 transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-800">
                     <div className="flex flex-col md:flex-row md:items-center justify-between">
                         <div>
                             <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold">ML Ops Architect</h3>
                                <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-1 rounded-md group-hover:bg-purple-600 group-hover:text-white">PYTHON</span>
                             </div>
                             <p className="text-sm text-gray-500 group-hover:text-gray-400">SynthOS Platform • Remote</p>
                         </div>
                         <div className="mt-4 md:mt-0 bg-white text-black p-3 rounded-full group-hover:bg-gray-800 group-hover:text-white transition">
                             <ArrowRight size={20} />
                         </div>
                     </div>
                 </div>
             </div>
             
             <div className="mt-16 p-8 bg-[#F5F5F5] rounded-3xl text-center">
                 <Users className="mx-auto mb-4 text-gray-400" />
                 <p className="text-gray-500 text-sm mb-4">Don't see your role?</p>
                 <a href="mailto:info@genovotech.com" className="inline-block text-[#1A1A1A] font-bold border-b-2 border-[#1A1A1A] pb-1 hover:text-blue-600 hover:border-blue-600 transition">
                     Email us your resume
                 </a>
             </div>
        </div>
    </div>
  );
};

export default Careers;