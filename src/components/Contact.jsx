import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojzvwpj';
const WHATSAPP_NUMBER = '27737220854';

const INPUT_BASE = [
  'w-full rounded-xl bg-white/[0.04] border border-white/[0.08]',
  'text-white placeholder-slate-600 px-4 py-3 text-sm leading-relaxed',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
  'focus-visible:border-amber-500 hover:border-white/[0.15]',
  'transition-colors duration-200',
].join(' ');

const INPUT_ERROR = 'border-red-500/60 focus-visible:ring-red-500';

function ErrorMsg({ id, children }) {
  return (
    <p id={id} role="alert" className="flex items-center gap-1.5 text-xs text-red-400 font-medium">
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {children}
    </p>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function validate() {
    const next = {};
    if (!fields.name.trim()) next.name = 'Please enter your full name.';
    if (!fields.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = 'Please enter a valid email address.';
    if (!fields.message.trim()) next.message = 'Please enter a message.';
    else if (fields.message.trim().length < 10)
      next.message = 'Your message must be at least 10 characters.';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document.getElementById(`contact-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFields({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#030712] py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="h-px bg-white/[0.06] mb-28" aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: copy */}
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-500 mb-4">
            Let's Talk
          </p>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.08] mb-6"
          >
            Start a Project
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-md mb-10">
            Ready to build something extraordinary? Drop us a message and we'll get back to you
            within one business day.
          </p>

          {/* Contact details */}
          <div className="space-y-3 text-sm">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.07]">
                <WhatsAppIcon />
              </span>
              WhatsApp
            </a>
            <a
              href="mailto:info@lumesystems.co.za"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.07]">
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              info@lumesystems.co.za
            </a>
            <a
              href="tel:+27737220854"
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.07]">
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
              </span>
              073 722 0854
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
            {status === 'sending' && 'Sending your message, please wait.'}
            {status === 'success' && 'Your message was sent successfully. We will be in touch soon.'}
            {status === 'error' && 'There was an error sending your message. Please try again.'}
          </div>

          {status === 'success' ? (
            <div
              role="alert"
              className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-8 py-14 text-center"
            >
              <div
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600/10 text-green-400 border border-green-500/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-7 h-7" aria-hidden="true" focusable="false">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-slate-400 text-sm">We'll get back to you within one business day.</p>
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="
                  rounded-lg border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-300
                  hover:bg-white/[0.08] hover:text-white
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
                  transition-all duration-200
                "
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form — send a message to Lume Systems"
              className="space-y-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10"
            >
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Full Name <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name" type="text" name="name" value={fields.name}
                  onChange={handleChange} autoComplete="name" required aria-required="true"
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  aria-invalid={!!errors.name}
                  placeholder="Jane Smith"
                  className={`${INPUT_BASE} ${errors.name ? INPUT_ERROR : ''}`}
                />
                {errors.name && <ErrorMsg id="error-name">{errors.name}</ErrorMsg>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email Address <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email" type="email" name="email" value={fields.email}
                  onChange={handleChange} autoComplete="email" required aria-required="true"
                  aria-describedby={errors.email ? 'error-email' : 'email-hint'}
                  aria-invalid={!!errors.email}
                  placeholder="you@example.com"
                  className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : ''}`}
                />
                <p id="email-hint" className="text-xs text-slate-600">
                  We'll only use this to reply to your message.
                </p>
                {errors.email && <ErrorMsg id="error-email">{errors.email}</ErrorMsg>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message" name="message" rows={6} value={fields.message}
                  onChange={handleChange} required aria-required="true"
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  aria-invalid={!!errors.message}
                  placeholder="Tell us about your project, timeline, and goals…"
                  className={`${INPUT_BASE} resize-y min-h-[120px] ${errors.message ? INPUT_ERROR : ''}`}
                />
                {errors.message && <ErrorMsg id="error-message">{errors.message}</ErrorMsg>}
              </div>

              <p className="text-xs text-slate-600">
                <span aria-hidden="true" className="text-red-400">*</span> Required fields
              </p>

              {status === 'error' && (
                <div role="alert" className="rounded-xl border border-red-500/20 bg-red-950/20 px-4 py-3 text-sm text-red-400">
                  Something went wrong. Email us at{' '}
                  <a href="mailto:info@lumesystems.co.za"
                    className="underline underline-offset-2 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded">
                    info@lumesystems.co.za
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                aria-disabled={status === 'sending'}
                className="
                  w-full flex items-center justify-center gap-2.5 rounded-xl
                  bg-amber-500 px-8 py-4 text-sm font-bold tracking-wide text-white
                  hover:bg-amber-400 active:bg-amber-600
                  focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]
                  disabled:opacity-40 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                {status === 'sending' ? (
                  <>
                    <svg aria-hidden="true" focusable="false" className="w-4 h-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
