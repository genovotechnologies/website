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
    message: ''
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
    // In production, this would send to an API
    console.log('Application submitted:', { jobId: id, ...formData });
    setFormSubmitted(true);
  };

  if (!job) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/careers" className="inline-flex items-center text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Careers
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {job.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] font-bold bg-white/20 text-white px-3 py-1 rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{job.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Briefcase size={16} />
              {job.department}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {job.type}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">About the Role</h2>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-[#1A1A1A] text-white p-1 rounded-full mt-0.5 flex-shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-[#1A1A1A] mb-4">What We Offer</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-green-600" /> Competitive compensation
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-green-600" /> Fully remote work
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-green-600" /> Flexible hours
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-green-600" /> Learning budget
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-green-600" /> Health coverage
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-green-600" /> Equity options
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gray-50 rounded-2xl p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Application Sent!</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Thank you for your interest. We'll review your application and get back to you soon.
                  </p>
                  <Link to="/careers" className="text-blue-600 font-bold text-sm hover:underline">
                    View More Openings
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-[#1A1A1A] mb-6">Apply Now</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent"
                        placeholder="linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Why Genovo? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent resize-none"
                        placeholder="Tell us why you'd be a great fit..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#1A1A1A] text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      Submit Application <Send size={16} />
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Or email us at{' '}
                    <a href="mailto:careers@genovotech.com" className="text-blue-600 hover:underline">
                      careers@genovotech.com
                    </a>
                  </p>
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
