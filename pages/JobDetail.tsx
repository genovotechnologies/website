import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Briefcase, Check, Send } from 'lucide-react';
import { JOB_LISTINGS } from '../constants';
import NotFound from './NotFound';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = JOB_LISTINGS.find((j) => j.id === id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (job) {
      document.title = `${job.title} - Careers | Genovo Technologies`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', job.description);
    }
  }, [id, job]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (!job) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link
          to="/careers"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Careers
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold bg-white/10 text-white/80 px-3 py-1 rounded-full uppercase tracking-wider border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          {job.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-2">
            <Briefcase size={14} />
            {job.department}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} />
            {job.type}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="liquid-glass rounded-[2rem] p-8 border border-white/10">
              <h2 className="font-heading text-2xl font-bold text-white mb-4">About the Role</h2>
              <p className="text-white/70 font-body text-base leading-relaxed">{job.description}</p>
            </div>

            <div className="liquid-glass rounded-[2rem] p-8 border border-white/10">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#7342E2]/20 text-[#7342E2] flex items-center justify-center shrink-0 mt-0.5 border border-[#7342E2]/30">
                      <Check size={12} />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-[2rem] p-8 border border-white/10">
              <h3 className="font-heading text-xl font-bold text-white mb-4">What We Offer</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" /> Competitive compensation
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" /> Fully remote work
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" /> Flexible hours
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" /> Learning budget
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-1">
            <div className="liquid-glass rounded-[2rem] p-8 border border-white/10 sticky top-28">
              {formSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">Application Sent!</h3>
                  <p className="text-white/60 text-xs mb-6 font-body">
                    Thank you for your interest. We'll review your application and get back to you soon.
                  </p>
                  <Link to="/careers" className="text-[#7342E2] font-semibold text-xs hover:underline">
                    View More Openings
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-xl font-bold text-white mb-6">Apply Now</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2]"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5">
                        LinkedIn / Portfolio
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2]"
                        placeholder="github.com/... or linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1.5">
                        Why Genovo? *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#7342E2] resize-none"
                        placeholder="Tell us about your background..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-white/90 transition-colors text-xs flex items-center justify-center gap-2 shadow-lg"
                    >
                      Submit Application <Send size={14} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
