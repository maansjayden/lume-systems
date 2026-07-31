export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Animated floating orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-[0.12]"
          style={{
            width: 'min(600px, 120vw)',
            height: 'min(600px, 120vw)',
            top: '-10%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.6) 0%, transparent 70%)',
            animation: 'lume-float 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.08]"
          style={{
            width: 'min(500px, 100vw)',
            height: 'min(500px, 100vw)',
            bottom: '-5%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(217,119,6,0.7) 0%, transparent 70%)',
            animation: 'lume-float 16s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full opacity-[0.06]"
          style={{
            width: 300,
            height: 300,
            top: '40%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(251,191,36,0.8) 0%, transparent 70%)',
            animation: 'lume-float 9s ease-in-out infinite 3s',
          }}
        />
      </div>

      {/* Central radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(217,119,6,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-28 sm:pt-36 pb-24">
        <h1
          id="hero-heading"
          className="text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[4.75rem] font-black tracking-tight sm:leading-[1.04] text-white mb-6"
        >
          We Build{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            }}
          >
            Digital Systems
          </span>{' '}
          That Scale.
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          End-to-end software engineering — AI infrastructure, FastAPI backend microservices,
          passive security tooling, cloud deployments, and WCAG-compliant digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="
              inline-flex items-center justify-center gap-2.5 rounded-xl
              bg-amber-500 px-7 py-3.5 text-sm font-bold text-white tracking-wide
              hover:bg-amber-400 active:bg-amber-600 transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
            "
          >
            Start a Project
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a
            href="#services"
            className="
              inline-flex items-center justify-center gap-2.5 rounded-xl
              border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm
              px-7 py-3.5 text-sm font-bold text-white tracking-wide
              hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
            "
          >
            View Services
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.07] flex flex-wrap justify-center gap-10 sm:gap-16">
          {[
            { value: 'WCAG 2.2 AAA', label: 'Accessibility Standard' },
            { value: 'Enterprise', label: 'Grade Infrastructure' },
            { value: 'South Africa', label: 'Headquartered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-base font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-600 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030712)' }}
      />
    </section>
  );
}
