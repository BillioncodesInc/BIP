import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

// Program data
const programs = [
  {
    id: 'scholarships',
    title: 'Scholarships & Grants',
    description: 'Financial support for deserving students facing economic challenges across Nigerian institutions.',
    image: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg',
    icon: '🎓',
  },
  {
    id: 'bootcamps',
    title: 'Tech Bootcamps',
    description: 'Intensive training programs in software development, data science, and digital skills.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    icon: '💻',
  },
  {
    id: 'women-in-tech',
    title: 'Women in Tech',
    description: 'Empowering female students with tech skills, mentorship, and leadership opportunities.',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
    icon: '👩‍💻',
  },
  {
    id: 'mental-health',
    title: 'Mental Health Advocacy',
    description: 'Supporting student wellbeing through awareness, counseling, and mental health resources.',
    image: 'https://images.pexels.com/photos/6383152/pexels-photo-6383152.jpeg',
    icon: '🧠',
  },
  {
    id: 'innovation',
    title: 'Innovation Challenges',
    description: 'Competitions and hackathons to foster creativity and problem-solving skills among students.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    icon: '💡',
  }
];

const ProgramsOverview = () => {
  return (
    <Section background="white">
      <SectionTitle
        title="Our Impact-Driven Programs"
        subtitle="Discover how BIP is transforming education and empowering students across Nigeria through our innovative initiatives."
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition duration-500 transform hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md">
                  {program.icon}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{program.description}</p>
                <Link 
                  to={`/programs#${program.id}`}
                  className="flex items-center text-blue-800 font-medium mt-2 hover:underline"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/programs"
          className="btn btn-primary inline-flex items-center"
        >
          View All Programs
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </Section>
  );
};

export default ProgramsOverview;