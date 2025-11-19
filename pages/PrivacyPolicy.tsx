import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Read Genovo Technologies' Privacy Policy to understand how we collect, use, and protect your personal data.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
         {/* Hero Header */}
         <div className="bg-[#1A1A1A] text-white pt-32 pb-20 rounded-b-[3rem] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
             
             <div className="max-w-4xl mx-auto relative z-10">
                 <div className="inline-flex items-center space-x-2 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <Shield size={12} className="text-gray-300" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Data Governance</span>
                 </div>
                 <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">PRIVACY POLICY</h1>
                 <p className="text-gray-400 text-lg font-light max-w-xl leading-relaxed">
                     Transparency in how we collect, process, and secure your digital footprint within the Genovo ecosystem.
                 </p>
                 <div className="mt-8 flex gap-4">
                    <span className="text-xs font-mono text-gray-500">EFFECTIVE: MAR 2025</span>
                    <span className="text-xs font-mono text-gray-500">REGION: GLOBAL</span>
                 </div>
             </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="prose prose-lg prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 max-w-none">
                <section className="mb-16">
                    <h2 className="text-3xl mb-6">1. Introduction</h2>
                    <p>
                        Genovo Technologies ("Company", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl mb-6">2. Data We Collect</h2>
                    <p className="mb-4">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-[#1A1A1A]">
                        <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                    </ul>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl mb-6">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#1A1A1A]">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>
                </section>

                 <section className="mb-16">
                    <h2 className="text-3xl mb-6">4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We utilize enterprise-grade encryption for data at rest and in transit. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl mb-6">5. Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                    </p>
                </section>

                <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-200 mt-20">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 mt-0">Data Protection Officer</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        If you have any questions about this privacy policy or our privacy practices, please contact our DPO.
                    </p>
                    <a href="mailto:info@genovotech.com" className="inline-flex items-center text-[#1A1A1A] font-bold border-b-2 border-[#1A1A1A] hover:text-blue-600 hover:border-blue-600 transition-colors">
                        info@genovotech.com
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PrivacyPolicy;