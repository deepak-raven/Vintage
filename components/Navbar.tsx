
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GearIcon: React.FC<{ rotationSpeed: number }> = ({ rotationSpeed }) => (
  <motion.svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#d4af37]"
    animate={{ rotate: 360 }}
    transition={{ duration: rotationSpeed, repeat: Infinity, ease: 'linear' }}
  >
    <path
      d="M16.5 6.5L18 8L16 10L14.5 11.5L13 10L11.5 8.5L10 10L8.5 11.5L7 10L5.5 8.5L4 10L2.5 8.5L4 7L5.5 5.5L7 7L8.5 5.5L10 7L11.5 5.5L13 7L14.5 5.5L16.5 6.5Z"
      stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M19.4 15L21.5 16.5L20 18L18.5 19.5L17 18L15.5 16.5L14 18L12.5 19.5L11 18L9.5 16.5L8 18L6.5 16.5L8 15L9.5 13.5L11 15L12.5 13.5L14 15L15.5 13.5L17 15L18.5 13.5L19.4 15Z"
      stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
    />
  </motion.svg>
);

const NavLink: React.FC<{ children: React.ReactNode; onHover: (isHovering: boolean) => void }> = ({ children, onHover }) => {
  return (
    <motion.a
      href="#"
      className="relative px-6 py-2 text-lg font-cinzel text-center transition-colors duration-300"
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#b48d2c] to-[#d4af37] shadow-lg"
        style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
        variants={{
          initial: { boxShadow: '0 0 0px rgba(212, 175, 55, 0)', scale: 1 },
          hover: { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)', scale: 1.05 }
        }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 text-[#2d241c] drop-shadow-sm">{children}</span>
    </motion.a>
  );
};

const Navbar: React.FC = () => {
  const [hoverCount, setHoverCount] = useState(0);
  const rotationSpeed = hoverCount > 0 ? 5 : 15;

  const handleHover = (isHovering: boolean) => {
    setHoverCount(prev => isHovering ? prev + 1 : prev - 1);
  };

  const navLinks = ["Home", "Gallery", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-20 bg-[#2d241c]/80 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 shadow-lg shadow-black/30"
         style={{ borderBottom: '2px solid #4a3c2c' }}>
      <GearIcon rotationSpeed={rotationSpeed} />
      <div className="flex items-center space-x-2 md:space-x-4">
        {navLinks.map(link => (
          <NavLink key={link} onHover={handleHover}>{link}</NavLink>
        ))}
      </div>
      <GearIcon rotationSpeed={rotationSpeed} />
    </nav>
  );
};

export default Navbar;
