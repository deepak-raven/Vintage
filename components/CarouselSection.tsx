
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://picsum.photos/seed/steamtrain/800/600',
  'https://picsum.photos/seed/westernscape/800/600',
  'https://picsum.photos/seed/vintagemachine/800/600',
  'https://picsum.photos/seed/steampunkcity/800/600',
];

const RevolverIcon: React.FC<{ onClick: () => void; className?: string }> = ({ onClick, className }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    onClick();
    setTimeout(() => setIsSpinning(false), 500);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`w-16 h-16 text-[#4a3c2c] hover:text-[#d4af37] transition-colors duration-300 ${className}`}
      whileTap={{ scale: 0.9 }}
    >
      <motion.svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: isSpinning ? 360 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="7.5" r="1.5"/><circle cx="16.5" cy="12" r="1.5"/>
        <circle cx="12" cy="16.5" r="1.5"/><circle cx="7.5" cy="12" r="1.5"/>
        <circle cx="14.2" cy="9.2" r="1.5"/><circle cx="9.8" cy="14.8" r="1.5"/>
      </motion.svg>
    </motion.button>
  );
};


const CarouselSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#4a3c2c]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-wood.png')" }}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl font-cinzel text-center text-[#d4af37] mb-8 drop-shadow-lg">Gallery of Marvels</h2>
        <div className="w-full max-w-4xl p-8 bg-[#f0e6d2] border-8 border-[#2d241c] shadow-2xl shadow-black/50"
             style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/old-paper.png')" }}>
          <div className="relative flex items-center justify-center">
            <h3 className="absolute -top-16 text-6xl font-cinzel text-red-800 -rotate-6 tracking-widest"
                style={{ textShadow: '2px 2px #2d241c' }}>
              WANTED
            </h3>
            <RevolverIcon onClick={prevImage} className="absolute -left-24 z-10" />
            <div className="relative w-full aspect-[4/3] overflow-hidden border-4 border-[#8c785d]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={index}
                  src={images[index]}
                  alt="Steampunk Gallery Image"
                  className="absolute top-0 left-0 w-full h-full object-cover filter sepia"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </div>
            <RevolverIcon onClick={nextImage} className="absolute -right-24 z-10" />
          </div>
          <p className="mt-8 text-center text-lg text-[#4a3c2c] px-8">A collection of curiosities from a time that never was, but could have been. Observe the marvels of steam and steel.</p>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
