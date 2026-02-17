import React from 'react';
import { ChevronRight, ShieldCheck, Zap, Crosshair, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Advanced AdTech Protocol • v2.0.4</span>
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black font-orbitron leading-[1.1] tracking-tight text-white">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-500 animate-gradient-x">
                PRECISION
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Viantras develops high-performance programmatic infrastructure designed to connect premium brands with global audiences through real-time AI logic and deep data intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-premium shadow-xl shadow-indigo-600/20 flex items-center justify-center group">
                <span>VIEW SOLUTIONS</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-slate-900/40 hover:bg-slate-800 text-slate-200 border border-slate-800/60 font-bold rounded-xl transition-premium flex items-center justify-center backdrop-blur-sm">
                OUR TECHNOLOGY
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-800/50 max-w-xl">
              <div className="space-y-2">
                <Zap className="text-indigo-500 w-5 h-5" />
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Performance</p>
                <p className="text-lg font-bold font-orbitron text-white">&lt; 10ms</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-cyan-500 w-5 h-5" />
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Integrity</p>
                <p className="text-lg font-bold font-orbitron text-white">IVT Proof</p>
              </div>
              <div className="space-y-2">
                <Crosshair className="text-indigo-400 w-5 h-5" />
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Accuracy</p>
                <p className="text-lg font-bold font-orbitron text-white">99.9%</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative w-full aspect-square animate-float">
              {/* Complex Visual Ornament */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow" />
              
              {/* Main "Dashboard" Frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] glass-card rounded-[3rem] rotate-6 border-white/10 z-20 flex flex-col p-8 space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <BarChart3 className="text-indigo-400 w-5 h-5" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-1/3 bg-slate-700/50 rounded-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex flex-col justify-center px-4">
                      <div className="h-1.5 w-1/2 bg-indigo-400/30 rounded-full mb-2" />
                      <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                    </div>
                    <div className="h-20 bg-slate-800/30 rounded-2xl border border-slate-700/20 flex flex-col justify-center px-4">
                      <div className="h-1.5 w-1/2 bg-slate-600/30 rounded-full mb-2" />
                      <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="h-32 bg-slate-950/40 rounded-2xl border border-white/5 relative overflow-hidden p-4">
                    <div className="absolute inset-0 flex items-end justify-between px-6 pb-2">
                      {[35, 65, 45, 85, 55, 75, 50, 95, 40, 60].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-2 bg-gradient-to-t from-indigo-600/40 to-cyan-400/60 rounded-t-sm transition-all duration-1000"
                          style={{ height: `${h}%` }} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Frames */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] glass-card rounded-[3rem] -rotate-3 border-white/5 z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] border border-indigo-500/10 rounded-[3rem] -rotate-12 z-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;