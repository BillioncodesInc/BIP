import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, BookOpen, Megaphone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  interests: string[];
  availability: string;
  experience: string;
  motivation: string;
}

const volunteerOpportunities = [
  {
    title: 'Student Mentorship',
    icon: Users,
    description: 'Guide and support students in their academic and career journeys.',
    commitment: '2-4 hours/week',
    requirements: [
      'Minimum 3 years professional experience',
      'Strong communication skills',
      'Passion for education'
    ]
  },
  {
    title: 'Event Organization',
    icon: Calendar,
    description: 'Help plan and execute educational events, workshops, and seminars.',
    commitment: 'Project-based',
    requirements: [
      'Event planning experience',
      'Good organizational skills',
      'Team player'
    ]
  },
  {
    title: 'Teaching & Training',
    icon: BookOpen,
    description: 'Conduct workshops and training sessions in your area of expertise.',
    commitment: '4-6 hours/week',
    requirements: [
      'Expert in relevant field',
      'Teaching experience preferred',
      'Excellent presentation skills'
    ]
  },
  {
    title: 'Outreach & Advocacy',
    icon: Megaphone,
    description: 'Spread awareness about our programs and initiatives.',
    commitment: 'Flexible',
    requirements: [
      'Strong network',
      'Good communication skills',
      'Social media savvy'
    ]
  }
];

const VolunteerPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<VolunteerFormData>();

  useEffect(() => {
    document.title = 'Volunteer With Us | BillionCodes Initiative Program';
  }, []);

  const onSubmit = (data: VolunteerFormData) => {
    console.log(data);
    // In a real application, you would send this data to your server
    alert('Thank you for your interest in volunteering! We will review your application and get back to you soon.');
  };

  return (
    <>
      <PageHeader
        title="Volunteer With Us"
        description="Join our community of dedicated volunteers making a difference in Nigerian education."
        image="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
      />

      {/* Impact Stats */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: '200+', label: 'Active Volunteers' },
            { value: '5,000+', label: 'Students Impacted' },
            { value: '50+', label: 'Events Supported' },
            { value: '1,000+', label: 'Mentoring Hours' }
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
      </Section>

      {/* Volunteer Opportunities */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Volunteer Opportunities</h2>
          <p className="text-gray-600">
            Explore different ways you can contribute to our mission and make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {volunteerOpportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <opportunity.icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-blue-800">
                      Time Commitment: {opportunity.commitment}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {opportunity.requirements.map((req, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply to Volunteer</h2>
            <p className="text-gray-600">
              Fill out the form below to join our volunteer community.
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Occupation
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.occupation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('occupation', { required: 'Occupation is required' })}
                />
                {errors.occupation && (
                  <p className="mt-1 text-sm text-red-500">{errors.occupation.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest
                </label>
                <div className="space-y-2">
                  {volunteerOpportunities.map((opp) => (
                    <label key={opp.title} className="flex items-center">
                      <input
                        type="checkbox"
                        value={opp.title}
                        className="rounded border-gray-300 text-blue-800 focus:ring-blue-500"
                        {...register('interests', { required: 'Please select at least one area' })}
                      />
                      <span className="ml-2 text-gray-700">{opp.title}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && (
                  <p className="mt-1 text-sm text-red-500">{errors.interests.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <select
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.availability ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('availability', { required: 'Please select your availability' })}
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both Weekdays and Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.availability && (
                  <p className="mt-1 text-sm text-red-500">{errors.availability.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relevant Experience
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.experience ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your relevant experience..."
                  {...register('experience', { required: 'Please share your experience' })}
                ></textarea>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-500">{errors.experience.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to volunteer with us?
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none ${
                    errors.motivation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Share your motivation..."
                  {...register('motivation', { required: 'Please share your motivation' })}
                ></textarea>
                {errors.motivation && (
                  <p className="mt-1 text-sm text-red-500">{errors.motivation.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                icon={<Send size={18} />}
                fullWidth
              >
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Volunteering with BIP has been incredibly rewarding. Seeing the direct impact we make in students' lives is priceless.",
                author: "John Doe",
                role: "Student Mentor",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              },
              {
                quote: "The team is amazing, and the students are so eager to learn. It's a wonderful environment to contribute and grow.",
                author: "Sarah Ahmed",
                role: "Event Coordinator",
                image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What is the minimum time commitment?",
                answer: "The minimum time commitment varies by role, but typically ranges from 2-6 hours per week. We offer flexible schedules to accommodate our volunteers."
              },
              {
                question: "Do I need specific qualifications?",
                answer: "Requirements vary by role. While some positions require specific expertise, many opportunities only need enthusiasm and commitment to our mission."
              },
              {
                question: "Is training provided?",
                answer: "Yes, all volunteers receive comprehensive training and ongoing support to ensure they're well-equipped for their roles."
              },
              {
                question: "Can I volunteer remotely?",
                answer: "Yes, many of our volunteer opportunities offer remote options, especially for mentoring and content creation roles."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default VolunteerPage;