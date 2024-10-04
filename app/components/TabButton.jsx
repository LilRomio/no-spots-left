import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: '50%' }, // Full width when active
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'font-extrabold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text  decoration-slate-900'
    : 'text-black hover:text-[#001E80] hover:font-extrabold';

  return (
    <button onClick={selectTab} className="relative flex flex-col items-center">
      <p className={`mr-3 transition-all duration-300 ease-in-out ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className={`h-1 mt-1 bg-[#001E80] w-[200px] rounded-md transition-all duration-300 ease-in-out`}
      />
    </button>
  );
};

export default TabButton;
