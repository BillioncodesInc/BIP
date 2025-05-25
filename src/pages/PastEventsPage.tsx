import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';

// Sample past events data
const pastEvents = [
  {
    id: 1,
    title: "Tech Bootcamp 2023: Web Development",
    date: new Date(2023, 8, 15),
    location: "University of Lagos",
    attendees: 150,
    description: "A comprehensive web development bootcamp covering modern frontend and backend technologies.",
    images: [
      "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
    ],
    highlights: [
      "Hands-on coding workshops",
      "Industry expert sessions",
      "Project presentations",
      "Networking opportunities"
    ],
    testimonials: [
      {
        name: "John Doe",
        comment: "The bootcamp was incredibly practical and helped me land my first tech internship.",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      }
    ]
  },
  {
    id: 2,
    title: "Women in Tech Summit 2023",
    date: new Date(2023, 9, 20),
    location: "Ahmadu Bello University",
    attendees: 200,
    description: "A gathering of female tech enthusiasts, professionals, and students to inspire and empower.",
    images: [
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg"
    ],
    highlights: [
      "Keynote speeches",
      "Panel discussions",
      "Mentorship sessions",
      "Career fair"
    ],
    testimonials: [
      {
        name: "Sarah Ahmed",
        comment: "The summit opened my eyes to the endless possibilities in tech for women.",
        image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg"
      }
    ]
  },
  {
    id: 3,
    title: "Mental Health Awareness Week",
    date: new Date(2023, 10, 10),
    location: "University of Nigeria, Nsukka",
    attendees: 300,
    description: "A week-long program focused on student mental health and wellbeing.",
    images: [
      "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg",
      "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
      "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg"
    ],
    highlights: [
      "Counseling sessions",
      "Wellness workshops",
      "Support group meetings",
      "Expert talks"
    ],
    testimonials: [
      {
        name: "Mary Johnson",
        comment: "The program helped me understand and manage my academic stress better.",
        image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
      }
    ]
  },
  {
    id: 4,
    title: "Innovation Challenge 2023",
    date: new Date(2023, 11, 5),
    location: "Federal University of Technology, Akure",
    attendees: 250,
    description: "A competition showcasing student innovations and technological solutions.",
    images: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg"
    ],
    highlights: [
      "Project exhibitions",
      "Pitch competitions",
      "Innovation workshops",
      "Awards ceremony"
    ],
    testimonials: [
      {
        name: "David Okonkwo",
        comment: "Winning the challenge gave me the confidence to pursue my startup idea.",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
      }
    ]
  }
];

const PastEventsPage = () => {
  useEffect(() => {
    document.title = 'Past Events | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Past Events"
        description="Explore our previous events and programs that have impacted thousands of Nigerian students."
      />

      <Section background="white">
        <div className="space-y-12">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Gallery */}
                  <div className="relative h-64 lg:h-full">
                    <div className="grid grid-cols-2 gap-2 h-full">
                      <div className="relative h-full">
                        <img
                          src={event.images[0]}
                          alt={`${event.title} - Main`}
                          className="w-full h-full object-cover rounded-tl-lg"
                        />
                      </div>
                      <div className="grid grid-rows-2 gap-2">
                        <img
                          src={event.images[1]}
                          alt={`${event.title} - Secondary`}
                          className="w-full h-full object-cover rounded-tr-lg"
                        />
                        <img
                          src={event.images[2]}
                          alt={`${event.title} - Tertiary`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-1" />
                        {format(event.date, 'MMMM d, yyyy')}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={16} className="mr-1" />
                        {event.attendees} Attendees
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{event.description}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Event Highlights</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <ArrowRight size={16} className="text-blue-800 mr-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonials */}
                    {event.testimonials.map((testimonial, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">Participant</p>
                          </div>
                        </div>
                        <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact Stats */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Events Organized' },
              { value: '5,000+', label: 'Students Impacted' },
              { value: '30+', label: 'Partner Institutions' },
              { value: '6', label: 'Geopolitical Zones' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default PastEventsPage;