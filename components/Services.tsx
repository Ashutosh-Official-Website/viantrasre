import React from 'react';
import { Target, BarChart, Users, Laptop, ShieldCheck, Palette } from 'lucide-react';

const services = [
  {
    title: 'Programmatic Buying',
    desc: 'High-frequency automated bidding across premium global supply sources with pinpoint audience accuracy.',
    icon: Target,
    color: 'from-indigo-600 to-blue-500',
  },
  {
    title: 'Precision Targeting',
    desc: 'Sophisticated behavioral and contextual mapping to ensure your narrative finds its optimal recipient.',
    icon: Users,
    color: 'from-cyan-600 to-teal-500',
  },
  {
    title: 'Performance Optimization',
    desc: 'Continuous machine learning loops that refine campaign parameters in real-time to maximize ROI.',
    icon: BarChart,
    color: 'from-purple-600 to-indigo-500',
  },
  {
    title: 'Omnichannel Reach',
    desc: 'Unified distribution across mobile, desktop, CTV, and DOOH for consistent global presence.',
    icon: Laptop,
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Brand Integrity',
    desc: 'Advanced fraud detection and safety filters to maintain a secure and reliable advertising environment.',
    icon: ShieldCheck,
    color: 'from-rose-600 to-pink-500',
  },
  {
    title: 'Dynamic Creative',
    desc: 'Automated creative adaptation based on real-time audience signals and environment factors.',
    icon: Palette,
    color: 'from-amber-600 to-orange-500',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-indigo-500" />
              <h2 className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs">Service Spectrum</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black font-orbitron text-white leading-tight">
              PRECISION <br /> 
              SYSTEMS.
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed text-lg font-light">
            Our modular solutions are engineered to solve the most complex challenges in modern digital distribution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-[2.5rem] glass-card transition-premium hover:-translate-y-2 hover:border-indigo-500/40 relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-8 shadow-xl transition-premium group-hover:scale-110 group-hover:rotate-3`}>
                <s.icon className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4 font-orbitron text-white transition-premium group-hover:text-indigo-400">
                {s.title}
              </h4>
              <p className="text-slate-400 leading-relaxed font-light">
                {s.desc}
              </p>
              
              {/* Subtle hover effect */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-indigo-600/5 group-hover:to-indigo-600/10 rounded-tl-full transition-premium pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;