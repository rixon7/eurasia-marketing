/**
 * Ported verbatim from
 * ~/Studio/clients/moveeasyme/site/src/lib/stat-format.ts.
 *
 * Splits a free-text stat like "500+", "3×", "95%" into a leading prefix,
 * the numeric portion to animate, and a trailing suffix — so a stat tile
 * can count up the number while keeping the rest of the text static. Pure/
 * no client-only APIs, so it lives in its own plain module rather than
 * inside counter.tsx (a 'use client' file) — a server component calling
 * this directly errors at build time if it's imported from a 'use client'
 * module, since Next.js's RSC boundary disallows *calling* a plain
 * function (as opposed to *rendering* a component) from a client module on
 * the server.
 */
export function parseStatValue(raw: string): { prefix: string; number: number | null; suffix: string } {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: raw, number: null, suffix: '' };

  const [, prefix, numberPart, suffix] = match;
  const number = Number(numberPart.replace(/,/g, ''));
  return { prefix, number: Number.isFinite(number) ? number : null, suffix };
}
