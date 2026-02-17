import React from 'react';

const Stats: React.FC = () => {
  const statistics = [
    { label: 'Impressions / Month', value: '150B+' },
    { label: 'Active Domains', value: '2.5M+' },
    { label: 'Network Latency', value: '< 10ms' },
    { label: 'Client Growth', value: '42%' },
  ];

  return (
    <section className="py-12 relative z-20">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-14 border-white/5 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {statistics.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 group">
                <p className="text-4xl md:text-5xl font-black font-orbitron text-white transition-premium group-hover:text-indigo-400 group-hover:translate-x-1">
                  {stat.value}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-px bg-indigo-500/50 hidden lg:block" />
                  <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.25em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;