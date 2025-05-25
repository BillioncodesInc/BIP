import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const impactLocations = [
  {
    name: "North West",
    institutions: ["Ahmadu Bello University", "Bayero University"],
    students: 1200,
    coordinates: { top: "25%", left: "35%" }
  },
  {
    name: "North East",
    institutions: ["University of Maiduguri", "Federal University Gashua"],
    students: 800,
    coordinates: { top: "30%", left: "55%" }
  },
  {
    name: "North Central",
    institutions: ["University of Ilorin", "Federal University of Technology Minna"],
    students: 950,
    coordinates: { top: "45%", left: "45%" }
  },
  {
    name: "South West",
    institutions: ["University of Lagos", "University of Ibadan"],
    students: 1500,
    coordinates: { top: "65%", left: "25%" }
  },
  {
    name: "South East",
    institutions: ["University of Nigeria", "Federal University of Technology Owerri"],
    students: 1100,
    coordinates: { top: "60%", left: "60%" }
  },
  {
    name: "South South",
    institutions: ["University of Port Harcourt", "University of Benin"],
    students: 950,
    coordinates: { top: "75%", left: "45%" }
  }
];

const GlobalImpact = () => {
  return (
    <Section background="white">
      <SectionTitle
        title="Our National Impact"
        subtitle="Empowering students across all six geopolitical zones of Nigeria"
        center
      />

      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-[16/9] bg-blue-50 rounded-xl overflow-hidden">
          {/* Nigeria Map Background */}
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg')] bg-cover bg-center opacity-10"></div>

          {/* Impact Points */}
          {impactLocations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="absolute"
              style={{ top: location.coordinates.top, left: location.coordinates.left }}
            >
              <div className="relative group">
                <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center cursor-pointer">
                  <MapPin size={14} className="text-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{location.name}</h3>
                    <div className="text-sm text-gray-600">
                      <p className="mb-1">Key Institutions:</p>
                      <ul className="list-disc list-inside mb-2">
                        {location.institutions.map((inst, i) => (
                          <li key={i}>{inst}</li>
                        ))}
                      </ul>
                      <p>Students Impacted: {location.students}+</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Stats Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6">
            <div className="grid grid-cols-4 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">6</div>
                <div className="text-sm">Geopolitical Zones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm">Partner Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5,000+</div>
                <div className="text-sm">Students Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">200+</div>
                <div className="text-sm">Programs Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default GlobalImpact;