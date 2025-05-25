import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from '../components/ui/Section';
import PageHeader from '../components/shared/PageHeader';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is BillionCodes Initiative Program?",
    answer: "BillionCodes Initiative Program is a comprehensive educational initiative designed to empower Nigerian tertiary students through scholarships, skill acquisition, mental health advocacy, and tech-driven innovation programs across all geopolitical zones."
  },
  {
    category: "General",
    question: "Who is eligible for BIP programs?",
    answer: "Our programs are open to all Nigerian tertiary students. Specific eligibility criteria may vary by program, but generally, you must be an enrolled student in a recognized Nigerian institution."
  },
  {
    category: "Scholarships",
    question: "How can I apply for a BIP scholarship?",
    answer: "To apply for a scholarship, create an account on our Student Portal, complete your profile, and submit the required documents. Applications are reviewed on a rolling basis, and selections are made based on academic merit and financial need."
  },
  {
    category: "Scholarships",
    question: "What documents are required for scholarship applications?",
    answer: "Required documents typically include academic transcripts, admission letter, student ID, proof of income/financial need, and a personal statement. Specific requirements may vary by scholarship type."
  },
  {
    category: "Tech Programs",
    question: "Are the tech bootcamps free?",
    answer: "Most of our tech bootcamps are offered free of charge to selected participants. Some advanced programs may have nominal fees, but scholarships are available for deserving candidates."
  },
  {
    category: "Tech Programs",
    question: "Do I need prior coding experience for tech bootcamps?",
    answer: "No prior coding experience is required for our beginner-level bootcamps. However, intermediate and advanced programs may have specific prerequisites."
  },
  {
    category: "Mental Health",
    question: "How can I access mental health support?",
    answer: "Mental health support is available through our online platform and on-campus counseling services. You can book sessions through the Student Portal or reach out to our 24/7 helpline."
  },
  {
    category: "Mental Health",
    question: "Is the counseling service confidential?",
    answer: "Yes, all mental health services are strictly confidential. Our counselors adhere to professional ethics and privacy standards."
  },
  {
    category: "Innovation",
    question: "How often do you organize innovation challenges?",
    answer: "We organize major innovation challenges quarterly, with smaller themed hackathons and competitions running throughout the academic year."
  },
  {
    category: "Innovation",
    question: "What kind of support do winners receive?",
    answer: "Winners receive mentorship, funding opportunities, incubation support, and connections to industry partners. Prizes vary by competition."
  },
  {
    category: "Volunteering",
    question: "How can I volunteer with BIP?",
    answer: "Visit our Volunteer page to explore opportunities and submit an application. We welcome volunteers for program facilitation, mentorship, and event organization."
  },
  {
    category: "Volunteering",
    question: "What is the time commitment for volunteers?",
    answer: "Volunteer commitments vary by role, ranging from a few hours per week to project-based engagements. We offer flexible options to accommodate different schedules."
  }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    document.title = 'FAQ | BillionCodes Initiative Program';
  }, []);

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our programs and services."
      />

      <Section background="white">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="text-left font-medium text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="flex-shrink-0 text-gray-500" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-gray-500" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <a 
            href="/contact" 
            className="btn btn-primary inline-flex items-center"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
};

export default FAQPage;