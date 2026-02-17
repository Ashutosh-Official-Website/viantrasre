import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-premium">
                <Zap className="text-white w-6 h-6 fill-white" />
              </div>
              <span className="text-2xl font-black font-orbitron tracking-tighter text-white">
                VIANTRAS
              </span>
            </Link>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm font-light">
              Designing and deploying the next generation of precision AdTech. We specialize in high-performance programmatic ecosystems and global inventory monetization.
            </p>
            <div className="flex space-x-6">
              <Twitter className="w-5 h-5 text-slate-500 hover:text-indigo-400 cursor-pointer transition-premium" />
              <Linkedin className="w-5 h-5 text-slate-500 hover:text-indigo-400 cursor-pointer transition-premium" />
              <Github className="w-5 h-5 text-slate-500 hover:text-indigo-400 cursor-pointer transition-premium" />
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-[0.3em]">Solutions</h5>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><Link to="/services" className="hover:text-indigo-400 transition-premium">Programmatic DSP</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-premium">Yield Optimization</Link></li>
                <li><Link to="/technology" className="hover:text-indigo-400 transition-premium">Core Engine API</Link></li>
                <li><Link to="/technology" className="hover:text-indigo-400 transition-premium">Security Layer</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-[0.3em]">Network</h5>
              <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><Link to="/about" className="hover:text-indigo-400 transition-premium">Global Reach</Link></li>
                <li><Link to="/about" className="hover:text-indigo-400 transition-premium">Career Path</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-premium">Media Assets</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-premium">Strategic Alliances</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-6">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-[0.3em]">Newsletter</h5>
              <div className="space-y-4">
                <p className="text-slate-500 text-xs leading-relaxed">Join 5,000+ AdTech professionals receiving our weekly tech intel.</p>
                <div className="flex bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden p-1 focus-within:border-indigo-500 transition-premium">
                  <input 
                    type="email" 
                    placeholder="Secure Email" 
                    className="bg-transparent px-4 py-2 text-xs text-white placeholder:text-slate-700 focus:outline-none w-full" 
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-500 p-2 rounded-lg transition-premium">
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-slate-600">
             <Globe className="w-3.5 h-3.5" />
             <p className="text-[10px] font-bold uppercase tracking-widest">Global Ops Command Center</p>
          </div>
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Viantras Global Ltd. | System Status: Optimal
          </p>
          <div className="flex space-x-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-premium">Privacy</a>
            <a href="#" className="hover:text-white transition-premium">Terms</a>
            <a href="#" className="hover:text-white transition-premium">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;