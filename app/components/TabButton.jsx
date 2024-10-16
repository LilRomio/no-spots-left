import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the underline
const variants = {
  default: { width: 0 },
  active: { width: '100%' }, // Full width when active on larger screens
};

const TabButton = ({ active, selectTab, children }) => {
  // Dynamic button classes based on active state
  const buttonClasses = active
    ? 'font-black text-xl tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'
    : 'text-black text-lg md:text-xl hover:text-[#001E80] hover:font-bold';

  return (
    <button onClick={selectTab} className="relative flex flex-col items-center w-full">
      {/* Tab Title */}
      <p className={`mr-3 transition-all duration-300 ease-in-out ${buttonClasses}`}>{children}</p>

      {/* Responsive Animated Underline */}
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="h-1 mt-1 bg-[#001E80] w-[50%] sm:w-[75%] md:w-[100%] rounded-md transition-all duration-300 ease-in-out mb-4"
      />
    </button>
  );
};

export default TabButton;
