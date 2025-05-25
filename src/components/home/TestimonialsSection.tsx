import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Adewale Johnson",
    role: "Computer Science Student",
    institution: "University of Lagos",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    quote: "The BIP scholarship transformed my life. With financial pressure lifted, I could focus on my studies and even developed an award-winning project.",
    story: "From struggling to pay tuition to becoming a top performer in my class, BIP's support made all the difference.",
    impact: [
      "First Class CGPA",
      "Tech Innovation Award",
      "Microsoft Internship"
    ],
    program: "Scholarship & Tech Bootcamp"
  },
  {
    id: 2,
    name: "Amina Ibrahim",
    role: "Software Engineering Student",
    institution: "Ahmadu Bello University",
    image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    quote: "The Women in Tech program gave me the confidence and skills to excel in a male-dominated field.",
    story: "Through mentorship and hands-on projects, I discovered my potential in tech and now lead a campus coding club.",
    impact: [
      "Founded Tech Club",
      "Won Hackathon",
      "Google Internship"
    ],
    program: "Women in Tech Initiative"
  },
  {
    id: 3,
    name: "Chioma Okafor",
    role: "Psychology Student",
    institution: "University of Nigeria, Nsukka",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    quote: "BIP's mental health program helped me overcome anxiety and achieve academic excellence.",
    story: "The counseling support and wellness workshops transformed my university experience and inspired me to help others.",
    impact: [
      "4.8 CGPA",
      "Mental Health Advocate",
      "Peer Counselor"
    ],
    program: "Mental Health Support"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <Section background="accent">
      <SectionTitle
        title="Success Stories"
        subtitle="Meet the students whose lives have been transformed through our programs"
        center
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Featured Story */}
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-sm opacity-90">{testimonials[activeIndex].role}</p>
                  <p className="text-sm opacity-75">{testimonials[activeIndex].institution}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[activeIndex].program}
                </span>
              </div>

              <blockquote className="relative mb-6">
                <Quote className="absolute text-blue-100 w-8 h-8 -top-4 -left-2 -z-10" />
                <p className="text-gray-700 italic relative z-10">
                  "{testimonials[activeIndex].quote}"
                </p>
              </blockquote>

              <p className="text-gray-600 mb-6">{testimonials[activeIndex].story}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Impact Highlights:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {testimonials[activeIndex].impact.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ArrowRight size={16} className="text-blue-800 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer transition-all ${
                  index === activeIndex
                    ? 'bg-blue-800 text-white'
                    : 'bg-white hover:bg-gray-50'
                } rounded-lg p-4`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className={`font-semibold ${
                      index === activeIndex ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h3>
                    <p className={`text-sm ${
                      index === activeIndex ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {testimonial.program}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/success-stories"
            variant="primary"
          >
            Read More Success Stories
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;