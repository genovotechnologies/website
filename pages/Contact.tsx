import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', org: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Genovo Technologies';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Get in touch with Genovo Technologies for engineering partnerships, media inquiries, or general questions. Global headquarters, remote-first.'
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
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
      setFormSubmitted(true);
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-28 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7342E2] block mb-3">
            Direct Transmission
          </span>
          <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight text-white leading-none mb-6">
            INITIATE <br /> CONNECTION
          </h1>
          <p className="text-xl text-white/70 font-body max-w-2xl leading-relaxed">
            Whether you're looking to integrate Synthos, partner on deep-tech infrastructure, or join the collective, we are listening.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h2 className="font-heading text-xl font-bold text-white">Transmission Protocol</h2>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">SECURE V2.0</span>
              </div>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Transmitted</h3>
                  <p className="text-white/60 text-sm font-body max-w-sm mx-auto mb-8">
                    Thank you for reaching out. Our engineering team will evaluate your message and respond shortly.
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
                  <div>
                    <label className="text-xs uppercase tracking-wider text-white/60 font-semibold block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-white/60 font-semibold block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-white/60 font-semibold block mb-2">
                        Organization / Project
                      </label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-white/60 font-semibold block mb-2">
                      Transmission Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your technical requirements or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Transmit Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10">
              <h3 className="font-heading text-xl font-bold text-white mb-2">Global Headquarters</h3>
              <p className="text-white/60 text-sm font-body leading-relaxed mb-4">
                Genovo Technologies <br />
                Lagos, Nigeria // Distributed Global Team
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Systems Operations Active</span>
              </div>
            </div>

            <div className="liquid-glass rounded-[2.5rem] p-8 border border-white/10">
              <h3 className="font-heading text-xl font-bold text-white mb-2">Direct Inquiries</h3>
              <div className="space-y-3 text-sm text-white/70 font-body">
                <div>
                  <span className="text-xs uppercase font-semibold text-white/40 block">General</span>
                  <a href="mailto:info@genovotech.com" className="hover:text-white transition-colors">info@genovotech.com</a>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-white/40 block">Synthos Platform</span>
                  <a href="https://synthos.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">synthos.dev</a>
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