import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimateIn from '@/components/AnimateIn';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | SEO, Social Media & Web Design Tips',
  description: 'Expert digital marketing insights from Hounslow\'s leading marketing agency. Tips on SEO, social media strategy, website design, and brand building for local businesses.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Hero
        tag="📝 Insights & Tips"
        title="Our"
        highlight="Blog"
        subtitle="Insights, tips, and strategies from the Eurasia Marketing team."
      />

      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="gradient-border bg-white dark:bg-dark-card rounded-[var(--radius-lg)] shadow-sm hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
                    {post.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-soft-green dark:bg-dark-surface text-xs font-mono text-mint-text dark:text-mint-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3 group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted dark:text-dark-muted leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted dark:text-dark-muted font-mono">
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                    </div>
                  </article>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
