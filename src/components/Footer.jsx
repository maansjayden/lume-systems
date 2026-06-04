import { useState, useRef, useEffect } from 'react';

const A11Y_OPTIONS = [
  {
    id: 'high-contrast',
    label: 'High Contrast',
    description: 'Increases colour contrast for better readability',
    cssClass: 'high-contrast',
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20V2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'large-text',
    label: 'Larger Text',
    description: 'Increases base font size across the page',
    cssClass: 'large-text',
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    id: 'reduce-motion',
    label: 'Reduce Motion',
    description: 'Minimises animations and transitions',
    cssClass: 'motion-reduce',
    icon: (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="10" y1="15" x2="10" y2="9" />
        <line x1="14" y1="15" x2="14" y2="9" />
      </svg>
    ),
  },
];

function A11yWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState({});
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); buttonRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.querySelector('button')?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (!panelRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target))
        setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [open]);

  function toggle(opt) {
    setActive((prev) => {
      const next = { ...prev, [opt.id]: !prev[opt.id] };
      document.documentElement.classList.toggle(opt.cssClass, next[opt.id]);
      return next;
    });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Accessibility options"
          className="w-72 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/60 p-5 space-y-4"
          style={{ animation: 'fadeInUp 0.18s ease-out' }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white">Accessibility Options</h2>
            <button
              type="button"
              onClick={() => { setOpen(false); buttonRef.current?.focus(); }}
              aria-label="Close accessibility options"
              className="rounded-lg p-1 text-slate-400 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-colors"
            >
              <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul role="list" className="space-y-2">
            {A11Y_OPTIONS.map((opt) => {
              const on = !!active[opt.id];
              return (
                <li key={opt.id}>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={on}
                    onClick={() => toggle(opt)}
                    className={`
                      w-full flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm text-left
                      focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
                      focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                      transition-all duration-150
                      ${on
                        ? 'border-amber-500 bg-amber-500/20 text-white'
                        : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                      }
                    `}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className={on ? 'text-amber-400' : 'text-slate-500'}>{opt.icon}</span>
                      <span className="font-medium">{opt.label}</span>
                    </span>
                    {/* Toggle pill */}
                    <span aria-hidden="true"
                      className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 transition-colors duration-200 ${on ? 'border-amber-500 bg-amber-500' : 'border-slate-600 bg-slate-700'}`}>
                      <span className={`absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white shadow transition-transform duration-200 ${on ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="text-xs text-slate-500 border-t border-slate-800 pt-3">
            Preferences apply to this session only.
          </p>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
        className="
          flex h-14 w-14 items-center justify-center rounded-full
          bg-amber-500 text-white shadow-lg shadow-amber-900/40
          hover:bg-amber-400 active:bg-amber-600
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
          focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
          transition-all duration-200
        "
      >
        {/* Universal Accessibility Symbol */}
        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <circle cx="12" cy="4" r="2" />
          <path d="M19 11H5a1 1 0 0 0 0 2h5.5l-1.8 6.3a1 1 0 1 0 1.93.54L12 15l1.37 4.84a1 1 0 1 0 1.93-.54L13.5 13H19a1 1 0 0 0 0-2z" />
          <path d="M12 7c-1 0-2.5.5-3.5 1.5" strokeLinecap="round" />
        </svg>
        <span className="sr-only">{open ? 'Close' : 'Open'} accessibility options</span>
      </button>
    </div>
  );
}

/* ─── Contact link helper ─────────────────────────────────── */
function FooterLink({ href, target, rel, children }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="
        inline-flex items-center gap-2.5 text-sm text-slate-300
        underline underline-offset-4 decoration-slate-700
        hover:text-white hover:decoration-blue-400
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
        focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded
        transition-colors duration-200
      "
    >
      {children}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-500 shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-500 shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ─── Footer ────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <>
      <footer
        role="contentinfo"
        aria-label="Lume Systems site footer"
        className="bg-[#030712] border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="space-y-4">
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Lume<span className="text-amber-500">Systems</span>
                </span>
                <p className="text-xs text-slate-500 mt-0.5 font-medium uppercase tracking-widest">
                  (Pty) Ltd
                </p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Empowering businesses through inclusive, high-performance digital solutions —
                built for everyone.
              </p>
              <p className="text-xs text-slate-600">REG&nbsp;#&nbsp;2026/150953/07</p>
              <a
                href="https://linkedin.com/in/jaydenmaans"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jayden Maans on LinkedIn"
                className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
              >
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-500">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                linkedin.com/in/jaydenmaans
              </a>
            </div>

            {/* Quick contact */}
            <nav aria-label="Footer contact links">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">
                Quick Contact
              </h2>
              <ul role="list" className="space-y-3">
                <li>
                  <FooterLink href="https://wa.me/27737220854" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="tel:+27737220854">
                    <PhoneIcon />073 722 0854
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="mailto:info@lumesystems.co.za">
                    <MailIcon /><span className="break-all">info@lumesystems.co.za</span>
                  </FooterLink>
                </li>
              </ul>
            </nav>

            {/* Ecosystem */}
            <nav aria-label="Ecosystem links">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">
                Ecosystem
              </h2>
              <ul role="list" className="space-y-3 text-sm">
                <li>
                  <FooterLink href="https://reosystems.eu" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-500 shrink-0">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    REOS Systems
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://vrhconsultancy.nl" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-500 shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    VRH Consultancy
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://linkedin.com/in/jaydenmaans" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500 shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Jayden on LinkedIn
                  </FooterLink>
                </li>
              </ul>
            </nav>

            {/* Location + a11y badge */}
            <div className="space-y-5">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                  Location
                </h2>
                <address className="not-italic text-sm text-slate-400 space-y-1">
                  <p className="font-semibold text-slate-300">South Africa</p>
                  <p className="text-xs text-slate-500">Registration No. 2026/150953/07</p>
                </address>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 px-4 py-3 space-y-1">
                <p className="text-xs font-semibold text-amber-400">Accessibility Commitment</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Designed with strict adherence to{' '}
                  <abbr title="Web Content Accessibility Guidelines version 2.2, Level AAA">WCAG 2.2 AAA</abbr>
                  {' '}&#8226;{' '}Built in React with Vite
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-500">
              &copy; 2026 Lume Systems (Pty) Ltd. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-600">
              Powering assistive solutions at Lume Systems{' '}
              <span aria-hidden="true">|</span>{' '}
              Made with <span role="img" aria-label="love">❤️</span> for Accessibility
            </p>
          </div>
        </div>
      </footer>

      <A11yWidget />
    </>
  );
}
