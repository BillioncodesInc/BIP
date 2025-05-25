import { useEffect } from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';

const TermsOfServicePage = () => {
  useEffect(() => {
    document.title = 'Terms of Service | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our services."
      />

      <Section background="white">
        <div className="max-w-3xl mx-auto prose">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the BillionCodes Initiative Program website and services, you accept 
            and agree to be bound by these Terms of Service and our Privacy Policy.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            BillionCodes Initiative Program provides educational programs, scholarships, and support 
            services to Nigerian tertiary students. Our services include but are not limited to:
          </p>
          <ul>
            <li>Scholarship programs</li>
            <li>Tech bootcamps</li>
            <li>Mental health support</li>
            <li>Innovation challenges</li>
            <li>Educational resources</li>
          </ul>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features of our services, you may need to create an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>

          <h2>4. User Conduct</h2>
          <p>When using our services, you agree not to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Submit false or misleading information</li>
            <li>Interfere with the proper functioning of the services</li>
            <li>Engage in unauthorized data collection</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned by BillionCodes Initiative 
            Program and are protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h2>6. Program Applications</h2>
          <p>
            When applying for our programs, you understand and agree that:
          </p>
          <ul>
            <li>Meeting eligibility requirements doesn't guarantee acceptance</li>
            <li>All decisions regarding applications are final</li>
            <li>Submitted materials become our property</li>
            <li>False information may result in disqualification</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>
            BillionCodes Initiative Program shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages arising from your use of our services.
          </p>

          <h2>8. Modifications to Services</h2>
          <p>
            We reserve the right to modify or discontinue any part of our services at any time without 
            notice. We shall not be liable for any modification, suspension, or discontinuance.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Nigeria, 
            without regard to its conflict of law provisions.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p>
            Email: legal@billioncodes.org<br />
            Phone: +234 800 123 4567<br />
            Address: BillionCodes Headquarters, Lagos, Nigeria
          </p>

          <p className="text-sm text-gray-600 mt-8">Last Updated: March 15, 2024</p>
        </div>
      </Section>
    </>
  );
};

export default TermsOfServicePage;