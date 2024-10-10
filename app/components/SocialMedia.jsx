'use client';

import React from 'react';
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
import { BiLogoGmail, BiMobileVibration } from 'react-icons/bi';
import { motion } from 'framer-motion';
const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-center hidden p-4 md:flex">
      <div className="w-[40px] h-[40px] rounded-sm bg-white my-1 flex justify-center items-center">
        <a href="tel:0733273674 " target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <BiMobileVibration />
          </motion.div>
        </a>
      </div>
      <div className="w-[40px] h-[40px] rounded-sm bg-white my-1 flex justify-center items-center">
        <a href="whatsapp://send?text=Hello World!&phone=+40733273674" target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <FaWhatsappSquare />
          </motion.div>
        </a>
      </div>
      <div className="w-[40px] h-[40px] rounded-sm bg-white my-1 flex justify-center items-center">
        <a
          href="https://www.facebook.com/people/Gstar-cleaning-property-management/100090615077315/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <FaFacebookF />
          </motion.div>
        </a>
      </div>
      <div className="w-[40px] h-[40px] rounded-sm bg-white my-1 flex justify-center items-center">
        <a href="mailto:giurgealena@gmail.com" target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <BiLogoGmail />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
