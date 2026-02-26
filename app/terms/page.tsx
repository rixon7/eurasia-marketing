import type { Metadata } from 'next';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Eurasia Marketing digital marketing services in Hounslow, including website design, SEO, and social media management.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <article className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-dark-text mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted dark:text-dark-muted font-mono mb-12">
            Last updated: 1 January 2026
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="space-y-10 text-sm text-muted dark:text-dark-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">1. Introduction</h2>
              <p>These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Eurasia Marketing website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.</p>
              <p className="mt-3">Eurasia Marketing is operated from 65-73 Staines Road, Hounslow TW3 3HW, United Kingdom.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">2. Services</h2>
              <p>Eurasia Marketing provides digital marketing services including but not limited to social media management, SEO, website design and development, email marketing, content marketing, and digital advertising. The specific scope of services will be agreed upon in writing before any project commences.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">3. Pricing &amp; Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices are quoted in British Pounds (GBP) and are exclusive of VAT unless otherwise stated.</li>
                <li>Monthly service plans are billed in advance on a rolling monthly basis.</li>
                <li>Payment is due within 14 days of invoice date unless otherwise agreed.</li>
                <li>We reserve the right to suspend services if payment is overdue by more than 30 days.</li>
                <li>Custom project quotes are valid for 30 days from the date of issue.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">4. Cancellation &amp; Refunds</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly service plans can be cancelled with 30 days&apos; written notice.</li>
                <li>No refunds will be issued for the current billing period after services have been delivered.</li>
                <li>For bespoke projects, cancellation terms will be outlined in the individual project agreement.</li>
                <li>Any work completed up to the point of cancellation remains payable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">5. Client Responsibilities</h2>
              <p className="mb-3">To enable us to deliver our services effectively, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide timely access to necessary accounts, assets, and information</li>
                <li>Review and approve content within agreed timeframes</li>
                <li>Ensure that any materials you provide do not infringe third-party rights</li>
                <li>Maintain the confidentiality of any account credentials shared with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">6. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content, designs, and materials created by Eurasia Marketing remain our intellectual property until full payment has been received.</li>
                <li>Upon full payment, ownership of bespoke deliverables (e.g., website designs, graphics) transfers to the client unless otherwise agreed.</li>
                <li>We reserve the right to showcase completed work in our portfolio and marketing materials unless you request otherwise in writing.</li>
                <li>Third-party assets (stock images, fonts, plugins) are subject to their respective licence terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">7. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Eurasia Marketing shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
                <li>We do not guarantee specific results such as search engine rankings, follower counts, or conversion rates, as these depend on many factors beyond our control.</li>
                <li>Our total liability for any claim shall not exceed the total fees paid by you in the 3 months preceding the claim.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">8. Confidentiality</h2>
              <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of our engagement. This obligation survives the termination of any agreement between us.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">9. Website Use</h2>
              <p className="mb-3">When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Reproduce, duplicate, or copy any content without our written permission</li>
                <li>Transmit any viruses, malware, or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">10. Third-Party Services</h2>
              <p>Our services may involve the use of third-party platforms (e.g., Google, Meta, Mailchimp). We are not responsible for the terms, policies, or performance of these third-party services. You are responsible for complying with the terms of any third-party platforms used in connection with our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">11. Force Majeure</h2>
              <p>We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, internet outages, or government actions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">12. Governing Law</h2>
              <p>These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">13. Changes to These Terms</h2>
              <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website or services after changes constitutes acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary dark:text-dark-text mb-3">14. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <div className="mt-3 space-y-1">
                <p><strong className="text-primary dark:text-dark-text">Email:</strong> <a href="mailto:info@eurasiamarketing.com" className="text-accent-blue hover:underline">info@eurasiamarketing.com</a></p>
                <p><strong className="text-primary dark:text-dark-text">Phone:</strong> <a href="tel:02038863311" className="text-accent-blue hover:underline">020 3886 3311</a></p>
                <p><strong className="text-primary dark:text-dark-text">Address:</strong> 65-73 Staines Road, Hounslow TW3 3HW</p>
              </div>
            </section>
          </div>
        </AnimateIn>
      </div>
    </article>
  );
}
