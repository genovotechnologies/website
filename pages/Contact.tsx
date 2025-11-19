import React, { useEffect } from 'react';
import { Mail, Send, Globe, Clock, MessageSquare, ArrowRight, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute('content', "Get in touch with Genovo Technologies for engineering partnerships, media inquiries, or general questions. Global headquarters, remote-first.");
  }, []);

  const FloatingInput = ({ id, label, type = "text", placeholder = " " }: { id: string, label: string, type?: string, placeholder?: string }) => (
    <div className="relative group">
        <input 
            type={type} 
            id={id} 
            className="block w-full px-4 py-4 text-[#1A1A1A] bg-[#F9F9F9] border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] focus:bg-white peer transition-all duration-200 font-medium text-sm"
            placeholder={placeholder} 
        />
        <label 
            htmlFor={id} 
            className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-[#1A1A1A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:-translate-y-4 font-bold tracking-widest uppercase px-1"
        >
            {label}
        </label>
    </div>
  );

  const FloatingTextArea = ({ id, label }: { id: string, label: string }) => (
    <div className="relative group">
        <textarea 
            id={id} 
            rows={5}
            className="block w-full px-4 py-4 text-[#1A1A1A] bg-[#F9F9F9] border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] focus:bg-white peer transition-all duration-200 resize-none font-medium text-sm"
            placeholder=" " 
        />
        <label 
            htmlFor={id} 
            className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-[#1A1A1A] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:-translate-y-4 font-bold tracking-widest uppercase px-1"
        >
            {label}
        </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
            {/* Header */}
            <div className="mb-16 max-w-3xl">
                <div className="inline-flex items-center space-x-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Open Lines</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 tracking-tight leading-[0.9]">
                    INITIATE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-gray-500">CONNECTION</span>
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                    Whether you're looking to integrate SynthOS, partner on deep-tech infrastructure, or join the collective — we are listening.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Side: Interactive Form */}
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 uppercase tracking-wider border-b border-gray-100 pb-4">Transmission Protocol</h3>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FloatingInput id="name" label="Identity (Name)" />
                                    <FloatingInput id="email" label="Return Address (Email)" type="email" />
                                </div>
                                
                                <FloatingInput id="org" label="Organization / Entity" />
                                <FloatingTextArea id="message" label="Payload (Message)" />

                                <div className="pt-4">
                                    <button type="button" className="w-full md:w-auto bg-[#1A1A1A] text-white font-bold py-4 px-10 rounded-lg hover:bg-gray-800 border border-transparent transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group text-sm tracking-widest uppercase">
                                        Transmit <Send size={14} className="group-hover:translate-x-1 transition-transform text-gray-400 group-hover:text-white" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Side: Info Cards */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Info & Support */}
                    <div className="bg-[#1A1A1A] text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden group transition-transform hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8"></div>
                        
                        <div className="relative z-10">
                             <div className="flex items-center gap-3 mb-6">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-wider">Communication Channels</h3>
                             </div>

                             <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">General Inquiries</p>
                                    <a href="mailto:info@genovotech.com" className="text-lg font-bold hover:text-gray-300 transition-colors">info@genovotech.com</a>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Technical Support</p>
                                    <a href="mailto:support@genovotech.com" className="text-lg font-bold hover:text-gray-300 transition-colors">support@genovotech.com</a>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Leadership Direct */}
                    <div className="bg-white text-[#1A1A1A] rounded-[2rem] p-8 shadow-lg border border-gray-100 group transition-transform hover:-translate-y-1">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gray-100 p-2 rounded-lg">
                                <Shield size={20} className="text-[#1A1A1A]" />
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-wider">Leadership Nodes</h3>
                         </div>

                         <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">CEO / Founder</p>
                                    <p className="font-bold text-sm">Oluwatosin A. Afolabi</p>
                                </div>
                                <a href="mailto:afolabi@genovotech.com" className="text-xs bg-[#1A1A1A] text-white px-3 py-1 rounded hover:bg-gray-800 transition">Connect</a>
                            </div>
                             <div className="flex justify-between items-center pt-1">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">CTO / Co-Founder</p>
                                    <p className="font-bold text-sm">Adegbitẹ Ifeoluwa</p>
                                </div>
                                <a href="mailto:ifeoluwapo@genovotech.com" className="text-xs bg-[#1A1A1A] text-white px-3 py-1 rounded hover:bg-gray-800 transition">Connect</a>
                            </div>
                         </div>
                    </div>

                    {/* Global Presence */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 relative overflow-hidden group transition-transform hover:-translate-y-1">
                         <div className="flex items-center gap-2 mb-6">
                            <Globe className="text-[#1A1A1A]" size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Global Node</span>
                         </div>

                         <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                             Genovo operates as a decentralized collective with roots in Africa and nodes globally.
                         </p>

                         <div className="flex flex-wrap gap-3">
                             <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                 <Clock size={14} className="text-gray-400" />
                                 <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Remote First</span>
                             </div>
                             <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                                 <MessageSquare size={14} className="text-gray-400" />
                                 <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Async Sync</span>
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