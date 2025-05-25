import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, X } from 'lucide-react';
import { format } from 'date-fns';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Tech Bootcamp 2023: Web Development",
    date: new Date(2023, 8, 15),
    location: "University of Lagos",
    thumbnail: "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg",
    impact: {
      attendees: 150,
      institutions: 5,
      projects: 25
    },
    description: "A comprehensive web development bootcamp covering modern frontend and backend technologies.",
    images: [
      "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
    ],
    outcomes: [
      "25 completed projects",
      "15 internship placements",
      "5 startup launches",
      "90% employment rate"
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
    thumbnail: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    impact: {
      attendees: 200,
      institutions: 8,
      mentors: 20
    },
    description: "A gathering of female tech enthusiasts, professionals, and students to inspire and empower.",
    images: [
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg"
    ],
    outcomes: [
      "30 mentorship matches",
      "10 tech scholarships awarded",
      "5 tech startups founded",
      "85% program completion rate"
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
    thumbnail: "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg",
    impact: {
      attendees: 300,
      counselors: 15,
      sessions: 50
    },
    description: "A week-long program focused on student mental health and wellbeing.",
    images: [
      "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg",
      "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
      "https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg"
    ],
    outcomes: [
      "250+ counseling sessions",
      "3 support groups formed",
      "95% positive feedback",
      "Ongoing peer support network"
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
    thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    impact: {
      attendees: 250,
      projects: 40,
      prizes: 10
    },
    description: "A competition showcasing student innovations and technological solutions.",
    images: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg"
    ],
    outcomes: [
      "40 innovative projects",
      "5 projects funded",
      "3 patents filed",
      "2 commercial launches"
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

const PortfolioPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = 'Portfolio | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        description="Explore our impactful programs and initiatives that have transformed Nigerian education."
      />

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer"
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-1" />
                      {format(item.date, 'MMM d, yyyy')}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      {item.location}
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                  <div className="mt-auto">
                    <button className="text-blue-800 font-medium hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                {/* Image Gallery */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {selectedItem.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedItem.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-1" />
                    {format(selectedItem.date, 'MMMM d, yyyy')}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-1" />
                    {selectedItem.location}
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{selectedItem.description}</p>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(selectedItem.impact).map(([key, value]) => (
                    <div key={key} className="text-center bg-blue-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-800">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Key Outcomes</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedItem.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <ArrowRight size={16} className="text-blue-800 mr-2 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonials */}
                {selectedItem.testimonials.map((testimonial, i) => (
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impact Stats */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Overall Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Programs Completed' },
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

export default PortfolioPage;