import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff,transparent)]"></div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-6">
              In Partnership with NANS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Nigerian Students for a Better Future
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Through scholarships, skills acquisition, mental health advocacy, and tech-driven innovation programs across all geopolitical zones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                href="/programs" 
                variant="secondary" 
                size="lg"
              >
                Explore Programs
              </Button>
              <Button 
                href="/donate" 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Support Our Mission
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <img 
              src="https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg" 
              alt="Nigerian students collaborating" 
              className="rounded-lg shadow-2xl"
            />
            
            {/* Impact Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-white text-gray-900 p-6 rounded-lg shadow-xl"
            >
              <h3 className="text-blue-800 font-bold mb-3">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-orange-500">5,000+</p>
                  <p className="text-sm text-gray-600">Students Empowered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">50+</p>
                  <p className="text-sm text-gray-600">Institutions Reached</p>
                </div>
              </div>
              <a href="/about#impact" className="flex items-center text-blue-800 font-medium mt-3 text-sm">
                See all metrics <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;