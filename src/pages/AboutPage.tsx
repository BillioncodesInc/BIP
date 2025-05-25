import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Heart, Target, Award, ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  achievements: string[];
  image: string;
}

const timeline: TimelineItem[] = [
  {
    year: '2020',
    title: 'Foundation',
    description: 'BillionCodes Initiative Program was established in partnership with NANS to address the growing educational and skills gap among Nigerian students.',
    achievements: [
      'Partnership with NANS established',
      'Initial scholarship program launched',
      'First tech bootcamp conducted',
      '500 students impacted'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    year: '2021',
    title: 'First Scholarship Program',
    description: 'Awarded 50 scholarships to deserving students across 10 institutions, focusing on STEM education.',
    achievements: [
      '50 scholarships awarded',
      '10 partner institutions',
      'STEM focus established',
      'Mentorship program launched'
    ],
    image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg'
  },
  {
    year: '2022',
    title: 'Tech Bootcamps Launch',
    description: 'Launched our first series of tech bootcamps, training over 500 students in web development, data science, and digital marketing.',
    achievements: [
      '500+ students trained',
      '3 tech tracks introduced',
      '15 industry partnerships',
      '80% employment rate'
    ],
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg'
  },
  {
    year: '2023',
    title: 'Mental Health Initiative',
    description: 'Expanded our focus to include mental health advocacy, establishing support groups and counseling services in 25 institutions.',
    achievements: [
      '25 institutions covered',
      '1000+ counseling sessions',
      '10 support groups formed',
      'Mental health awareness campaign'
    ],
    image: 'https://images.pexels.com/photos/6383152/pexels-photo-6383152.jpeg'
  },
  {
    year: '2024',
    title: 'Nationwide Expansion',
    description: 'Now operating in all six geopolitical zones with over 5,000 students impacted through our various programs and initiatives.',
    achievements: [
      'All zones covered',
      '5000+ students impacted',
      '50+ partner institutions',
      'Digital learning platform launched'
    ],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
  }
];

const AboutPage = () => {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<TimelineItem | null>(null);

  useEffect(() => {
    document.title = 'About Us | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="About BillionCodes Initiative Program"
        description="An impact-driven program empowering Nigerian tertiary students through education, skills, and innovation."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      />

      {/* Mission & Vision Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
              alt="Students in a classroom"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="text-blue-800 w-8 h-8" />
                <div>
                  <p className="text-2xl font-bold text-blue-800">5,000+</p>
                  <p className="text-sm text-gray-600">Students Impacted</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To empower Nigerian tertiary students by providing access to quality education, tech skills, mental health support, and innovation opportunities, creating pathways for academic excellence and career success regardless of socioeconomic background.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To build a future where every Nigerian student has equal opportunity to thrive academically, professionally, and personally, contributing to national development through innovation and leadership.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Values</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, title: 'Excellence', description: 'Maintaining high standards in all our programs' },
                    { icon: Users, title: 'Inclusivity', description: 'Reaching students across all zones' },
                    { icon: BookOpen, title: 'Innovation', description: 'Embracing creative solutions' },
                    { icon: Heart, title: 'Empowerment', description: 'Equipping students for success' }
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <value.icon className="w-8 h-8 text-blue-800 mb-2" />
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Strategic Partnership Section */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Strategic Partnership with NANS</h2>
            <p className="text-gray-700 mb-6">
              Our partnership with the National Association of Nigerian Students (NANS) forms the foundation of our nationwide reach and ensures our initiatives create meaningful impact across Nigerian tertiary institutions.
            </p>
            
            <div className="space-y-4">
              {[
                'Access to all federal, state, and private institutions',
                'Direct collaboration with student leaders',
                'Customized programs for each academic community',
                'Sustainable impact model implementation',
                'Policy advocacy for student benefits'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <ChevronRight className="w-4 h-4 text-blue-800" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href="/partners"
                variant="primary"
              >
                Learn More About Our Partners
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src="https://images.pexels.com/photos/8850731/pexels-photo-8850731.jpeg"
              alt="Partnership meeting"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section background="white">
        <SectionTitle
          title="Our Leadership"
          subtitle="Meet the dedicated team leading the BillionCodes Initiative Program."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Comr. Josiah Adeyemo",
              role: "Program Director",
              bio: "Leading BIP's strategic vision and partnerships to create lasting impact for Nigerian students.",
              image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            },
            {
              name: "Comr. Omibiyi Samson",
              role: "Programs Coordinator",
              bio: "Overseeing the implementation of BIP programs across Nigerian institutions with dedication and excellence.",
              image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg"
            },
            {
              name: "Comr. Idowu Samuel",
              role: "Outreach Director",
              bio: "Spearheading community engagement and ensuring BIP's impact reaches students across all geopolitical zones.",
              image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
            }
          ].map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to="/team" className="block group">
                <Card className="overflow-hidden h-full transition-transform duration-300 group-hover:scale-105">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-800 font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600 mb-4">{leader.bio}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/team"
            variant="primary"
          >
            Meet Our Full Team
          </Button>
        </div>
      </Section>

      {/* Journey and Impact Section */}
      <Section background="blue" id="impact">
        <SectionTitle
          title="Our Journey and Impact"
          subtitle="Since our inception, we've been committed to transforming the educational landscape for Nigerian students."
          center
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer ${selectedTimelineItem?.year === item.year ? 'scale-105' : ''}`}
                  onClick={() => setSelectedTimelineItem(item)}
                >
                  <Card className={`transition-all duration-300 ${
                    selectedTimelineItem?.year === item.year 
                      ? 'border-2 border-blue-800' 
                      : 'hover:bg-gray-50'
                  }`}>
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-4">
                          <span className="text-blue-800 font-bold">{item.year}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Selected Item Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              {selectedTimelineItem ? (
                <Card className="overflow-hidden">
                  <img
                    src={selectedTimelineItem.image}
                    alt={selectedTimelineItem.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{selectedTimelineItem.title}</h3>
                      <p className="text-gray-600">{selectedTimelineItem.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedTimelineItem.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <ArrowRight size={16} className="text-blue-800 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Select a timeline item to view details</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;