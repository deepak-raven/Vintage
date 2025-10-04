
import React from 'react';
import { motion } from 'framer-motion';

const PocketWatchIcon: React.FC = () => (
    <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54 4H46V12C48.25 10.3 51.75 10.3 54 12V4Z" fill="#d4af37"/>
        <circle cx="50" cy="65" r="45" fill="#2d241c" stroke="#d4af37" strokeWidth="4"/>
        <circle cx="50" cy="65" r="40" fill="#f0e6d2" stroke="#4a3c2c" strokeWidth="2"/>
        <circle cx="50" cy="65" r="5" fill="#4a3c2c"/>

        {/* Hour Hand */}
        <motion.line 
            x1="50" y1="65" x2="50" y2="40" 
            stroke="#2d241c" strokeWidth="4" strokeLinecap="round"
            style={{ originX: '50px', originY: '65px' }}
            animate={{ rotate: 360*2 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Minute Hand */}
        <motion.line 
            x1="50" y1="65" x2="50" y2="30" 
            stroke="#4a3c2c" strokeWidth="2" strokeLinecap="round"
            style={{ originX: '50px', originY: '65px' }}
            animate={{ rotate: 360*12 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
    </svg>
);


const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2d241c]"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, delay: 0.5 } }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        <PocketWatchIcon />
      </motion.div>
      <motion.h1 
        className="mt-4 text-2xl font-cinzel text-[#d4af37] tracking-widest"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        Winding up the gears...
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
