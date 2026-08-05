import React, { useEffect } from 'react';
import { CORE_TEAM } from '../constants';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, ArrowUpRight, Users } from 'lucide-react';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = "Leadership & Team | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Meet the architects, systems engineers, and researchers behind Genovo Technologies. A decentralized collective building the digital future."
    );
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-36 md:pt-44 pb-24">
      {/* Hero */}
      <div className="max-w-[1280px] mx-auto px-6 text-center mb-20">
        <div className="inline-flex items-center space-x-2 mb-6 border border-white/20 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
          <Users size={16} className="text-white" />
          <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">The Collective</span>
        </div>
        <h1 className="font-heading text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-none">
          MEET THE <br /> ARCHITECTS
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-body">
          A decentralized group of systems engineers, researchers, and product visionaries obsessed with building the future's infrastructure.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_TEAM.map((member, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-white/20 bg-white/5">
                    <img
                      src={`https://picsum.photos/seed/${member.name.replace(/ /g, '')}/200/200`}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
                    />
                  </div>
                  <div className="flex space-x-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black text-white transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black text-white transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-[#7342E2] uppercase tracking-wider mb-4">
                  {member.role}
                </p>

                <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {member.expertise.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-semibold bg-white/10 text-white/80 px-2.5 py-1 rounded-full uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Join Card */}
          <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10 flex flex-col justify-center items-center text-center group hover:bg-white/[0.05] transition-colors">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <ArrowUpRight size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Your Name Here</h3>
            <p className="text-white/60 text-sm mb-8 max-w-xs font-body">
              We are always looking for exceptional systems engineers and researchers.
            </p>
            <Link
              to="/careers"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors w-full"
            >
              VIEW OPENINGS
            </Link>
          </div>
        </div>
      </div>

      {/* Member Of */}
      <div className="border-t border-white/10 pt-16 text-center">
        <h2 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">MEMBER OF</h2>
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-4">
            <div className="text-3xl md:text-5xl font-bold tracking-tighter text-[#76B900]">NVIDIA</div>
            <div className="text-xl md:text-3xl font-light text-white/50 uppercase tracking-widest border-l border-white/20 pl-4">
              Inception
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;