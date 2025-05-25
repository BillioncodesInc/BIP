import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

// Sample partners data
const partners = [
  {
    id: 1,
    name: "National Association of Nigerian Students (NANS)",
    logo: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg" // Replace with actual logo
  },
  {
    id: 2,
    name: "University of Lagos",
    logo: "https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg" // Replace with actual logo
  },
  {
    id: 3,
    name: "Ahmadu Bello University",
    logo: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg" // Replace with actual logo
  },
  {
    id: 4,
    name: "Federal University of Technology, Akure",
    logo: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg" // Replace with actual logo
  },
  {
    id: 5,
    name: "University of Nigeria, Nsukka",
    logo: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg" // Replace with actual logo
  },
  {
    id: 6,
    name: "TechNigeria Foundation",
    logo: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg" // Replace with actual logo
  }
];

const PartnersSection = () => {
  return (
    <Section background="white">
      <SectionTitle
        title="Our Valued Partners"
        subtitle="We collaborate with these leading organizations to create meaningful impact across Nigeria."
        center
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="bg-gray-50 rounded-lg p-4 h-24 w-full flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-4">
          Interested in partnering with us? Let's create impact together!
        </p>
        <a 
          href="/partners#become-partner" 
          className="btn btn-outline inline-flex items-center"
        >
          Become a Partner
        </a>
      </div>
    </Section>
  );
};

export default PartnersSection;