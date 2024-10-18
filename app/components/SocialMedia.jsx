'use client';

import React from 'react';
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
import { BiLogoGmail, BiMobileVibration } from 'react-icons/bi';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-center hidden p-4 md:flex">
      {/* Mobile Button */}
      <div className="w-[40px] h-[40px] rounded-full bg-[#FF6F61] my-1 flex justify-center items-center hover:bg-[#D3D3D3] transition-colors duration-300">
        <a href="tel:07570532554" target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <BiMobileVibration className="text-white hover:text-[#FF6F61] transition-colors duration-300" />
          </motion.div>
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="w-[40px] h-[40px] rounded-full bg-[#FF6F61] my-1 flex justify-center items-center hover:bg-[#D3D3D3]  transition-colors duration-300">
        <a href="whatsapp://send?text=Hello World!&phone=+447570532554" target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <FaWhatsappSquare className="text-white hover:text-[#FF6F61] transition-colors duration-300" />
          </motion.div>
        </a>
      </div>

      {/* Facebook Button */}
      <div className="w-[40px] h-[40px] rounded-full bg-[#FF6F61] my-1 flex justify-center items-center hover:bg-[#D3D3D3]  transition-colors duration-300">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <FaFacebookF className="text-white hover:text-[#FF6F61] transition-colors duration-300" />
          </motion.div>
        </a>
      </div>

      {/* Email Button */}
      <div className="w-[40px] h-[40px] rounded-full bg-[#FF6F61] my-1 flex justify-center items-center hover:bg-[#D3D3D3]  transition-colors duration-300">
        <a href="mailto:popescu.romeo9@gmail.com" target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <BiLogoGmail className="text-white hover:text-[#FF6F61] transition-colors duration-300" />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
