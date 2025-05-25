import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserCheck, School, MapPin, Calendar, Award, Users } from 'lucide-react';
import Section from '../ui/Section';

interface MetricProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
  delay?: number;
}

const Metric = ({ icon, value, label, duration = 2, delay = 0 }: MetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    
    // Duration in seconds
    const totalDuration = duration * 1000;
    const incrementTime = totalDuration / end;
    
    setTimeout(() => {
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }, delay);
  }, [isInView, value, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
    >
      <div className="p-3 rounded-full bg-blue-100 text-blue-800 mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold text-blue-800 mb-2">{isInView ? count : 0}+</h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const ImpactMetrics = () => {
  return (
    <Section background="gray" className="relative">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="section-title">Our Impact in Numbers</h2>
        <p className="section-subtitle mx-auto">
          Since our inception, we've been committed to making a meaningful difference in the lives of Nigerian students.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Metric 
          icon={<UserCheck size={24} />}
          value={5000}
          label="Students Empowered"
          delay={0}
        />
        <Metric 
          icon={<School size={24} />}
          value={50}
          label="Institutions Reached"
          delay={200}
        />
        <Metric 
          icon={<Award size={24} />}
          value={250}
          label="Scholarships Awarded"
          delay={400}
        />
        <Metric 
          icon={<Users size={24} />}
          value={120}
          label="Program Facilitators"
          delay={600}
        />
        <Metric 
          icon={<Calendar size={24} />}
          value={75}
          label="Events Organized"
          delay={800}
        />
        <Metric 
          icon={<MapPin size={24} />}
          value={6}
          label="Geopolitical Zones Covered"
          delay={1000}
        />
      </div>
    </Section>
  );
};

export default ImpactMetrics;