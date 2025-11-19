import React, { useEffect } from 'react';
import { CORE_TEAM } from '../constants';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowUpRight, Users } from 'lucide-react';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = "Leadership & Team | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Meet the architects, systems engineers, and researchers behind Genovo Technologies. A decentralized collective building the digital future.");
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
        {/* Hero */}
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Users size={16} className="text-[#1A1A1A]" />
                <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">The Collective</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#1A1A1A] mb-8 tracking-tighter">
                MEET THE <br/> ARCHITECTS
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                A decentralized group of systems engineers, researchers, and product visionaries obsessed with building the future's infrastructure.
            </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CORE_TEAM.map((member, idx) => (
                    <div key={idx} className="group bg-white rounded-[2.5rem] p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-8">
                             <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 bg-gray-50">
                                 <img 
                                    src={`https://picsum.photos/seed/${member.name.replace(/ /g, '')}/200/200`} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                                 />
                             </div>
                             <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-[#0077b5] hover:text-white transition"><Linkedin size={16} /></a>
                                 <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-[#1DA1F2] hover:text-white transition"><Twitter size={16} /></a>
                             </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">{member.role}</p>
                        
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 min-h-[60px]">
                            {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, sIdx) => (
                                <span key={sIdx} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-md uppercase">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Join Card */}
                <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-center items-center text-center group hover:bg-black transition-colors">
                     <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <ArrowUpRight size={32} />
                     </div>
                     <h3 className="text-2xl font-bold mb-2">Your Name Here</h3>
                     <p className="text-gray-400 text-sm mb-8 max-w-xs">
                         We are always looking for exceptional systems engineers and researchers.
                     </p>
                     <Link to="/careers" className="bg-white text-black px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-colors w-full">
                         VIEW OPENINGS
                     </Link>
                </div>
            </div>
        </div>

        {/* Advisors / Backed By Section */}
        <div className="bg-white py-24 border-t border-gray-100">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-12">MEMBER OF</h2>
                 <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition duration-500">
                      <div className="flex items-center gap-4 group">
                          {/* NVIDIA Inception Representation */}
                          <div className="text-3xl md:text-5xl font-bold tracking-tighter text-[#76B900] group-hover:drop-shadow-lg transition-all">NVIDIA</div>
                          <div className="text-xl md:text-3xl font-light text-gray-500 uppercase tracking-widest border-l-2 border-gray-200 pl-4 group-hover:text-gray-800 transition-colors">Inception</div>
                      </div>
                 </div>
             </div>
        </div>
    </div>
  );
};

export default Team;