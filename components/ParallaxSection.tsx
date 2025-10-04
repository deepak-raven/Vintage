
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const ySteam = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="relative h-screen">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/blueprint.png')",
          y: yBg,
          backgroundColor: '#4a3c2c',
          backgroundBlendMode: 'overlay'
        }}
      />
      <motion.div
        className="absolute inset-0 bg-repeat-x bg-bottom opacity-20"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/fog.png')",
          y: ySteam,
        }}
      />
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className="max-w-3xl text-center px-4"
          style={{ opacity: opacityText }}
        >
          <h2 className="text-5xl md:text-6xl font-cinzel text-[#d4af37] mb-6 drop-shadow-lg">The Age of Invention</h2>
          <p className="text-lg md:text-xl text-white leading-loose">
            In a world powered by steam and imagination, progress is forged in the fires of industry. 
            Great minds craft wonders of brass and steel, pushing the boundaries of what is possible. 
            From the deepest mines to the highest skies, the hum of machinery is the anthem of a new era.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
