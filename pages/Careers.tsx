import React, { useEffect } from 'react';
import { ArrowRight, Terminal, Globe, Zap, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JOB_LISTINGS } from '../constants';

const Careers: React.FC = () => {
  useEffect(() => {
    document.title = "Careers at Genovo | Join the Collective";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Join Genovo Technologies. We are hiring systems engineers, compiler architects, and ML researchers to build the operating systems of tomorrow. Remote-first."
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-24">
      {/* Hero */}
      <div className="max-w-[1280px] mx-auto px-6 mb-20 text-center">
        <div className="inline-block border border-white/20 px-4 py-1.5 rounded-full mb-6 bg-white/5 backdrop-blur-sm">
          <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
            Join The Collective
          </span>
        </div>
        <h1 className="font-heading text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none text-white">
          ENGINEERING <br /> OUR FUTURE TEAM
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 font-body">
          Join Architects of Tomorrow's Digital World. Building the operating system for the next generation of intelligence.
        </p>
        <Link
          to="/products"
          className="liquid-glass rounded-full px-8 py-4 text-white font-semibold text-sm inline-flex items-center gap-2 hover:bg-white/10 transition-all shadow-xl"
        >
          EXPLORE PLATFORMS <ArrowRight size={16} />
        </Link>
      </div>

      {/* Culture Diagram */}
      <div className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-3">
            OUR CULTURE
          </h2>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            CONNECTED INTELLIGENCE
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="seamless-card p-8 flex flex-col justify-between min-h-[280px]">
            <div className="flex items-start justify-between">
              <div className="bg-white/10 p-3 rounded-2xl text-white">
                <Terminal size={24} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider border border-white/20 px-2.5 py-1 rounded-full text-white/70">
                Autonomy
              </span>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Independent Execution</h3>
              <p className="text-white/70 text-sm font-body">
                We hire managers of one. You define the how, we agree on the what.
              </p>
            </div>
          </div>

          <div className="seamless-card p-8 flex flex-col justify-between min-h-[280px]">
            <div className="flex items-start justify-between">
              <div className="bg-white/10 p-3 rounded-2xl text-white">
                <Zap size={24} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider border border-white/20 px-2.5 py-1 rounded-full text-white/70">
                Impact
              </span>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Deep Tech Mission</h3>
              <p className="text-white/70 text-sm font-body">
                Solving hard engineering problems, not just CRUD apps.
              </p>
            </div>
          </div>

          <div className="seamless-card p-8 flex flex-col justify-between min-h-[280px]">
            <div className="flex items-start justify-between">
              <div className="bg-white/10 p-3 rounded-2xl text-white">
                <Globe size={24} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider border border-white/20 px-2.5 py-1 rounded-full text-white/70">
                Remote
              </span>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Global Inclusivity</h3>
              <p className="text-white/70 text-sm font-body">
                Talent is distributed evenly, opportunity is not. We bridge that gap.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/10 p-2.5 rounded-xl text-white">
            <Briefcase size={20} />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white">OPEN POSITIONS</h2>
        </div>

        <div className="mb-10">
          <p className="text-white/70 text-lg leading-relaxed font-body">
            We are building the foundational rails for the AI economy. If you love compilers, distributed systems, and solving for n-dimensional constraints, this is home.
          </p>
        </div>

        <div className="space-y-6">
          {JOB_LISTINGS.map((job) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className="seamless-card block p-8 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#7342E2] transition-colors">
                      {job.title}
                    </h3>
                    {job.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-white/60 font-body">
                    {job.department} • {job.location}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#7342E2] group-hover:text-white transition-all shrink-0">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {JOB_LISTINGS.length === 0 && (
          <div className="text-center py-12 seamless-card">
            <p className="text-white/60">No open positions at the moment. Check back soon!</p>
          </div>
        )}

        <div className="mt-16 p-8 seamless-card text-center">
          <Users className="mx-auto mb-4 text-white/50" size={32} />
          <p className="text-white/60 text-sm mb-4">Don't see your specific role?</p>
          <a
            href="mailto:info@genovotech.com"
            className="inline-block text-white font-semibold border-b border-white/40 pb-0.5 hover:text-[#7342E2] hover:border-[#7342E2] transition-colors text-sm"
          >
            Email us your resume & bio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;