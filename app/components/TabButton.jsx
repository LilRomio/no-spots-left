import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-[20px]  underline decoration-slate-900'
    : 'text-black';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:font-extrabold hover  ${buttonClasses}`}>{children}</p>
      <motion.div animate={active ? 'active' : 'default'} variants={variants} className="h-1 mt-2 mr-3 bg-primary-500"></motion.div>
    </button>
  );
};

export default TabButton;
