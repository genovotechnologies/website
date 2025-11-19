import React, { useEffect } from 'react';
import { Users, Zap, Globe, Shield, Box, Server, Database, Target, Award, Hexagon, Layers } from 'lucide-react';
import { LEADERSHIP } from '../constants';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Genovo | Systems-First AI Engineering";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Learn about Genovo Technologies' mission to engineer the foundational intelligence rails for the future. We prioritize precision, first principles, and ownership.");
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 leading-[1] tracking-tighter">
                    THE ARCHITECTS <br/> OF TOMORROW'S <br/> <span className="text-blue-600">DIGITAL WORLD</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed font-light">
                    Our Decentralized Collective of Visionaries & Engineers. 
                    Genovo Technologies is a systems-first, AI-native technology company building high-performance infrastructure.
                </p>
            </div>
            <div className="relative">
                <img src="https://picsum.photos/seed/about_genovo/800/800" className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition duration-700" alt="Generative Art" />
            </div>
        </div>

        {/* Connected Structure Diagram */}
        <div className="mb-40">
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-16 text-center">OUR STRUCTURE: MINIMAL HIERARCHY, MAXIMUM IMPACT</h2>
            
            <div className="relative">
                {/* Visual Connector Lines (Background) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ overflow: 'visible' }}>
                    <path d="M200,150 C400,150 400,300 600,300" stroke="#F3F4F6" strokeWidth="4" fill="none" />
                    <path d="M600,300 C800,300 800,150 1000,150" stroke="#F3F4F6" strokeWidth="4" fill="none" />
                </svg>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    <div className="bg-[#1A1A1A] text-white p-10 rounded-[2.5rem] shadow-2xl hover:scale-105 transition duration-500 flex flex-col justify-between min-h-[320px]">
                        <div>
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-2">AI & Machine Learning</h3>
                            <p className="text-gray-400 text-sm">Research</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                             <p className="text-[10px] uppercase tracking-widest opacity-50">Foundational Models</p>
                        </div>
                    </div>

                    <div className="bg-[#10B981] text-white p-10 rounded-[2.5rem] shadow-2xl hover:scale-105 transition duration-500 flex flex-col justify-between min-h-[320px] mt-12 md:mt-24">
                        <div>
                             <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Box size={28} />
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-2">System & Manufacturing</h3>
                            <p className="text-green-100 text-sm">Engineering</p>
                        </div>
                         <div className="mt-4 pt-4 border-t border-white/20">
                             <p className="text-[10px] uppercase tracking-widest opacity-70">Industrial Hardware</p>
                        </div>
                    </div>

                    <div className="bg-[#F97316] text-white p-10 rounded-[2.5rem] shadow-2xl hover:scale-105 transition duration-500 flex flex-col justify-between min-h-[320px]">
                        <div>
                             <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Server size={28} />
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-2">Systems & Architecture</h3>
                            <p className="text-orange-100 text-sm">Engineering</p>
                        </div>
                         <div className="mt-4 pt-4 border-t border-white/20">
                             <p className="text-[10px] uppercase tracking-widest opacity-70">Scalable Compute</p>
                        </div>
                    </div>

                    <div className="bg-[#F3F4F6] text-[#1A1A1A] p-10 rounded-[2.5rem] shadow-xl hover:scale-105 transition duration-500 flex flex-col justify-between min-h-[320px] mt-12 md:mt-24">
                        <div>
                             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-2xl font-bold leading-tight mb-2">Systems Division</h3>
                            <p className="text-gray-500 text-sm">Bysseon</p>
                        </div>
                         <div className="mt-4 pt-4 border-t border-gray-200">
                             <p className="text-[10px] uppercase tracking-widest opacity-50">Global Ops</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
             <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-10">CORE VALUES</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="text-center p-8">
                     <div className="w-16 h-16 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                         <Target size={24} />
                     </div>
                     <h3 className="font-bold text-xl mb-2">Precision</h3>
                     <p className="text-gray-500 text-sm">Zero tolerance for error in foundational systems.</p>
                 </div>
                 <div className="text-center p-8 relative">
                     <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
                     <div className="w-16 h-16 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                         <Hexagon size={24} />
                     </div>
                     <h3 className="font-bold text-xl mb-2">First Principles</h3>
                     <p className="text-gray-500 text-sm">Reasoning from physics and math, not analogy.</p>
                 </div>
                 <div className="text-center p-8">
                     <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                         <Award size={24} />
                     </div>
                     <h3 className="font-bold text-xl mb-2">Ownership</h3>
                     <p className="text-gray-500 text-sm">Extreme accountability for every line of code.</p>
                 </div>
             </div>
        </div>

        {/* Founders Section */}
        <div className="mb-32 bg-gray-50 rounded-[3rem] p-12 md:p-20">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-[#1A1A1A]">LEADERSHIP</h2>
                 <p className="text-gray-500 mt-2">The minds behind the machine.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 {LEADERSHIP.map((leader, idx) => (
                     <div key={idx} className="flex flex-col items-center text-center">
                         <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
                             <img src={`https://picsum.photos/seed/${leader.name.split(' ')[0]}/400/400`} alt={leader.name} className="w-full h-full object-cover" />
                         </div>
                         <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{leader.name}</h3>
                         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">— {leader.role}</p>
                         <p className="text-gray-600 leading-relaxed max-w-sm">
                             {leader.bio}
                         </p>
                     </div>
                 ))}
             </div>
        </div>

        {/* Strategy Timeline */}
        <div className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">OUR STRATEGY TIMELINE</h2>
                    </div>
                    <div className="space-y-12">
                        <div className="group">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-xl group-hover:text-orange-500 transition">Scale SynthOS Enterprise</h3>
                                <Database size={20} className="text-gray-600 group-hover:text-orange-500 transition" />
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-orange-500 h-full w-3/4 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                            </div>
                        </div>
                        
                            <div className="group">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-xl group-hover:text-white transition">Launch Taskr MVP</h3>
                                <Layers size={20} className="text-gray-600 group-hover:text-white transition" />
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-white h-full w-1/2 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-6 bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                    <h3 className="text-2xl font-bold mb-2">Partner With Us</h3>
                    <p className="text-gray-400 text-sm mb-6">Forge the Future of Computation</p>
                    <form className="space-y-4">
                        <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white/10 transition text-white placeholder-gray-600" />
                        <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-white/10 transition text-white placeholder-gray-600" />
                        <button className="w-full bg-[#10B981] text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition shadow-lg shadow-emerald-900/20">
                            PROPOSE PARTNERSHIP
                        </button>
                    </form>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;