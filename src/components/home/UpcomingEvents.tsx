import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Tech Bootcamp: Web Development Fundamentals",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    time: "10:00 AM - 4:00 PM",
    location: "University of Lagos, Lagos",
    image: "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg",
    url: "/events/tech-bootcamp-web-development"
  },
  {
    id: 2,
    title: "Scholarship Application Workshop",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    time: "11:00 AM - 1:00 PM",
    location: "Ahmadu Bello University, Zaria",
    image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
    url: "/events/scholarship-workshop"
  },
  {
    id: 3,
    title: "Mental Health Awareness Seminar",
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 21 days from now
    time: "2:00 PM - 5:00 PM",
    location: "University of Nigeria, Nsukka",
    image: "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg",
    url: "/events/mental-health-seminar"
  }
];

const UpcomingEvents = () => {
  return (
    <Section background="blue">
      <SectionTitle 
        title="Upcoming Events" 
        subtitle="Join us at our upcoming events and be part of the BIP community."
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-800">
                  {format(event.date, 'MMM d, yyyy')}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="mb-4 space-y-2 flex-1">
                  <div className="flex items-start">
                    <Calendar size={16} className="text-blue-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{format(event.date, 'EEEE, MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock size={16} className="text-blue-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={16} className="text-blue-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>
                <Link 
                  to={event.url}
                  className="flex items-center justify-between mt-2 text-blue-800 font-medium hover:underline"
                >
                  View Details
                  <ChevronRight size={18} />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button 
          href="/events" 
          variant="primary"
        >
          View All Events
        </Button>
      </div>
    </Section>
  );
};

export default UpcomingEvents;