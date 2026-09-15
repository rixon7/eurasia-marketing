// Thin wrapper around window.gtag so call sites don't each need to guard
// against gtag not existing yet (blocked by an ad-blocker, or firing
// before the GA4 script has loaded). See components/GoogleAnalytics.tsx
// for where gtag itself is installed.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.('event', name, params);
}
