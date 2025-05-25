import React from 'react';
import { Calendar } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import Section from '../components/ui/Section';

const EventsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Events" 
        description="Join us at our upcoming events and be part of our community"
        icon={<Calendar className="w-12 h-12 text-primary" />}
      />
      <Section>
        {/* Events content will go here */}
      </Section>
    </div>
  );
};

export default EventsPage;