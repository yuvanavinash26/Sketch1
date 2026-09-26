import React from 'react';

const LOGOS = [
  { name: 'TECHFLOW', symbol: 'TF' },
  { name: 'NEXORA', symbol: 'NX' },
  { name: 'CLOUDLAB', symbol: 'CL' },
  { name: 'DATAVISTA', symbol: 'DV' },
  { name: 'CODEFORGE', symbol: 'CF' },
  { name: 'KINETIX', symbol: 'KX' },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-12 border-y border-[#E5EAF1] bg-white/50 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#64748B]">
          Learners preparing for careers across modern technology teams
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 group transition-opacity hover:opacity-100 cursor-default"
            >
              <div className="w-7 h-7 rounded bg-[#0B1E3D]/5 border border-[#0B1E3D]/10 flex items-center justify-center text-[10px] font-mono font-bold text-[#0B1E3D] group-hover:bg-[#0B1E3D] group-hover:text-[#FFB547] transition-colors">
                {logo.symbol}
              </div>
              <span className="font-display font-bold tracking-widest text-sm text-[#0B1E3D]/70 group-hover:text-[#0B1E3D] transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
