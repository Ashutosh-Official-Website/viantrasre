import React from 'react';
import { Globe, Shield, TrendingUp, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative z-10 glass-card rounded-[3.5rem] overflow-hidden border-white/10 aspect-[4/5]">
                 <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Network Infrastructure" 
                    className="w-full h-full object-cover opacity-50 transition-premium group-hover:scale-105 group-hover:opacity-70" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12 space-y-3">
                   <p className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Strategic Vision</p>
                   <h4 className="text-3xl font-black font-orbitron text-white leading-tight uppercase">
                     BEYOND <br /> DATA POINTS.
                   </h4>
                 </div>
              </div>
              {/* Artistic Glow */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-600/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-600/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px w-12 bg-indigo-500" />
                <h2 className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs">Our Mission</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black font-orbitron text-white uppercase leading-tight">
                TRANSPARENT <br /> INTELLIGENCE.
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-light">
                Founded on the principles of precision and total transparency, Viantras bridges the divide between abstract technology and high-impact business growth. We empower global brands to master the programmatic landscape.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: Globe, title: 'Global Reach', text: 'Seamlessly serving high-value audiences across 180+ countries.' },
                { icon: Shield, title: 'Brand Safety', text: 'Advanced IVT protection and curated premium inventory whitelisting.' },
                { icon: TrendingUp, title: 'Client Growth', text: 'Strategic partnership models focused on long-term scalability.' },
                { icon: Cpu, title: 'Unified Stack', text: 'Integrated platform managing the entire programmatic lifecycle.' },
              ].map((item, i) => (
                <div key={i} className="flex space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 glass-card rounded-2xl flex items-center justify-center border-indigo-500/20 shadow-lg">
                    <item.icon className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-lg tracking-tight uppercase">{item.title}</h5>
                    <p className="text-sm text-slate-500 leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;