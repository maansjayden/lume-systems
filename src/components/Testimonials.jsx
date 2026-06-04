import { useInView } from '../hooks/useInView';

const CLIENTS = [
  {
    id: 'hjr',
    name: 'HJR Auto & Panel',
    location: 'Paarl, South Africa',
    href: 'https://hjrgrouppaarl.co.za',
    hrefLabel: 'hjrgrouppaarl.co.za',
    description:
      'Lume Systems built and manages the complete digital presence for HJR Auto & Panel — from their public website and Google Business profile through to internal admin systems, professional quotations, invoicing, and company email infrastructure.',
    services: [
      'Website Design & Development',
      'Google Business Management',
      'Quotation & Invoicing System',
      'Admin Dashboard',
      'Professional Email Setup',
    ],
    accentClass: 'border-amber-500/20 bg-amber-500/[0.04]',
    glowColor: 'rgba(245,158,11,0.08)',
    badgeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  },
  {
    id: 'vrh',
    name: 'VRH Consultancy',
    location: 'Netherlands',
    href: 'https://vrhconsultancy.nl',
    hrefLabel: 'vrhconsultancy.nl',
    description:
      'Lume Systems handles the full hosting infrastructure and professional email setup for VRH Consultancy, ensuring reliable uptime, secure mail delivery, and a polished online presence for their consultancy practice.',
    services: [
      'Web Hosting & Infrastructure',
      'Professional Email Setup',
      'Domain Management',
    ],
    accentClass: 'border-teal-500/20 bg-teal-500/[0.04]',
    glowColor: 'rgba(20,184,166,0.07)',
    badgeClass: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
  },
];

function ClientCard({ client, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <article
        aria-labelledby={`client-${client.id}-heading`}
        className={`relative overflow-hidden rounded-2xl border p-8 sm:p-10 h-full ${client.accentClass}`}
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${client.glowColor} 0%, transparent 70%)` }}
        />

        <div className="relative flex flex-col gap-6 h-full">
          <div className="space-y-3">
            <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${client.badgeClass}`}>
              Featured Client
            </span>

            <div>
              <h3 id={`client-${client.id}-heading`} className="text-2xl font-black text-white tracking-tight">
                {client.name}
              </h3>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                >
                  {client.hrefLabel}
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <span className="text-xs text-slate-600">{client.location}</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">{client.description}</p>
          </div>

          <div className="mt-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Services Delivered
            </p>
            <ul className="space-y-2">
              {client.services.map((service) => (
                <li key={service} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <a
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${client.name} — opens in a new tab`}
              className="
                inline-flex items-center gap-2 rounded-lg mt-2
                bg-amber-500 px-5 py-2.5 text-sm font-bold text-white
                hover:bg-amber-400 active:bg-amber-600
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
                focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
                transition-colors duration-200
              "
            >
              Visit Website
              <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Testimonials() {
  const [headerRef, headerInView] = useInView();

  return (
    <section
      aria-labelledby="clients-heading"
      className="bg-[#030712] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <header
          ref={headerRef}
          className="max-w-2xl"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500 mb-4">
            Our Work
          </p>
          <h2
            id="clients-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.08] mb-5"
          >
            Clients &amp; Projects
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Trusted by businesses across South Africa and beyond to deliver solutions that last.
          </p>
        </header>

        <ul role="list" className="grid gap-6 sm:grid-cols-2">
          {CLIENTS.map((client, i) => (
            <li key={client.id}>
              <ClientCard client={client} delay={i * 150} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
