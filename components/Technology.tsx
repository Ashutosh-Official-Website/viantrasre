import React from 'react';
import { Cpu, Server, Database, Network, Globe } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-32 bg-slate-900/20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-cyan-500" />
                <h2 className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-xs">Proprietary Stack</h2>
              </div>
              <h3 className="text-4xl md:text-6xl font-black font-orbitron text-white leading-tight uppercase">
                THE NEURAL <br /> CORE.
              </h3>
            </div>
            
            <p className="text-xl text-slate-400 leading-relaxed font-light italic border-l-2 border-indigo-500/30 pl-6">
              "We've transcended traditional bidding models to create an ecosystem that thinks, predicts, and adapts in microseconds."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: Server, title: 'Edge Grid', text: 'Distributed bidding architecture with presence in 42 global data centers.' },
                { icon: Globe, title: 'Identity Hub', text: 'Privacy-first identification engine resolving billions of cross-device signals.' },
                { icon: Network, title: 'Sync Logic', text: 'Seamless real-time synchronization between supply side and performance targets.' },
                { icon: Cpu, title: 'AI Synthesis', text: 'Self-optimizing machine learning clusters trained on multi-terabyte datasets daily.' },
              ].map((item, i) => (
                <div key={i} className="group space-y-4">
                  <div className="flex items-center space-x-3">
                    <item.icon className="text-cyan-400 w-6 h-6 transition-premium group-hover:scale-125" />
                    <h5 className="font-bold text-white uppercase tracking-widest text-sm">{item.title}</h5>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-premium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex items-center justify-center py-12">
            {/* Visual tech core representation */}
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-cyan-500/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-indigo-400/20 animate-[spin_10s_linear_infinite]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.5)] rotate-45 group">
                   <Cpu className="text-white w-12 h-12 -rotate-45" />
                </div>
              </div>
              
              {/* Floating detail panels */}
              <div className="absolute top-10 -right-4 glass-card p-4 rounded-2xl border-white/10 hidden sm:block animate-float">
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">LIVE DATA SYNC</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-4 glass-card p-5 rounded-2xl border-white/10 hidden sm:block animate-float" style={{ animationDelay: '2s' }}>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">QUERY VOLUME</p>
                   <p className="text-lg font-orbitron text-cyan-400">2.8M req/s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;