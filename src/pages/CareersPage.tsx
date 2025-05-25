import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, Send } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const openPositions = [
  {
    title: 'Program Manager',
    department: 'Operations',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    description: 'We are seeking an experienced Program Manager to oversee our educational initiatives and ensure effective program delivery.',
    responsibilities: [
      'Develop and implement program strategies',
      'Manage program budgets and resources',
      'Coordinate with stakeholders and partners',
      'Monitor and evaluate program outcomes',
      'Lead a team of program coordinators'
    ],
    requirements: [
      "Bachelor's degree in Education, Management, or related field",
      '5+ years of program management experience',
      'Strong leadership and communication skills',
      'Experience in education sector preferred',
      'Proficiency in project management tools'
    ]
  },
  {
    title: 'Tech Bootcamp Instructor',
    department: 'Education',
    location: 'Remote',
    type: 'Contract',
    description: 'Looking for experienced developers to lead our tech bootcamp sessions and mentor aspiring developers.',
    responsibilities: [
      'Develop curriculum for web development courses',
      'Conduct online and in-person training sessions',
      'Provide mentorship to students',
      'Create assessment materials',
      'Track student progress and provide feedback'
    ],
    requirements: [
      '3+ years of professional development experience',
      'Strong knowledge of modern web technologies',
      'Teaching or mentoring experience',
      'Excellent communication skills',
      'Passion for education'
    ]
  },
  {
    title: 'Mental Health Counselor',
    department: 'Student Support',
    location: 'Hybrid',
    type: 'Part-time',
    description: 'Seeking licensed mental health professionals to provide counseling services to students.',
    responsibilities: [
      'Provide individual and group counseling',
      'Conduct mental health workshops',
      'Develop support resources',
      'Maintain confidential records',
      'Collaborate with student support team'
    ],
    requirements: [
      'Licensed mental health professional',
      '2+ years counseling experience',
      'Experience working with students',
      'Strong empathy and listening skills',
      'Knowledge of crisis intervention'
    ]
  }
];

const CareersPage = () => {
  useEffect(() => {
    document.title = 'Careers | BillionCodes Initiative Program';
  }, []);

  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Build your career while making a difference in Nigerian education."
      />

      {/* Why Join Us Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Join BillionCodes?</h2>
          <p className="text-gray-600">
            Be part of a mission-driven team working to transform education in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Meaningful Impact',
              description: 'Work that directly contributes to improving education and student lives.',
              icon: '🎯'
            },
            {
              title: 'Growth Opportunities',
              description: 'Continuous learning and professional development support.',
              icon: '📈'
            },
            {
              title: 'Inclusive Culture',
              description: 'A diverse and collaborative environment where every voice matters.',
              icon: '🤝'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      <p className="text-gray-600">{position.department}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Button variant="primary" icon={<Send size={16} />}>
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-1" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase size={16} className="mr-1" />
                      {position.department}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{position.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {position.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {position.requirements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Employee Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Health Insurance',
                description: 'Comprehensive health coverage for you and your family'
              },
              {
                icon: '📚',
                title: 'Learning Budget',
                description: 'Annual budget for professional development'
              },
              {
                icon: '⏰',
                title: 'Flexible Hours',
                description: 'Work-life balance with flexible scheduling'
              },
              {
                icon: '🏖️',
                title: 'Paid Time Off',
                description: 'Generous vacation and personal days'
              },
              {
                icon: '💪',
                title: 'Wellness Program',
                description: 'Mental and physical wellness support'
              },
              {
                icon: '🎯',
                title: 'Performance Bonus',
                description: 'Recognition for exceptional contributions'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default CareersPage;