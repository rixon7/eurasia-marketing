import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import AnimateIn from '@/components/AnimateIn';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
      openGraph: {
        title: meta.title,
        description: meta.excerpt,
        type: 'article',
        publishedTime: meta.date,
        images: meta.image ? [{ url: meta.image, width: 1200, alt: meta.title }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.excerpt,
        images: meta.image ? [meta.image] : [],
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    image: meta.image || '',
    author: { '@type': 'Organization', name: 'Eurasia Marketing', url: 'https://eurasiamarketing.com' },
    publisher: { '@type': 'Organization', name: 'Eurasia Marketing', url: 'https://eurasiamarketing.com' },
  };

  return (
    <article className="py-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-accent-blue hover:underline mb-8"
          >
            &larr; Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-soft-green dark:bg-dark-surface text-xs font-mono text-mint-text dark:text-mint-badge">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-dark-text mb-4">
            {meta.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted dark:text-dark-muted font-mono mb-8">
            <span>{new Date(meta.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>&middot;</span>
            <span>{meta.readingTime}</span>
          </div>

          {meta.image && (
            <div className="rounded-[var(--radius-xl)] overflow-hidden mb-12 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={meta.image}
                alt={meta.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          )}
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary dark:prose-headings:text-dark-text prose-p:text-muted dark:prose-p:text-dark-muted prose-a:text-accent-blue prose-strong:text-primary dark:prose-strong:text-dark-text">
            <MDXRemote source={content} />
          </div>
        </AnimateIn>
      </div>
    </article>
  );
}
