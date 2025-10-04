
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="py-8 text-center bg-[#1c1713]"
      style={{ borderTop: '2px solid #4a3c2c' }}
    >
      <div className="container mx-auto px-4">
        <p className="text-lg font-cinzel text-[#8c785d]">
          Steampunk Wonders &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-[#8c785d]">
          Crafted with Steam, Steel, and Code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
