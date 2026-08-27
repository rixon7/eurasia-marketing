import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { TiltCard } from '@/components/ui/tilt-card';
import type { PostMeta } from '@/lib/blog';

// Restyled blog section from app/page.tsx. Same 3-post slice + "View All
// Posts" link; tag pill styling and date/reading-time meta preserved.
export function RecentPosts({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="// Blog" title="Latest Insights" description="Tips, strategies, and ideas from our marketing experts" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <TiltCard className="flex h-full flex-col overflow-hidden">
                  {post.image && (
                    <div className="relative aspect-[16/9] flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-accent-2-soft px-3 py-1 font-mono text-xs text-accent-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground-faint">{post.excerpt}</p>
                    <div className="flex items-center gap-3 font-mono text-xs text-foreground-faint">
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full border border-border bg-surface-glass-strong px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
          >
            View All Posts &rarr;
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
