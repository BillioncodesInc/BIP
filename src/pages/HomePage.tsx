import { useEffect, lazy, Suspense } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Lazy load components
const Hero = lazy(() => import('../components/home/Hero'));
const ProgramsOverview = lazy(() => import('../components/home/ProgramsOverview'));
const ImpactMetrics = lazy(() => import('../components/home/ImpactMetrics'));
const GlobalImpact = lazy(() => import('../components/home/GlobalImpact'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const UpcomingEvents = lazy(() => import('../components/home/UpcomingEvents'));
const BlogPreview = lazy(() => import('../components/home/BlogPreview'));
const PartnersSection = lazy(() => import('../components/home/PartnersSection'));
const CallToAction = lazy(() => import('../components/home/CallToAction'));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

const HomePage = () => {
  useEffect(() => {
    document.title = 'BillionCodes Initiative Program | Empowering Nigerian Students';
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ProgramsOverview />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ImpactMetrics />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GlobalImpact />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <UpcomingEvents />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <BlogPreview />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <PartnersSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CallToAction />
        </Suspense>
      </motion.div>
    </LazyMotion>
  );
};

export default HomePage;