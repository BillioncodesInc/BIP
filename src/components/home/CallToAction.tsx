import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <div className="bg-blue-900 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_0px,#ffffff,transparent)]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container-custom relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Empowering the Next Generation
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a student looking for opportunities, a volunteer wanting to make an impact, or a partner interested in supporting our mission, there's a place for you in the BillionCodes Initiative Program.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              href="/donate" 
              variant="secondary" 
              size="lg"
            >
              Donate Now
            </Button>
            <Button 
              href="/volunteer" 
              variant="outline" 
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Become a Volunteer
            </Button>
            <Button 
              href="/student-portal" 
              variant="outline" 
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Student Portal
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;