import React, { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ── Editorial input components ── */

const EditorialInput = ({ id, label, type = 'text', placeholder, value, onChange, required }: {
  id: string; label: string; type?: string; placeholder?: string;
  value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-[10px] font-sans uppercase tracking-widest text-gray-500 block mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent px-0 py-2 text-xl font-serif placeholder:text-gray-300 placeholder:italic focus:outline-none focus:ring-0 rounded-none border-b border-gray-300 focus:border-black transition-colors duration-300"
      style={{ fontFamily: "'Playfair Display', serif" }}
    />
  </div>
);

const EditorialTextArea = ({ id, label, placeholder, value, onChange, required }: {
  id: string; label: string; placeholder?: string;
  value?: string; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; required?: boolean;
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-[10px] font-sans uppercase tracking-widest text-gray-500 block mb-2">
      {label}
    </label>
    <textarea
      id={id}
      rows={4}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent px-0 py-2 text-xl font-serif placeholder:text-gray-300 placeholder:italic focus:outline-none focus:ring-0 rounded-none border-b border-gray-300 focus:border-black transition-colors duration-300 resize-none"
      style={{ fontFamily: "'Playfair Display', serif" }}
    />
  </div>
);

/* ── Fade-in wrapper ── */

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <div
    className={`opacity-0 ${className}`}
    style={{
      animation: `fadeInUp 0.8s ease-out ${delay}s forwards`,
    }}
  >
    {children}
  </div>
);

/* ── Main page ── */

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', org: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Genovo Technologies';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Get in touch with Genovo Technologies for engineering partnerships, media inquiries, or general questions. Global headquarters, remote-first.',
    );

    // Inject keyframes once
    if (!document.getElementById('editorial-keyframes')) {
      const style = document.createElement('style');
      style.id = 'editorial-keyframes';
      style.textContent = `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        ::selection { background: #000; color: #fff; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setFormSubmitted(true);
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      const message = error?.text || error?.message || 'Unknown error';
      alert(`Failed to send message: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-12 pb-20 px-6 sm:px-12 lg:px-20" style={{ color: '#111' }}>
      <div className="max-w-[1600px] mx-auto w-full">

        {/* ─── Hero header ─── */}
        <FadeIn>
          <div className="relative mb-24">
            {/* top rule */}
            <div className="w-full h-px bg-black mb-8" />

            <div className="flex flex-col items-start gap-4 mb-8">
              <div className="inline-flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-gray-500">
                <span className="italic text-black lowercase tracking-normal text-sm mr-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Status No. 1
                </span>
                OPEN LINES
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7">
                <h1
                  className="text-6xl sm:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.9]"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#111' }}
                >
                  Initiate <br />
                  <span className="italic text-gray-400">Connection</span>
                </h1>
              </div>
              <div className="lg:col-span-5 pt-4">
                <p className="text-xl text-gray-600 leading-relaxed max-w-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Whether you're looking to integrate SynthOS, partner on deep-tech infrastructure, or join the collective — we are listening.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ─── Main two-column grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* ── LEFT: Form ── */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="flex flex-col gap-12">
              <div className="relative">
                {/* Section header */}
                <div className="flex items-center justify-between mb-12 border-b border-black pb-4">
                  <h2 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-black">
                    Transmission Protocol
                  </h2>
                  <span className="text-[10px] font-sans text-gray-400 uppercase tracking-wider">
                    SECURE V.2.0
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-3xl font-normal mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Message Transmitted
                    </h4>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Thank you for reaching out. Our team will get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', org: '', message: '' }); }}
                      className="text-[10px] font-sans uppercase tracking-widest border border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-12" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                      <EditorialInput
                        id="name"
                        label="Identity (Name)"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <EditorialInput
                        id="email"
                        label="Return Address (Email)"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <EditorialInput
                      id="org"
                      label="Organization / Entity"
                      placeholder="Company Ltd."
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    />

                    <EditorialTextArea
                      id="message"
                      label="Payload (Message)"
                      placeholder="Enter your transmission..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />

                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-auto bg-black text-white px-10 py-4 font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-gray-800 transition-all rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center gap-4">
                          {isSubmitting ? 'Transmitting...' : 'Transmit'}
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </FadeIn>

          {/* ── RIGHT: Info sidebar ── */}
          <FadeIn delay={0.2} className="lg:col-span-5">
            <div className="flex flex-col gap-12">

              {/* Communication Channels */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-8 border-b border-black pb-4">
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-black">
                    Communication Channels
                  </h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-sans text-gray-400 mb-2 uppercase tracking-widest">General Inquiries</p>
                    <a
                      href="mailto:info@genovotech.com"
                      className="text-2xl italic hover:text-gray-500 transition-colors flex items-center gap-2 group"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      info@genovotech.com
                    </a>
                  </div>

                  <div className="w-full h-px bg-gray-100" />

                  <div>
                    <p className="text-[10px] font-sans text-gray-400 mb-2 uppercase tracking-widest">Technical Support</p>
                    <a
                      href="mailto:support@genovotech.com"
                      className="text-2xl italic hover:text-gray-500 transition-colors flex items-center gap-2 group"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      support@genovotech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Leadership Nodes */}
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-black pb-4">
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-black">
                    Leadership Nodes
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* CEO */}
                  <div className="group flex items-start justify-between pb-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold pt-1" style={{ fontFamily: "'Playfair Display', serif" }}>01</span>
                      <div>
                        <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider mb-1">CEO / Founder</p>
                        <p className="text-lg text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Oluwatosin A. Afolabi
                        </p>
                      </div>
                    </div>
                    <a
                      href="mailto:afolabi@genovotech.com"
                      className="text-[10px] font-sans uppercase tracking-widest border border-black px-3 py-1 hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      Connect
                    </a>
                  </div>

                  {/* CTO */}
                  <div className="group flex items-start justify-between pb-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold pt-1" style={{ fontFamily: "'Playfair Display', serif" }}>02</span>
                      <div>
                        <p className="text-[10px] font-sans text-gray-400 uppercase tracking-wider mb-1">CTO / Co-Founder</p>
                        <p className="text-lg text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Adegbite Ifeoluwa
                        </p>
                      </div>
                    </div>
                    <a
                      href="mailto:ifeoluwapo@genovotech.com"
                      className="text-[10px] font-sans uppercase tracking-widest border border-black px-3 py-1 hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>

              {/* Global Node */}
              <div>
                <div className="mb-6 border-b border-black pb-4">
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-black">
                    Global Node
                  </h3>
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Genovo operates as a decentralized collective with roots in Africa and nodes globally."
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="inline-flex items-center text-[10px] font-sans uppercase tracking-widest text-black border border-gray-200 px-3 py-1.5">
                      Remote First
                    </span>
                    <span className="inline-flex items-center text-[10px] font-sans uppercase tracking-widest text-black border border-gray-200 px-3 py-1.5">
                      Async Sync
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};

export default Contact;