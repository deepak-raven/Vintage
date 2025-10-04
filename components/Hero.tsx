
import React from 'react';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';

const GearLogo: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  };

  const gearVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.svg className="absolute w-full h-full text-[#d4af37] drop-shadow-lg" viewBox="0 0 100 100" variants={gearVariants}>
        <path d="M50 10 L55 20 L45 20 Z M90 50 L80 55 L80 45 Z M50 90 L45 80 L55 80 Z M10 50 L20 45 L20 55 Z M78.28 21.72 L71.21 28.79 L64.14 21.72 L71.21 14.65 Z M21.72 78.28 L28.79 71.21 L21.72 64.14 L14.65 71.21 Z M21.72 21.72 L28.79 28.79 L21.72 35.86 L14.65 28.79 Z M78.28 78.28 L71.21 71.21 L64.14 78.28 L71.21 85.35 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="20" fill="#4a3c2c" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </motion.svg>
       <motion.svg className="absolute w-3/4 h-3/4 top-[12.5%] left-[12.5%] text-[#c0c0c0] opacity-80" viewBox="0 0 100 100" variants={gearVariants}
          animate={{ rotate: 360, transition: { duration: 20, repeat: Infinity, ease: 'linear' } }}>
        <path d="M50 15 L53 25 L47 25 Z M85 50 L75 53 L75 47 Z M50 85 L47 75 L53 75 Z M15 50 L25 47 L25 53 Z M74.75 25.25 L68.25 31.75 L61.75 25.25 L68.25 18.75 Z M25.25 74.75 L31.75 68.25 L25.25 61.75 L18.75 68.25 Z M25.25 25.25 L31.75 31.75 L25.25 38.25 L18.75 31.75 Z M74.75 74.75 L68.25 68.25 L61.75 74.75 L68.25 81.25 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const bgX = useTransform(mouseX, [-0.5, 0.5], ['-20px', '20px']);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ['-20px', '20px']);

  return (
    <section 
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <motion.div
        className="absolute inset-[-20px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/steampunkbg/1920/1080')",
          filter: 'sepia(0.6) brightness(0.7)',
          x: bgX,
          y: bgY
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
      <div className="absolute inset-0 bg-black/40" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/worn-dots.png')" }}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <GearLogo />
        <motion.h1 
          className="mt-8 text-5xl md:text-7xl font-cinzel text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
        >
          Steampunk Wonders
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl text-lg md:text-xl text-[#f0e6d2] drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4, ease: "easeOut" }}
        >
          Discover a world where Victorian elegance meets industrial might.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
