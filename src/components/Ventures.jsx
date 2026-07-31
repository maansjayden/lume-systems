import { useInView } from '../hooks/useInView';

const VENTURES = [
  {
    id: 'netgrade',
    title: 'Netgrade',
    subtitle: 'Passive Security Posture Scanner',
    badge: 'Flagship Build · The Blueprint Hackathon 2026',
    isFlagship: true,
    description: 'A passive security posture scanner built with a FastAPI backend and React frontend. Executes 7 risk audits across email spoofing (SPF/DMARC), TLS/SSL ciphers, and security headers.',
    tech: ['FastAPI', 'React', 'Railway', 'Cloudflare Rate Limiting', 'ElevenLabs API', 'PyTest (100% Coverage)'],
    highlights: [
      'Managed post-deployment infrastructure via Railway with custom subdomains and Cloudflare proxy rate-limiting.',
      'Achieved 100% test coverage across backend test suites with 450+ automated unit & integration tests.',
      'Integrated ElevenLabs API for instant AI-synthesized audio accessibility reports.'
    ],
    links: {
      live: 'https://netgrade.certifa.net',
      video: 'https://youtu.be/6OR8dHQXiN4',
      github: 'https://github.com/maansjayden/netgrade',
      deck: 'https://github.com/maansjayden/netgrade/blob/main/docs/PRESENTATION_DECK.md'
    }
  },
  {
    id: 'genome-guardian',
    title: 'Genome Guardian Console',
    subtitle: 'Bio-Security Alert & Diagnostic System',
    badge: 'Global AI Hackathon Build',
    isFlagship: false,
    description: 'A full-stack clinical alert console built under a strict hackathon deadline. Ingests raw .fasta genomic sequences to identify antimicrobial resistance markers (mecA, NDM-1).',
    tech: ['FastAPI', 'React', 'Python', 'EUCAST v14.0', 'Audio Synthesis', 'Docker'],
    highlights: [
      'Engineered React frontend and FastAPI backend biosecurity pipeline in under 5 seconds diagnostic alert latency.',
      'Maps genetic mutation profiles against EUCAST v14.0 susceptibility matrices for immediate clinical warnings.',
      'Generates AI-synthesized clinical audio briefings and real-time medical literature fallback search.'
    ],
    links: {
      live: 'https://genome-sentinel.lovable.app/',
      video: 'https://github.com/maansjayden/genome-guardian-console#video-demonstration',
      github: 'https://github.com/maansjayden/genome-guardian-console'
    }
  },
  {
    id: 'reo-systems',
    title: 'REO Systems',
    subtitle: 'AI Real Estate Operating System',
    badge: 'Joint Venture B2B SaaS',
    isFlagship: false,
    description: 'A B2B SaaS CRM built for real estate agencies utilizing vector embeddings and semantic AI to match clients to properties based on intent, while automating lead pipelines and eligibility guardrails.',
    tech: ['FastAPI', 'Next.js 15', 'PostgreSQL', 'pgvector', 'Gemini API', 'Docker', 'TypeScript'],
    highlights: [
      'Semantic property-client matching using 384-dimensional vector embeddings (all-MiniLM-L6-v2).',
      'Automated eligibility guardrails built into backend pipelines flagging documentation gaps prior to contact.',
      'Kanban lead funnel coupled with one-click social media distribution and content synthesis.'
    ],
    links: {
      live: 'https://reosystems.eu',
      github: 'https://github.com/maansjayden/real-estate-crm'
    }
  },
  {
    id: 'lume-docs',
    title: 'Lume Docs',
    subtitle: 'Universal Document Converter',
    badge: 'Production Ingestion Pipeline',
    isFlagship: false,
    description: 'Universal document converter web application featuring React drop-zone interfaces and FastAPI backend buffer streaming, built for zero-persistence data security.',
    tech: ['FastAPI', 'React', 'Buffer Streaming', 'SEO Configurations', 'POPIA Protocols'],
    highlights: [
      'Built with React drop-zone interfaces and FastAPI backend logic handling multi-format conversion pipelines.',
      'Implemented production-ready SEO configurations, meta tags, and structured schema markup.',
      'Architected zero-persistence in-memory buffer processing streams to ensure strict POPIA compliance.'
    ],
    links: {
      github: 'https://github.com/maansjayden/lume-systems',
      live: 'https://lumesystems.co.za'
    }
  },
  {
    id: 'lume-pwa',
    title: 'LUME PWA',
    subtitle: 'AI Accessibility Super-App',
    badge: 'Voice-First Assistive App',
    isFlagship: false,
    description: 'Audio-first Progressive Web App designed to empower visually impaired individuals with real-time hazard detection and edge-AI text summarization.',
    tech: ['React', 'Vite', 'Gemini 2.5 Flash', 'Picovoice Porcupine', 'WCAG AAA'],
    highlights: [
      'Voice-activated wake word ("Porcupine") for hands-free physical object and hazard detection.',
      'Real-time object mapping and hazard alerts powered by Gemini 2.5 Flash API proxy.',
      'Extreme contrast UI conforming strictly to WCAG 2.2 AAA accessibility standards.'
    ],
    links: {
      github: 'https://github.com/maansjayden/Lume-AI'
    }
  }
];

export default function Ventures() {
  const [headerRef, headerInView] = useInView();

  return (
    <section
      id="ventures"
      aria-labelledby="ventures-heading"
      className="bg-[#030712] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05]"
    >
      <div className="mx-auto max-w-7xl">
        <header
          ref={headerRef}
          className="mb-16 max-w-3xl"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500 mb-4">
            Engineered Ecosystem &amp; Products
          </p>
          <h2
            id="ventures-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.08] mb-5"
          >
            Flagship Builds &amp; Security Tools
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A showcase of production software, passive security scanners, biosecurity tools, and SaaS platforms engineered by Lume Systems.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {VENTURES.map((item, idx) => (
            <article
              key={item.id}
              className={`
                rounded-2xl border p-8 sm:p-10 transition-all duration-300
                ${
                  item.isFlagship
                    ? 'lg:col-span-12 border-amber-500/40 bg-amber-500/[0.03] shadow-[0_0_40px_rgba(245,158,11,0.05)]'
                    : idx === 1 || idx === 2
                    ? 'lg:col-span-6 border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    : 'lg:col-span-4 border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                }
              `}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  {item.subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-amber-400 font-bold mt-0.5">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
                {item.links.live && (
                  <a
                    href={item.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-amber-400 transition-colors"
                  >
                    Live App
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
                {item.links.video && (
                  <a
                    href={item.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-500/20 border border-purple-500/40 px-4 py-2.5 text-xs font-bold text-purple-300 hover:bg-purple-500 hover:text-white transition-colors"
                  >
                    Video Demo
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </a>
                )}
                {item.links.deck && (
                  <a
                    href={item.links.deck}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 px-4 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500 hover:text-black transition-colors"
                  >
                    Presentation Deck
                  </a>
                )}
                {item.links.github && (
                  <a
                    href={item.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-300 hover:bg-white hover:text-black transition-colors"
                  >
                    GitHub Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
