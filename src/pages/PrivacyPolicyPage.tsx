import { useEffect } from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Our commitment to protecting your privacy and personal information."
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto prose">
          <h2>Introduction</h2>
          <p>
            BillionCodes Initiative Program ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you visit our website and use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for an account</li>
            <li>Apply for programs or scholarships</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us for support</li>
            <li>Participate in our programs</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device, 
            including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Access times</li>
            <li>Pages visited</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Process your applications and requests</li>
            <li>Communicate with you about our programs</li>
            <li>Send newsletters and updates</li>
            <li>Improve our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without 
            your consent, except as described in this Privacy Policy.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to maintain the security of your 
            personal information. However, no method of transmission over the Internet or electronic storage 
            is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: privacy@billioncodes.org<br />
            Phone: +234 800 123 4567<br />
            Address: BillionCodes Headquarters, Lagos, Nigeria
          </p>

          <p className="text-sm text-gray-600 mt-8">Last Updated: March 15, 2024</p>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicyPage;