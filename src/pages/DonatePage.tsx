import React from 'react';
import { Heart, DollarSign, Clock, Users } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const DonatePage = () => {
  const donationTiers = [
    {
      name: 'One-Time Gift',
      description: 'Make a single donation to support our cause',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      suggested: ['25', '50', '100', '250'],
    },
    {
      name: 'Monthly Partner',
      description: 'Become a sustaining partner with monthly donations',
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      suggested: ['10', '25', '50', '100'],
    },
    {
      name: 'Corporate Sponsor',
      description: 'Partner with us as a business or organization',
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      suggested: ['500', '1000', '2500', '5000'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Make a Difference" 
        subtitle="Your generosity helps us create lasting impact in our community"
      />

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every donation helps us continue our mission of making a positive impact. 
              Choose the giving option that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full mb-4 mx-auto">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-center mb-6">{tier.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {tier.suggested.map((amount, i) => (
                    <button
                      key={i}
                      className="py-2 px-4 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <Button className="w-full">
                  Donate Now
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Other Ways to Give</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-medium mb-2">By Mail</h4>
                <p className="text-gray-600">
                  Send checks to:<br />
                  Organization Name<br />
                  123 Main Street<br />
                  City, State 12345
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-medium mb-2">Contact Us</h4>
                <p className="text-gray-600">
                  For questions about donations or other ways to give,<br />
                  please contact our development team:<br />
                  (555) 123-4567<br />
                  donate@organization.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DonatePage;