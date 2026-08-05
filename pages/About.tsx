import React, { useEffect, useState } from 'react';
import { Target, Award, Hexagon, Database, Layers, Check, ArrowUpRight } from 'lucide-react';
import { LEADERSHIP } from '../constants';

const About: React.FC = () => {
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '' });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  useEffect(() => {
    document.title = "About Genovo | Systems-First Engineering";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Learn about Genovo Technologies' mission to engineer foundational intelligence rails for the future. We prioritize precision, first principles, and ownership."
    );
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7342E2] block mb-3">
              Company Mission
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              THE ARCHITECTS <br /> OF TOMORROW'S <br />
              <span className="text-[#7342E2]">DIGITAL RAILS</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed font-body">
              Our Collective of Visionaries & Engineers. Genovo Technologies is a systems-first technology platform building high-performance software infrastructure.
            </p>
          </div>
          <div className="relative">
            <div className="seamless-card p-4 overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/about_genovo/800/800"
                className="rounded-[2rem] w-full h-[400px] object-cover opacity-75 hover:opacity-95 transition duration-700"
                alt="Generative Art"
              />
            </div>
          </div>
        </div>

        {/* Structure Section (No Icon Badges) */}
        <div className="mb-32">
          <h2 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-12 text-center">
            OUR STRUCTURE: MINIMAL HIERARCHY, MAXIMUM IMPACT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="seamless-card p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7342E2] font-semibold block mb-2">Research</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Intelligence & Computation</h3>
                <p className="text-white/60 text-sm font-body">Foundational System Architectures</p>
              </div>
            </div>

            <div className="seamless-card p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7342E2] font-semibold block mb-2">Engineering</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">System & Hardware</h3>
                <p className="text-white/60 text-sm font-body">Industrial Control OS</p>
              </div>
            </div>

            <div className="seamless-card p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7342E2] font-semibold block mb-2">Engineering</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Systems & Architecture</h3>
                <p className="text-white/60 text-sm font-body">Scalable Compute Mesh</p>
              </div>
            </div>

            <div className="seamless-card p-8 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7342E2] font-semibold block mb-2">Global Ops</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Systems Division</h3>
                <p className="text-white/60 text-sm font-body">High-Availability Operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <h2 className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-12 text-center">
            CORE OPERATING VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="seamless-card p-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-2 text-white">Precision</h3>
              <p className="text-white/60 text-sm font-body">Zero tolerance for error in foundational systems.</p>
            </div>

            <div className="seamless-card p-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-2 text-white">First Principles</h3>
              <p className="text-white/60 text-sm font-body">Reasoning from physics and math, not analogy.</p>
            </div>

            <div className="seamless-card p-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-2 text-white">Ownership</h3>
              <p className="text-white/60 text-sm font-body">Extreme accountability for every line of code.</p>
            </div>
          </div>
        </div>

        {/* Flagship Banner */}
        <div className="mb-32">
          <div className="seamless-card p-10 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                  Flagship Platform
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  SynthOS is a product of Genovo Technologies
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-8 font-body">
                  Our flagship entropic dataset validation platform, SynthOS, represents the culmination of Genovo's mission to engineer foundational intelligence rails.
                </p>
                <a
                  href="https://synthos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all shadow-xl"
                >
                  Visit synthos.dev <ArrowUpRight size={16} />
                </a>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/synthos_about/600/400"
                  alt="SynthOS Platform"
                  className="rounded-2xl border border-white/10 shadow-2xl opacity-75"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-white">LEADERSHIP</h2>
            <p className="text-white/50 text-sm mt-2">The minds behind the machine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="seamless-card p-8 sm:p-10 flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-white/20 shadow-xl">
                  <img
                    src={`https://picsum.photos/seed/${leader.name.split(' ')[0]}/400/400`}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-xs font-semibold text-[#7342E2] uppercase tracking-widest mb-4">
                  {leader.role}
                </p>
                <p className="text-white/70 text-sm font-body leading-relaxed max-w-md">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy & Form */}
        <div className="seamless-card p-10 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-[#7342E2] rounded-full animate-pulse" />
                <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">
                  STRATEGY TIMELINE
                </h2>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-lg text-white">Scale SynthOS Enterprise</h3>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#7342E2] h-full w-3/4 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-lg text-white">Deploy Asphallea Security Engine</h3>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-2/3 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="seamless-card p-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Partner With Us</h3>
              <p className="text-white/60 text-sm mb-6">Forge the Future of Computation</p>
              {partnerSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white mb-1">Thank You!</h4>
                  <p className="text-white/60 text-sm">We'll be in touch soon to discuss partnership opportunities.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handlePartnerSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-white/90 transition-all text-sm"
                  >
                    PROPOSE PARTNERSHIP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;