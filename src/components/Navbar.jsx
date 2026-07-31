import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function close() { setMenuOpen(false); }

  return (
    <>
      {/* Floating pill */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="w-full max-w-3xl">
          <div className="
            flex items-center justify-between gap-4
            rounded-2xl border border-white/[0.1]
            bg-[#030712]/80 backdrop-blur-xl
            px-4 py-2.5 shadow-xl shadow-black/30
          ">
            {/* Logo */}
            <a
              href="#"
              onClick={close}
              className="text-base font-black tracking-tight text-white shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg px-1"
            >
              Lume<span className="text-amber-500">Systems</span>
            </a>

            {/* Desktop links — centered */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    px-4 py-2 rounded-xl text-sm text-slate-400 font-medium
                    hover:text-white hover:bg-white/[0.06]
                    transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#contact"
                className="
                  hidden md:inline-flex items-center rounded-xl
                  bg-amber-500 px-4 py-2 text-xs font-bold text-white tracking-wide
                  hover:bg-amber-400 active:bg-amber-600 transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
                "
              >
                Start a Project
              </a>

              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen((v) => !v)}
                className="
                  md:hidden flex h-8 w-8 items-center justify-center rounded-lg
                  text-slate-400 hover:text-white hover:bg-white/[0.08]
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                "
              >
                {menuOpen ? (
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown — attached below pill */}
          {menuOpen && (
            <nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              className="
                md:hidden mt-2 rounded-2xl border border-white/[0.1]
                bg-[#030712]/95 backdrop-blur-xl shadow-xl shadow-black/30
                overflow-hidden
              "
            >
              <ul role="list" className="p-2 space-y-0.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-1">
                  <a
                    href="#contact"
                    onClick={close}
                    className="block rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-white text-center hover:bg-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
                  >
                    Start a Project
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={close}
        />
      )}
    </>
  );
}
