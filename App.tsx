
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarouselSection from './components/CarouselSection';
import InfoSection from './components/InfoSection';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="bg-[#2d241c] text-[#f0e6d2] overflow-x-hidden"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}
    >
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <CarouselSection />
              <InfoSection />
              <ParallaxSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
