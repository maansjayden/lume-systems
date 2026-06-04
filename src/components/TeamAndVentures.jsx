import { useInView } from '../hooks/useInView';

const TEAM = [
  {
    id: 'jayden',
    name: 'Jayden Maans',
    role: 'Founder & Lead Engineer',
    bio: 'Full-stack engineer and founder of Lume Systems. Jayden architects scalable digital solutions with an uncompromising focus on performance and inclusive design.',
    href: 'https://jayden.lumesystems.co.za',
    linkLabel: "Visit Jayden's portfolio at jayden.lumesystems.co.za",
    linkedin: 'https://linkedin.com/in/jaydenmaans',
    avatarUrl: 'https://ui-avatars.com/api/?name=Jayden+Maans&size=200&bold=true&background=1d4ed8&color=ffffff',
    avatarAlt: 'Headshot placeholder for Jayden Maans, Founder and Lead Engineer at Lume Systems',
    contact: null,
  },
  {
    id: 'viento',
    name: 'Viento Huijser',
    role: 'Strategic Advisor',
    company: 'Owner · VRH Consultancy',
    bio: 'Business strategist and owner of VRH Consultancy. Viento guides Lume Systems\' commercial direction, partnership development, and international market positioning.',
    href: 'https://vrhconsultancy.nl',
    linkLabel: 'Visit VRH Consultancy website',
    linkedin: null,
    avatarUrl: 'https://ui-avatars.com/api/?name=Viento+Huijser&size=200&bold=true&background=0f766e&color=ffffff',
    avatarAlt: 'Headshot placeholder for Viento Huijser, Strategic Advisor and Owner of VRH Consultancy',
    contact: {
      phone: '+31 6 55062440',
      phoneTel: '+31655062440',
      email: 'Vientohuijser@vrhconsultancy.nl',
    },
  },
];

function PhoneIcon() {
  return (
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function TeamCard({ member }) {
  return (
    <article
      aria-labelledby={`team-name-${member.id}`}
      className="
        group relative flex flex-col gap-6 rounded-2xl p-8
        border border-white/[0.07] bg-white/[0.02]
        hover:bg-white/[0.04] hover:border-white/[0.12]
        transition-all duration-300
      "
    >
      <div className="flex items-center gap-4">
        <img
          src={member.avatarUrl}
          alt={member.avatarAlt}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3 id={`team-name-${member.id}`} className="text-base font-bold text-white tracking-tight">
            {member.name}
          </h3>
          <p className="text-sm text-amber-400 font-medium mt-0.5">{member.role}</p>
          {member.company && <p className="text-xs text-slate-600 mt-0.5">{member.company}</p>}
        </div>
      </div>

      <div className="h-px bg-white/[0.05]" aria-hidden="true" />

      <p className="text-sm text-slate-500 leading-relaxed flex-grow">{member.bio}</p>

      {member.contact && (
        <address className="not-italic space-y-2 text-xs">
          <a
            href={`tel:${member.contact.phoneTel}`}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
          >
            <PhoneIcon />
            {member.contact.phone}
          </a>
          <a
            href={`mailto:${member.contact.email}`}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded break-all"
          >
            <MailIcon />
            {member.contact.email}
          </a>
        </address>
      )}

      <div className="mt-auto flex items-center gap-2 flex-wrap">
        {member.href && (
          <a
            href={member.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={member.linkLabel}
            className="
              inline-flex items-center gap-2 rounded-lg
              border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300
              hover:bg-amber-500 hover:text-white hover:border-amber-500
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
              transition-all duration-200
            "
          >
            {member.id === 'viento' ? 'Visit VRH Consultancy' : 'View Portfolio'}
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="
              inline-flex items-center gap-2 rounded-lg
              border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300
              hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
              transition-all duration-200
            "
          >
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}

function JointVentureCard() {
  return (
    <article
      aria-labelledby="jv-heading"
      className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-10 sm:p-12"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative flex flex-col sm:flex-row gap-8 items-start">
        <div
          aria-hidden="true"
          className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-2xl font-black"
        >
          R
        </div>

        <div className="flex-grow space-y-4">
          <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            Joint Venture
          </span>

          <h3 id="jv-heading" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            REOS Systems
          </h3>
          <p className="text-sm text-slate-500 font-medium">
            Co-Founded by Jayden Maans &amp; Viento Huijser
          </p>
          <p className="text-slate-400 leading-relaxed max-w-xl text-sm">
            REOS is a next-generation customer relationship management platform built for modern,
            distributed teams — combining Lume Systems engineering precision with VRH Consultancy
            commercial insight.
          </p>

          <a
            href="https://reosystems.eu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit REOS Systems — opens in a new tab"
            className="
              inline-flex items-center gap-2 rounded-lg
              bg-amber-500 px-5 py-2.5 text-sm font-bold text-white
              hover:bg-amber-400 active:bg-amber-600
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
              transition-colors duration-200
            "
          >
            Visit REOS Systems
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
  );
}

export default function TeamAndVentures() {
  const [headerRef, headerInView] = useInView();

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="bg-[#030712] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-20">
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
            The People
          </p>
          <h2 id="team-heading" className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.08] mb-5">
            Leadership &amp; Ecosystem
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A lean, expert team united by a commitment to building technology that works for everyone.
          </p>
        </header>

        <div>
          <h3 className="sr-only">Leadership team</h3>
          <ul role="list" className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {TEAM.map((member) => (
              <li key={member.id}>
                <TeamCard member={member} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="sr-only">Joint ventures</h3>
          <JointVentureCard />
        </div>
      </div>
    </section>
  );
}
