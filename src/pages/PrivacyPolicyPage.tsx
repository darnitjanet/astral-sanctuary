import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Astral Sanctuary. Learn how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />
      <motion.div
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Privacy Policy</h1>
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
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Introduction</h2>
              <p>
                Welcome to Astral Sanctuary ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.astralsanctuary.live.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Information We Collect</h2>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1rem' }}>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Use our tarot reading tools</li>
                <li>Create a birth chart</li>
                <li>Save journal entries (stored locally on your device)</li>
                <li>Subscribe to our newsletter (if applicable)</li>
                <li>Contact us via email or forms</li>
              </ul>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1.5rem' }}>Information Collected Automatically</h3>
              <p>When you visit our website, we automatically collect certain information about your device, including:</p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Date and time of visits</li>
              </ul>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1.5rem' }}>Local Storage</h3>
              <p>
                Some features of our website use local storage to save your preferences and data on your device. This includes:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Dream journal entries</li>
                <li>Tarot reading history</li>
                <li>User preferences and settings</li>
              </ul>
              <p style={{ marginTop: '0.5rem' }}>
                This data is stored only on your device and is not transmitted to our servers unless you choose to share it.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Provide and maintain our website and services</li>
                <li>Improve and personalize your experience</li>
                <li>Understand how our website is used</li>
                <li>Develop new features and functionality</li>
                <li>Communicate with you about updates or changes</li>
                <li>Monitor and analyze usage and trends</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1rem' }}>Types of Cookies We Use</h3>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>

              <p style={{ marginTop: '1rem' }}>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Third-Party Services</h2>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1rem' }}>Google AdSense</h3>
              <p>
                We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-lavender)' }}>Google Ads Settings</a>.
              </p>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1.5rem' }}>Analytics Services</h3>
              <p>
                We may use third-party analytics services to monitor and analyze website traffic. These services may use cookies and similar technologies to collect information about your use of our website.
              </p>

              <h3 style={{ color: 'var(--purple-lavender)', marginTop: '1.5rem' }}>Hosting Services</h3>
              <p>
                Our website is hosted on Vercel. Please refer to Vercel's privacy policy for information about how they handle data.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li><strong>With Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf</li>
                <li><strong>For Legal Reasons:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to our processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your data</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                To exercise any of these rights, please contact us at the email address provided below.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our website, you consent to such transfers.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to say no to the sale of personal information</li>
                <li>Right to access your personal information</li>
                <li>Right to equal service and price</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>GDPR Compliance (European Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA), we process your personal data in accordance with the General Data Protection Regulation (GDPR). Our legal basis for processing includes:
              </p>
              <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                <li>Your consent</li>
                <li>Performance of a contract</li>
                <li>Compliance with legal obligations</li>
                <li>Our legitimate interests</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Do Not Track Signals</h2>
              <p>
                We currently do not respond to "Do Not Track" (DNT) signals from web browsers. We may adopt a DNT policy in the future, and this privacy policy will be updated accordingly.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul style={{ listStyle: 'none', marginLeft: '0', marginTop: '1rem' }}>
                <li><strong>Website:</strong> www.astralsanctuary.live</li>
                <li><strong>By visiting this page:</strong> <a href="/contact" style={{ color: 'var(--purple-lavender)' }}>Contact Form</a></li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicyPage;
