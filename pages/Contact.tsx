import React, { useEffect, useState } from 'react';
import { Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', org: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Genovo Technologies';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Get in touch with Genovo Technologies for engineering partnerships, media inquiries, or general questions.'
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "9921c6c9-a27a-4b57-9782-f8cb86b95444";
      if (web3Key) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            organization: formData.org,
            message: formData.message,
            from_name: 'Genovo Technologies Contact Form',
            subject: `New Inquiry from ${formData.name}`,
          }),
        });
      } 
      // 2. EmailJS Integration
      else if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            to_email: formData.email,
            organization: formData.org,
            message: formData.message,
            to_name: 'Genovo Team',
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      }
      // 3. Formspree Integration
      else if (import.meta.env.VITE_FORMSPREE_ENDPOINT) {
        await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setFormSubmitted(true);
    } catch (error: any) {
      console.error('Email Transmission Error:', error);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-36 md:pt-44 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7342E2] block mb-3">
            Direct Transmission
          </span>
          <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight text-white leading-none mb-6">
            INITIATE <br /> CONNECTION
          </h1>
          <p className="text-xl text-white/70 font-body max-w-2xl leading-relaxed">
            Whether you're looking to integrate Synthos, partner on deep-tech infrastructure, or join the collective, we are listening.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="floating-panel p-12 text-center">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-white mb-2">Message Received</h2>
                <p className="text-white/60 text-sm max-w-md mx-auto mb-8 font-body">
                  Your transmission has been logged. Our core engineering team will reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', org: '', message: '' });
                  }}
                  className="liquid-glass rounded-full px-6 py-2.5 text-xs text-white uppercase tracking-wider font-semibold hover:bg-white/10 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Gasper"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-semibold">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    placeholder="e.g. Genovo Technologies"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/60 mb-2 font-semibold">
                    Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry or platform integration needs..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Transmitting...'
                  ) : (
                    <>
                      Transmit Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="floating-panel p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white">Direct Channels</h3>
              
              <div className="space-y-4 text-sm font-body">
                <div>
                  <span className="text-xs uppercase font-semibold text-white/40 block">General Inquiries</span>
                  <a href="mailto:info@genovotech.com" className="text-white hover:text-[#7342E2] transition-colors">info@genovotech.com</a>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-white/40 block">Synthos Platform</span>
                  <a href="https://www.synthos.dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7342E2] transition-colors">www.synthos.dev</a>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-white/40 block">Asphallea Engine</span>
                  <a href="https://asphallea.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7342E2] transition-colors">asphallea.vercel.app</a>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-white/40 block">GitHub Organization</span>
                  <a href="https://github.com/genovotechnologies" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7342E2] transition-colors">github.com/genovotechnologies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;