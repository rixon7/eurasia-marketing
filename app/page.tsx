import Link from 'next/link';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import LogoSlider from '@/components/LogoSlider';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';
import FAQ from '@/components/FAQ';
import { getAllPosts } from '@/lib/blog';

const services = [
  { icon: '🎯', title: 'Brand Strategy', description: 'Define your brand identity, voice, and positioning to stand out in a crowded marketplace.' },
  { icon: '📈', title: 'Digital Advertising', description: 'Targeted ad campaigns across search, social, and display channels that maximize your ROI.' },
  { icon: '✍️', title: 'Content Marketing', description: 'Compelling content that engages your audience and establishes authority in your industry.' },
];

const features = [
  { icon: '💡', title: 'Creative Approach', description: 'Fresh ideas and innovative campaigns that capture attention.' },
  { icon: '📊', title: 'Data-Driven', description: 'Every decision backed by analytics for measurable outcomes.' },
  { icon: '🤝', title: 'Dedicated Support', description: 'A committed team that treats your business like their own.' },
  { icon: '⚡', title: 'Fast Turnaround', description: 'Quick execution without compromising on quality or strategy.' },
];

const testimonials = [
  { quote: 'Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.', initials: 'AK', name: 'Amira Khan', role: 'CEO, TechFlow Solutions' },
  { quote: 'Professional, creative, and always on top of the latest trends. They feel like an extension of our team.', initials: 'DM', name: 'David Morris', role: 'Founder, GreenLeaf Co.' },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero
        title="Hounslow's Best"
        highlight="Digital Marketing Agency"
        subtitle="Expert website designers, SEO specialists, and social media managers in Hounslow. We help businesses grow with data-driven marketing strategies that deliver real results."
        buttons={[
          { label: 'Get Started →', href: '/contact', variant: 'primary' },
          { label: 'Our Services', href: '/services', variant: 'outline' },
        ]}
      />

      <ImageSlider />

      <LogoSlider />

      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title="Digital Marketing Services in Hounslow"
            subtitle="From website design to SEO and social media — tailored solutions for your business"
          />
          <div className="grid md:grid-cols-3 gap-[10px]">
            {services.map((s, i) => (
              <Card key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title="Why Hounslow Businesses Choose Eurasia"
            subtitle="Results-driven digital marketing backed by data and local expertise"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
            {features.map((f, i) => (
              <AnimateIn key={f.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 text-center shadow-sm">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h4 className="font-semibold text-primary dark:text-dark-text mb-2">{f.title}</h4>
                  <p className="text-sm text-muted dark:text-dark-muted">{f.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Don't take our word for it"
          />
          <div className="grid md:grid-cols-2 gap-[10px]">
            {testimonials.map((t, i) => (
              <Testimonial key={t.name} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title="Latest Insights"
            subtitle="Tips, strategies, and ideas from our marketing experts"
          />
          <div className="grid md:grid-cols-3 gap-[10px]">
            {posts.slice(0, 3).map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
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
                    <h3 className="text-lg font-semibold text-primary dark:text-dark-text mb-3 group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h3>
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
          <AnimateIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-block px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-dark-muted dark:text-dark-text dark:hover:bg-dark-card rounded-[var(--radius-md)] text-sm font-semibold transition-all"
              >
                View All Posts &rarr;
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <CTA
        title="Ready to grow your brand?"
        subtitle="Let's build a marketing strategy that drives real, measurable results for your business."
        buttonText="Start a Project"
        buttonHref="/contact"
      />
    </>
  );
}
