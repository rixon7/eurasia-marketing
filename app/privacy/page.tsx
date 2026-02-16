import type { Metadata } from 'next';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Eurasia Marketing collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <article className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-dark-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted dark:text-dark-muted font-mono mb-12">
            Last updated: 1 January 2026
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="space-y-10 text-sm text-muted dark:text-dark-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">1. Introduction</h2>
              <p>Eurasia Marketing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              <p className="mt-3">Our registered address is 65-73 Staines Road, Hounslow TW3 3HW, United Kingdom.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary dark:text-dark-text">Personal Information:</strong> Name, email address, phone number, and any other details you provide when contacting us or filling out forms on our website.</li>
                <li><strong className="text-primary dark:text-dark-text">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
                <li><strong className="text-primary dark:text-dark-text">Cookies:</strong> Small data files stored on your device to improve your browsing experience. See Section 6 for more details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your enquiries and provide our services</li>
                <li>Send you marketing communications (only with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyse website usage and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">4. Legal Basis for Processing</h2>
              <p className="mb-3">Under UK GDPR, we process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary dark:text-dark-text">Consent:</strong> Where you have given us explicit consent to process your data (e.g., marketing emails).</li>
                <li><strong className="text-primary dark:text-dark-text">Legitimate Interest:</strong> Where processing is necessary for our legitimate business interests, such as improving our services.</li>
                <li><strong className="text-primary dark:text-dark-text">Contractual Necessity:</strong> Where processing is necessary to fulfil a contract with you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">5. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website and delivering our services (e.g., email platforms, analytics tools). These providers are contractually obligated to protect your data and use it only for the purposes we specify.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">6. Cookies</h2>
              <p className="mb-3">Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings. We use:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-primary dark:text-dark-text">Essential Cookies:</strong> Required for the website to function properly.</li>
                <li><strong className="text-primary dark:text-dark-text">Analytics Cookies:</strong> Help us understand how visitors use our site.</li>
                <li><strong className="text-primary dark:text-dark-text">Marketing Cookies:</strong> Used to deliver relevant advertisements (only with your consent).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">7. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">8. Your Rights</h2>
              <p className="mb-3">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:info@eurasiamarketing.com" className="text-accent-blue hover:underline">info@eurasiamarketing.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">9. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><strong className="text-primary dark:text-dark-text">Email:</strong> <a href="mailto:info@eurasiamarketing.com" className="text-accent-blue hover:underline">info@eurasiamarketing.com</a></p>
                <p><strong className="text-primary dark:text-dark-text">Phone:</strong> <a href="tel:07949774856" className="text-accent-blue hover:underline">07949 774856</a></p>
                <p><strong className="text-primary dark:text-dark-text">Address:</strong> 65-73 Staines Road, Hounslow TW3 3HW</p>
              </div>
            </section>
          </div>
        </AnimateIn>
      </div>
    </article>
  );
}
