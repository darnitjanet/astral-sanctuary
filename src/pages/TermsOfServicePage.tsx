import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Astral Sanctuary. Please read these terms carefully before using our website."
        canonical="/terms-of-service"
      />
      <motion.div
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Terms of Service</h1>
            <p className="page-subtitle">Last Updated: October 28, 2025</p>
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            background: 'rgba(26, 26, 29, 0.8)',
            borderRadius: '12px',
            border: '1px solid var(--purple-lavender)',
            lineHeight: '1.8'
          }}>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Agreement to Terms</h2>
              <p>
                Welcome to Astral Sanctuary. These Terms of Service ("Terms") govern your access to and use of our website located at https://www.astralsanctuary.com (the "Website"). By accessing or using our Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Website.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Acceptance of Terms</h2>
              <p>
                By using our Website, you represent that you are at least 18 years of age or have the consent of a parent or legal guardian. You also agree that you are legally capable of entering into binding contracts.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Description of Services</h2>
              <p>
                Astral Sanctuary provides spiritual and mystical content and tools, including but not limited to:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Tarot card readings</li>
                <li>Birth chart calculations and interpretations</li>
                <li>Daily cosmic updates and horoscopes</li>
                <li>Dream journal functionality</li>
                <li>Educational content about astrology, tarot, and spirituality</li>
                <li>Blog posts and articles</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Entertainment and Educational Purposes</h2>
              <p>
                <strong>IMPORTANT:</strong> All content and services provided on this Website, including tarot readings, birth charts, horoscopes, and spiritual guidance, are intended for <strong>entertainment and educational purposes only</strong>.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The information provided should NOT be considered:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Professional medical advice, diagnosis, or treatment</li>
                <li>Professional psychological or psychiatric advice</li>
                <li>Legal advice or counsel</li>
                <li>Financial advice or investment guidance</li>
                <li>A substitute for professional consultation in any field</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Always seek the advice of qualified professionals regarding any medical, psychological, legal, or financial matters.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>User Responsibilities</h2>
              <p>By using our Website, you agree to:</p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Use the Website only for lawful purposes</li>
                <li>Not interfere with or disrupt the Website or servers</li>
                <li>Not attempt to gain unauthorized access to any part of the Website</li>
                <li>Not transmit any viruses, malware, or harmful code</li>
                <li>Not use the Website to harass, abuse, or harm others</li>
                <li>Not impersonate any person or entity</li>
                <li>Not collect or harvest information about other users</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Intellectual Property Rights</h2>
              <p>
                The Website and its original content, features, and functionality are owned by Astral Sanctuary and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Our tarot card images, birth chart interpretations, blog posts, and other content are protected by copyright. You may not:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Reproduce, distribute, or display our content without permission</li>
                <li>Use our content for commercial purposes without authorization</li>
                <li>Modify or create derivative works from our content</li>
                <li>Remove copyright or proprietary notices</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>User-Generated Content</h2>
              <p>
                If you create or submit any content to our Website (such as journal entries or comments), you retain ownership of your content. However, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with operating the Website.
              </p>
              <p style={{ marginTop: '1rem' }}>
                You represent that:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>You own or have the right to use the content you submit</li>
                <li>Your content does not infringe on any third-party rights</li>
                <li>Your content does not contain illegal, harmful, or offensive material</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Disclaimer of Warranties</h2>
              <p>
                THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the Website will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                We do not warrant or guarantee the accuracy of tarot readings, birth chart interpretations, horoscopes, or any other spiritual content provided on the Website.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, ASTRAL SANCTUARY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Your access to or use of (or inability to access or use) the Website</li>
                <li>Any conduct or content of any third party on the Website</li>
                <li>Any content obtained from the Website</li>
                <li>Decisions made based on information from the Website</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Astral Sanctuary, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Your access to or use of the Website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through the Website</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Third-Party Links and Advertising</h2>
              <p>
                Our Website may contain links to third-party websites or services and display third-party advertisements (including Google AdSense). We are not responsible for:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>The content, privacy policies, or practices of third-party websites</li>
                <li>Products or services offered by third parties</li>
                <li>Advertisements displayed on our Website</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                Your interactions with third-party websites and advertisers are solely between you and them. We encourage you to review the terms and privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Modifications to the Website</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the Website at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Website.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Termination</h2>
              <p>
                We may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Website will immediately cease.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Website shall be resolved in the courts located in the United States.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Dispute Resolution</h2>
              <p>
                If you have any disputes with us, you agree to first attempt to resolve the dispute informally by contacting us. If we cannot resolve the dispute informally, any legal action must be commenced within one year after the claim arose.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver of any provision of these Terms will be effective only if in writing and signed by us.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p style={{ marginTop: '1rem' }}>
                By continuing to access or use our Website after revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Website.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Astral Sanctuary regarding the use of the Website and supersede any prior agreements.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul style={{ listStyle: 'none', marginLeft: '0', marginTop: '1rem' }}>
                <li><strong>Website:</strong> https://www.astralsanctuary.com</li>
                <li><strong>By visiting this page:</strong> <a href="/contact" style={{ color: 'var(--purple-lavender)' }}>Contact Form</a></li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Acknowledgment</h2>
              <p>
                BY USING THE WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermsOfServicePage;
