/**
 * Extracted out of the old ImageSlider.tsx, which bundled this ticker
 * together with the hero carousel even though they're separate concerns.
 * The three offer strings are preserved verbatim. Retinted from
 * `bg-red-600` to Bento's amber — its designated attention colour — per
 * user decision (red isn't in the palette and read as a foreign element).
 *
 * Previously animated via an inline <style> block injected on every
 * render (a latent CSP hazard). Reuses the `.logo-track` class + `slide`
 * keyframe already in app/globals.css (the same mechanism the platforms
 * logo marquee uses) instead — no client JS, no per-render style tag.
 * `.logo-track:hover { animation-play-state: paused }` (also in
 * globals.css) gives pause-on-hover for free.
 */
const OFFERS = [
  '🔥 50% OFF Marketing Plans – Limited Time Only!',
  '🎁 Free website when you buy an SEO plan for minimum 6 months',
  '🌐 Free website hosting for your first year',
];

export function PromoTicker() {
  const looped = [...OFFERS, ...OFFERS];

  return (
    <div className="overflow-hidden border-y border-highlight/30 bg-highlight-soft">
      <div className="mx-auto flex h-11 max-w-6xl items-center px-6">
        <span className="mr-5 flex-shrink-0 font-mono text-[11px] font-bold uppercase tracking-wider text-highlight">
          Offers
        </span>
        <div className="flex-1 overflow-hidden">
          <div className="logo-track flex w-max gap-10 whitespace-nowrap">
            {looped.map((offer, i) => (
              <span key={i} className="flex items-center gap-10 text-sm font-medium text-highlight">
                {offer}
                <span className="text-highlight/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
