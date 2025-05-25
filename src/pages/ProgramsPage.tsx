import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users, Target, Award, BookOpen, Heart, ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  eligibility: string;
  deadline: string;
  category: string;
  stats: {
    students: number;
    institutions: number;
    success_rate: number;
  };
  testimonial?: {
    name: string;
    role: string;
    image: string;
    quote: string;
  };
  curriculum?: string[];
  requirements: string[];
  benefits: string[];
  faqs: Array<{ question: string; answer: string; }>;
}

const programs: Program[] = [
  {
    id: 'scholarships',
    title: 'Scholarships & Grants',
    description: 'Financial support for deserving students facing economic challenges across Nigerian institutions.',
    image: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg',
    category: 'Financial Aid',
    features: [
      'Merit-based scholarships',
      'Need-based grants',
      'Research funding',
      'Academic excellence awards',
      'Emergency financial aid'
    ],
    eligibility: 'Full-time students in accredited Nigerian tertiary institutions with a minimum CGPA of 3.5',
    deadline: 'Rolling applications',
    stats: {
      students: 1200,
      institutions: 45,
      success_rate: 92
    },
    testimonial: {
      name: "Adewale Johnson",
      role: "Scholarship Recipient",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      quote: "The BIP scholarship transformed my academic journey and opened doors to opportunities I never thought possible."
    },
    requirements: [
      'Academic transcripts',
      'Admission letter',
      'Financial need documentation',
      'Two recommendation letters',
      'Personal statement'
    ],
    benefits: [
      'Full tuition coverage',
      'Monthly stipend',
      'Learning materials allowance',
      'Mentorship program access',
      'Career development support'
    ],
    faqs: [
      {
        question: "How are recipients selected?",
        answer: "Selection is based on academic merit, financial need, and leadership potential."
      },
      {
        question: "Can I apply for multiple scholarships?",
        answer: "Yes, you can apply for multiple scholarship categories if you meet the eligibility criteria."
      }
    ]
  },
  {
    id: 'bootcamps',
    title: 'Tech Bootcamps',
    description: 'Intensive training programs in software development, data science, and digital skills.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    category: 'Technical Training',
    features: [
      'Web development',
      'Mobile app development',
      'Data science & analytics',
      'UI/UX design',
      'Cloud computing'
    ],
    eligibility: 'Open to all Nigerian students with basic computer literacy',
    deadline: 'Monthly cohorts',
    stats: {
      students: 850,
      institutions: 30,
      success_rate: 88
    },
    testimonial: {
      name: "Sarah Ahmed",
      role: "Bootcamp Graduate",
      image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
      quote: "The bootcamp provided practical skills and industry connections that helped me land my dream tech job."
    },
    curriculum: [
      'Frontend Development (HTML, CSS, JavaScript)',
      'Backend Development (Node.js, Python)',
      'Database Management',
      'Version Control & DevOps',
      'Project Portfolio Development'
    ],
    requirements: [
      'Laptop computer',
      'Basic programming knowledge',
      'Strong internet connection',
      'Commitment to full program duration',
      'Team collaboration skills'
    ],
    benefits: [
      'Industry-standard curriculum',
      'Hands-on project experience',
      'Professional certification',
      'Job placement support',
      'Alumni network access'
    ],
    faqs: [
      {
        question: "What is the time commitment?",
        answer: "Bootcamps typically require 20-30 hours per week for 12 weeks."
      },
      {
        question: "Is prior coding experience required?",
        answer: "Basic computer literacy is required, but no advanced coding experience needed for beginner tracks."
      }
    ]
  },
  {
    id: 'women-in-tech',
    title: 'Women in Tech',
    description: 'Empowering female students with tech skills, mentorship, and leadership opportunities.',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
    category: 'Gender Empowerment',
    features: [
      'Coding workshops',
      'Mentorship program',
      'Leadership training',
      'Networking events',
      'Industry internships'
    ],
    eligibility: 'Female students in Nigerian tertiary institutions',
    deadline: 'Quarterly intake',
    stats: {
      students: 600,
      institutions: 25,
      success_rate: 90
    },
    testimonial: {
      name: "Amina Ibrahim",
      role: "Program Participant",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      quote: "This program gave me the confidence and skills to pursue my dreams in technology."
    },
    requirements: [
      'Currently enrolled female student',
      'Interest in technology',
      'Commitment to program duration',
      'Participation in community events',
      'Peer mentoring willingness'
    ],
    benefits: [
      'Specialized tech training',
      'Female mentor matching',
      'Industry exposure',
      'Leadership development',
      'Networking opportunities'
    ],
    faqs: [
      {
        question: "What support is provided?",
        answer: "Participants receive mentorship, technical training, and career guidance throughout the program."
      },
      {
        question: "Are there networking opportunities?",
        answer: "Yes, regular networking events and workshops with industry professionals are organized."
      }
    ]
  },
  {
    id: 'mental-health',
    title: 'Mental Health Advocacy',
    description: 'Supporting student wellbeing through awareness, counseling, and mental health resources.',
    image: 'https://images.pexels.com/photos/6383152/pexels-photo-6383152.jpeg',
    category: 'Student Wellness',
    features: [
      'Professional counseling',
      'Peer support groups',
      'Wellness workshops',
      'Crisis intervention',
      'Mental health education'
    ],
    eligibility: 'Available to all Nigerian students',
    deadline: 'Ongoing support',
    stats: {
      students: 1500,
      institutions: 35,
      success_rate: 95
    },
    testimonial: {
      name: "David Okonkwo",
      role: "Program Beneficiary",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      quote: "The mental health support program helped me overcome challenges and improve my academic performance."
    },
    requirements: [
      'Student ID verification',
      'Initial assessment completion',
      'Regular session attendance',
      'Participation in group activities',
      'Progress tracking'
    ],
    benefits: [
      'Free counseling services',
      'Stress management tools',
      'Academic support resources',
      'Peer support network',
      'Crisis helpline access'
    ],
    faqs: [
      {
        question: "Is the service confidential?",
        answer: "Yes, all counseling sessions and support services are strictly confidential."
      },
      {
        question: "How do I access emergency support?",
        answer: "24/7 crisis helpline is available for immediate support needs."
      }
    ]
  }
];

const ProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'requirements' | 'faqs'>('overview');

  useEffect(() => {
    document.title = 'Our Programs | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Our Programs"
        description="Empowering Nigerian students through comprehensive educational and development programs."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
      />

      {/* Quick Stats */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Users, value: '5,000+', label: 'Students Impacted' },
            { icon: MapPin, value: '50+', label: 'Partner Institutions' },
            { icon: Award, value: '90%', label: 'Success Rate' },
            { icon: Target, value: '6', label: 'Zones Covered' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-800" />
              </div>
              <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programs Grid */}
      <Section background="gray">
        <SectionTitle
          title="Featured Programs"
          subtitle="Explore our range of programs designed to support and empower Nigerian students."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProgram(program)}
              className="cursor-pointer"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {program.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-800">{program.stats.students}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-800">{program.stats.institutions}</div>
                      <div className="text-sm text-gray-600">Institutions</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-800">{program.stats.success_rate}%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Deadline:</span> {program.deadline}
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={<ChevronRight size={16} />}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-2">{selectedProgram.title}</h2>
                  <p className="text-lg text-white/90">{selectedProgram.description}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Tab Navigation */}
              <div className="flex border-b mb-6">
                {['overview', 'curriculum', 'requirements', 'faqs'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 font-medium ${
                      activeTab === tab
                        ? 'text-blue-800 border-b-2 border-blue-800'
                        : 'text-gray-600 hover:text-blue-800'
                    }`}
                    onClick={() => setActiveTab(tab as typeof activeTab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === 'overview' && (
                  <>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">{selectedProgram.stats.students}</div>
                        <div className="text-sm text-gray-600">Students Enrolled</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">{selectedProgram.stats.institutions}</div>
                        <div className="text-sm text-gray-600">Partner Institutions</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-800">{selectedProgram.stats.success_rate}%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProgram.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <ArrowRight size={16} className="text-blue-800 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedProgram.testimonial && (
                      <div className="bg-gray-50 p-6 rounded-lg mt-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={selectedProgram.testimonial.image}
                            alt={selectedProgram.testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold">{selectedProgram.testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{selectedProgram.testimonial.role}</p>
                          </div>
                        </div>
                        <p className="italic text-gray-700">"{selectedProgram.testimonial.quote}"</p>
                      </div>
                    )}
                  </>
                )}

                {activeTab === 'curriculum' && selectedProgram.curriculum && (
                  <div className="space-y-4">
                    {selectedProgram.curriculum.map((item, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                        <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                          <span className="text-blue-800 font-semibold">{index + 1}</span>
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Eligibility</h3>
                      <p className="text-gray-700">{selectedProgram.eligibility}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {selectedProgram.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            <ArrowRight size={16} className="text-blue-800 mr-2" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {selectedProgram.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <ArrowRight size={16} className="text-blue-800 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'faqs' && (
                  <div className="space-y-4">
                    {selectedProgram.faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedProgram(null)}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  href={`/apply#${selectedProgram.id}`}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Process */}
      <Section background="white">
        <SectionTitle
          title="Application Process"
          subtitle="Follow these steps to apply for any of our programs."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: 1,
              title: 'Create Account',
              description: 'Sign up for a student account in our portal with your institutional email.',
              icon: Users
            },
            {
              step: 2,
              title: 'Complete Profile',
              description: 'Fill in your academic and personal information, including required documents.',
              icon: BookOpen
            },
            {
              step: 3,
              title: 'Choose Program',
              description: 'Select the program that best fits your needs and aspirations.',
              icon: Target
            },
            {
              step: 4,
              title: 'Submit Application',
              description: 'Complete the program-specific application form and submit for review.',
              icon: Award
            }
          ].map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-800" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/student-portal"
            variant="primary"
            size="lg"
          >
            Start Your Application
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ProgramsPage;