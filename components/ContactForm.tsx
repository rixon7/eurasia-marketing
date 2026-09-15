'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? 'success' : 'error');
    // Fired only on a real successful submit (server confirmed the lead
    // was captured), not on click — a click alone doesn't mean the form
    // was valid or the request succeeded. 'generate_lead' is GA4's own
    // recommended event name for this.
    if (res.ok) trackEvent('generate_lead', { event_category: 'lead_generation', method: 'contact_form' });
  }

  if (status === 'success') {
    return (
      <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-semibold text-primary dark:text-dark-text mb-2">Thanks for reaching out!</h3>
        <p className="text-muted dark:text-dark-muted">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-8 shadow-sm space-y-4 sm:space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-dark-text mb-1.5">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light dark:border-border-dark bg-sky dark:bg-dark-surface text-primary dark:text-dark-text placeholder:text-muted/50 dark:placeholder:text-dark-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-dark-text mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light dark:border-border-dark bg-sky dark:bg-dark-surface text-primary dark:text-dark-text placeholder:text-muted/50 dark:placeholder:text-dark-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-primary dark:text-dark-text mb-1.5">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="How can we help?"
          className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light dark:border-border-dark bg-sky dark:bg-dark-surface text-primary dark:text-dark-text placeholder:text-muted/50 dark:placeholder:text-dark-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-dark-text mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          required
          rows={5}
          className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light dark:border-border-dark bg-sky dark:bg-dark-surface text-primary dark:text-dark-text placeholder:text-muted/50 dark:placeholder:text-dark-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/30 resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly at info@eurasiamarketing.com</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-3.5 bg-primary dark:bg-accent-blue text-white rounded-[var(--radius-md)] text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message →'}
      </button>
    </form>
  );
}
