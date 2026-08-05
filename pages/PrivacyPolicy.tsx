import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Read Genovo Technologies' Privacy Policy to understand how we collect, use, and protect your personal data."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="inline-flex items-center space-x-2 mb-6 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Shield size={14} className="text-[#7342E2]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
            Data Governance
          </span>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          PRIVACY POLICY
        </h1>
        <p className="text-white/70 text-lg font-body max-w-xl leading-relaxed">
          Transparency in how we collect, process, and secure your digital footprint within the Genovo ecosystem.
        </p>
        <div className="mt-6 flex gap-4 text-xs font-mono text-white/50">
          <span>EFFECTIVE: MAR 2025</span>
          <span>•</span>
          <span>REGION: GLOBAL</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-12 border border-white/10 space-y-12 text-white/80 font-body leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Genovo Technologies ("Company", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy informs you how we process data across our web applications and platform services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="mb-4">
              We may collect, store, and transfer different types of technical data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li><strong>Identity Data:</strong> name, handle, organization identifier.</li>
              <li><strong>Contact Data:</strong> email address, phone number.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, system performance metrics.</li>
              <li><strong>Usage Data:</strong> information about platform interaction and dataset verification requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p>
              We implement zero-trust access controls, hardware-backed encryption, and cryptographic audit trails for all stored parameters and telemetry.
            </p>
          </section>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="font-heading font-bold text-lg text-white mb-2">Data Protection Officer</h3>
            <p className="text-white/60 text-xs mb-3">
              For privacy inquiries or data rights requests, contact our security team.
            </p>
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

export default PrivacyPolicy;