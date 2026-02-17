import React from 'react';
import { Send, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass-card rounded-[3.5rem] overflow-hidden border-white/10 shadow-2xl relative">
          <div className="grid lg:grid-cols-12">
            {/* Info Side */}
            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-700 to-indigo-900 p-12 md:p-16 text-white flex flex-col justify-between">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black font-orbitron leading-tight uppercase">
                    SYSTEM <br /> INQUIRY.
                  </h3>
                  <p className="text-indigo-100/70 font-light leading-relaxed">
                    Ready to initialize your next growth phase? Our strategic engineers are on standby to architect your custom ecosystem.
                  </p>
                </div>

                <div className="space-y-8 pt-8 border-t border-white/10">
                  <div className="flex items-start space-x-5">
                    <MapPin className="w-6 h-6 text-indigo-300 mt-1" />
                    <div className="space-y-1">
                      <p className="font-bold text-sm uppercase tracking-widest">Global Base</p>
                      <p className="text-indigo-100/60 text-sm">Central District, Tech Plaza <br /> London, EC2V 6BT, UK</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-5">
                    <Mail className="w-6 h-6 text-indigo-300" />
                    <div className="space-y-1">
                      <p className="font-bold text-sm uppercase tracking-widest">Direct Channel</p>
                      <p className="text-indigo-100/60 text-sm">partnerships@viantras.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-5">
                    <Globe className="w-6 h-6 text-indigo-300" />
                    <div className="space-y-1">
                      <p className="font-bold text-sm uppercase tracking-widest">Global Network</p>
                      <p className="text-indigo-100/60 text-sm">24/7 Operations Support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-12 flex space-x-4">
                {['LinkedIn', 'Twitter', 'Platform'].map(s => (
                  <span key={s} className="px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-indigo-600 transition-premium cursor-pointer">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7 p-12 md:p-16 bg-slate-950/40 backdrop-blur-xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Operator Name</label>
                    <input 
                      type="text" 
                      placeholder="Ident Name" 
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-premium" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Secure Email</label>
                    <input 
                      type="email" 
                      placeholder="address@domain.com" 
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-premium" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Strategic Sector</label>
                  <select className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-indigo-500 transition-premium cursor-pointer">
                    <option className="bg-slate-900">E-commerce Vertical</option>
                    <option className="bg-slate-900">Financial Logistics</option>
                    <option className="bg-slate-900">Enterprise Agency</option>
                    <option className="bg-slate-900">High-Growth Startup</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Mission Parameters</label>
                  <textarea 
                    rows={4} 
                    placeholder="Provide brief objective context..." 
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-premium resize-none" 
                  />
                </div>

                <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-premium shadow-2xl shadow-indigo-600/30 flex items-center justify-center space-x-3 group uppercase tracking-widest text-sm">
                  <span>SEND PROTOCOL INQUIRY</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;