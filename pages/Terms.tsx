import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Review the Terms of Service for Genovo Technologies' website and platforms."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-36 md:pt-44 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <div className="w-1.5 h-1.5 bg-[#7342E2] rounded-full" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
            Legal Protocols
          </span>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          TERMS OF SERVICE
        </h1>
        <p className="text-white/70 text-lg font-body max-w-xl leading-relaxed">
          Operational parameters, usage agreements, and liability limitations for Genovo Technologies' systems and interfaces.
        </p>
        <div className="mt-6 flex gap-4 text-xs font-mono text-white/50">
          <span>VERSION 2.1.0</span>
          <span>•</span>
          <span>UPDATED MAR 2025</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-12 border border-white/10 space-y-12 text-white/80 font-body leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website and platforms of Genovo Technologies ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
            <p className="mb-4">
              All proprietary systems, designs, source code, logos, and underlying infrastructure remain the exclusive property of Genovo Technologies.
            </p>
            <p className="text-white/90">
              <strong>Synthos</strong>, <strong>Taskr</strong>, <strong>SCOS</strong>, and <strong>Genovo</strong> are registered trademarks of Genovo Technologies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">3. Use of Services</h2>
            <p>
              You agree to use our systems (Synthos, Taskr, SCOS, etc.) strictly for legitimate engineering and validation workflows. Reverse engineering or malicious exploitation of API endpoints is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              Services are provided "AS IS". Under no circumstances shall Genovo Technologies be liable for indirect, incidental, or consequential damages arising from execution on external runtime environments.
            </p>
          </section>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-heading font-bold text-lg text-white mb-2">Contact Legal</h3>
            <p className="text-white/60 text-xs mb-3">If you have any questions regarding these Terms of Service, please contact us.</p>
            <a
              href="mailto:info@genovotech.com"
              className="text-xs font-semibold text-white border-b border-white/40 hover:text-[#7342E2] hover:border-[#7342E2] transition-colors"
            >
              info@genovotech.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;