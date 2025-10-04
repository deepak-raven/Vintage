
import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="w-full md:w-1/3 p-4"
      whileHover={{ y: -15, scale: 1.05, rotateX: 10, rotateY: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="h-full bg-[#f0e6d2] rounded-lg overflow-hidden shadow-2xl shadow-black/60 cursor-pointer"
           style={{ 
             backgroundImage: "url('https://www.transparenttextures.com/patterns/old-paper-2.png')",
             border: '3px solid #4a3c2c',
             boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3), 0 0 15px rgba(0,0,0,0.5)'
           }}>
        <div className="p-2 bg-[#4a3c2c]">
          <img className="w-full h-48 object-cover filter sepia-[0.8] saturate-125" src={imageUrl} alt={title} />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-cinzel text-[#2d241c] mb-2">{title}</h3>
          <p className="text-md text-[#4a3c2c] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const InfoSection: React.FC = () => {
  const cardData = [
    {
      title: 'The Automaton',
      description: 'Ingenious clockwork creations that mimic life, serving humanity with tireless precision and unerring logic.',
      imageUrl: 'https://picsum.photos/seed/automaton/400/300'
    },
    {
      title: 'Aetheric Travel',
      description: 'Harnessing the luminiferous aether to power magnificent airships that sail the skies between floating cities.',
      imageUrl: 'https://picsum.photos/seed/airship/400/300'
    },
    {
      title: 'Babbage Engines',
      description: 'Vast, steam-driven analytical engines that calculate the very fabric of the cosmos, ushering in a new age of reason.',
      imageUrl: 'https://picsum.photos/seed/babbage/400/300'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#2d241c]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center text-[#d4af37] mb-12 drop-shadow-lg">Pillars of the Age</h2>
        <div className="flex flex-wrap -m-4">
          {cardData.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
