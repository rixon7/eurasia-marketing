import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Eurasia Marketing" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-sm text-dark-muted leading-relaxed">
              Helping businesses build powerful marketing strategies that drive real results and lasting growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Pages</h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li><Link href="/services#brand-strategy" className="hover:text-white transition-colors">Brand Strategy</Link></li>
              <li><Link href="/services#digital-advertising" className="hover:text-white transition-colors">Digital Advertising</Link></li>
              <li><Link href="/services#content-marketing" className="hover:text-white transition-colors">Content Marketing</Link></li>
              <li><Link href="/services#seo-sem" className="hover:text-white transition-colors">SEO & SEM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li><a href="mailto:info@eurasiamarketing.com" className="hover:text-white transition-colors">info@eurasiamarketing.com</a></li>
              <li><a href="tel:02038863311" className="hover:text-white transition-colors">020 3886 3311</a></li>
              <li>65-73 Staines Road</li>
              <li>Hounslow TW3 3HW</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-dark-muted">
            <p>&copy; 2026 Eurasia Marketing. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div className="flex gap-6 text-sm text-dark-muted">
            <a href="https://facebook.com/eurasiamarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://instagram.com/eurasiamarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://linkedin.com/company/eurasiamarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
