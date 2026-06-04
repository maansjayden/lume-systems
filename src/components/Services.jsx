import { useInView } from '../hooks/useInView';

const SERVICES = [
  {
    id: 'pwa',
    num: '01',
    title: 'Progressive Web Apps',
    description:
      'Installable, offline-capable web applications that deliver native-grade performance on every device and connection speed.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'enterprise',
    num: '02',
    title: 'Enterprise Software',
    description:
      'Scalable, maintainable systems built to your organisation\'s exact requirements — from internal tooling to customer-facing platforms.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'cloud',
    num: '03',
    title: 'Cloud Infrastructure',
    description:
      'Resilient cloud architecture, CI/CD pipelines, containerisation, and managed hosting designed for security and uptime.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: 'integrations',
    num: '04',
    title: 'APIs & Integrations',
    description:
      'Seamless third-party integrations, RESTful & GraphQL API design, webhook orchestration, and legacy system bridging.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: 'a11y',
    num: '05',
    title: 'Accessibility Audits',
    description:
      'Comprehensive WCAG 2.2 AA/AAA audits, automated testing integration, remediation roadmaps, and assistive-technology QA.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="6" r="1" fill="currentColor" stroke="none" />
        <path d="M8 14s1 2 4 2 4-2 4-2" />
        <line x1="9" y1="11" x2="9.01" y2="11" />
        <line x1="15" y1="11" x2="15.01" y2="11" />
      </svg>
    ),
  },
  {
    id: 'webdesign',
    num: '06',
    title: 'Website Design & Development',
    description:
      'Professional, conversion-focused business websites — from brochure sites to full content-managed platforms — built fast and built to last.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'email',
    num: '07',
    title: 'Email Setup & Hosting',
    description:
      'Professional business email on your own domain — SPF, DKIM, and DMARC configured for reliable delivery, with ongoing hosting and support.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    id: 'google',
    num: '08',
    title: 'Google Business Management',
    description:
      'Google Business Profile setup, optimisation, and ongoing management — keeping your listing accurate, visible, and converting local searches into customers.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 'biz-systems',
    num: '09',
    title: 'Business Systems',
    description:
      'Custom quotation, invoicing, and admin dashboards tailored to your workflow — replacing manual paperwork with fast, professional digital processes.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'hosting',
    num: '10',
    title: 'Domain & Hosting Management',
    description:
      'Domain registration, DNS configuration, SSL certificates, and managed web hosting — everything handled so you never have to think about it.',
    icon: (
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

export default function Services() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#030712] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header
          ref={headerRef}
          className="mb-20 max-w-2xl"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500 mb-4">
            What We Build
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.08] mb-5"
          >
            Core Offerings
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            End-to-end digital solutions engineered for performance, security, and inclusive access.
          </p>
        </header>

        <ul
          ref={gridRef}
          role="list"
          className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]"
          style={{
            opacity: gridInView ? 1 : 0,
            transform: gridInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          {SERVICES.map((service) => (
            <li key={service.id} className="bg-[#030712]">
              <article
                className="group relative h-full flex flex-col gap-5 p-8 transition-all duration-300 hover:bg-white/[0.03]"
                aria-labelledby={`service-title-${service.id}`}
              >
                <span
                  aria-hidden="true"
                  className="text-xs font-mono font-bold text-white/10 group-hover:text-amber-500/40 transition-colors duration-300"
                >
                  {service.num}
                </span>

                <div
                  aria-hidden="true"
                  className="
                    flex h-12 w-12 items-center justify-center rounded-xl
                    bg-white/[0.04] text-slate-400 border border-white/[0.06]
                    group-hover:bg-amber-500/10 group-hover:text-amber-400 group-hover:border-amber-500/20
                    transition-all duration-300
                  "
                >
                  {service.icon}
                </div>

                <div className="flex-grow space-y-2.5">
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-lg font-bold text-white tracking-tight"
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="text-white/10 group-hover:text-amber-500/50 transition-all duration-300 group-hover:translate-x-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-4 h-4">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
