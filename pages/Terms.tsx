import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Review the Terms of Service for Genovo Technologies' website and platforms.");
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
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Legal Protocols</span>
                 </div>
                 <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">TERMS OF SERVICE</h1>
                 <p className="text-gray-400 text-lg font-light max-w-xl leading-relaxed">
                     Operational parameters, usage agreements, and liability limitations for Genovo Technologies' systems and interfaces.
                 </p>
                 <div className="mt-8 flex gap-4">
                    <span className="text-xs font-mono text-gray-500">VERSION 2.1.0</span>
                    <span className="text-xs font-mono text-gray-500">UPDATED MAR 2025</span>
                 </div>
             </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="prose prose-lg prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 max-w-none">
                <section className="mb-16">
                    <h2 className="text-3xl mb-6">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the website and services of Genovo Technologies ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. All such guidelines or rules are hereby incorporated by reference into the TOS.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl mb-6">2. Intellectual Property</h2>
                    <p className="mb-4">
                        The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                    </p>
                    <p>
                        <strong>SynthOS</strong>, <strong>Taskr</strong>, <strong>SCOS</strong>, and <strong>Genovo</strong> are registered trademarks of Genovo Technologies. Use of these marks without express written permission is prohibited.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl mb-6">3. Use of Services</h2>
                    <p>
                        You agree to use our platforms (SynthOS, Taskr, etc.) only for lawful purposes. You are prohibited from using our services to compromise the security of the platform, render the services inaccessible to others, or otherwise cause damage to the Site or the Content. Unauthorized access to our API endpoints or attempts to reverse engineer our compiled binaries will result in immediate termination of service and potential legal action.
                    </p>
                </section>

                 <section className="mb-16">
                    <h2 className="text-3xl mb-6">4. Disclaimer of Warranties</h2>
                    <p>
                        The services are provided on an "AS IS" and "AS AVAILABLE" basis. Genovo Technologies expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that our AI models will be error-free or that our systems will operate without interruption.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl mb-6">5. Limitation of Liability</h2>
                    <p>
                        In no event shall Genovo Technologies be liable for any direct, indirect, incidental, special, consequential damages, or damages for loss of profits, revenue, data or use, incurred by you or any third party, whether in an action in contract or tort, arising from your access to, or use of, the site or any services provided.
                    </p>
                </section>

                <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-200 mt-20">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 mt-0">Contact Legal</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        If you have any questions about these Terms, please contact us.
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

export default Terms;