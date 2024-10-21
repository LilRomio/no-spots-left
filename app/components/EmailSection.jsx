'use client';
import React, { useState } from 'react';

import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import Email from '../assets/email.png';
import Mobile from '../assets/mobile.png';
import Link from 'next/link';

import { motion } from 'framer-motion';
import Image from 'next/image';
const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { email, phone, subject, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <section id="contact" className="relative grid gap-4 pt-1 pb-20 md:grid-cols-2 overflow-x-clip">
      <div className="z-10 items-center gap-8 px-4 xl:gap-16 xl:px-16">
        <h5 className="my-2 text-5xl md:text-7xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Let&apos;s Get This Sorted, Shall We?
        </h5>
        <p className="max-w-md mb-4 text-xl lg:text-2xl section-description">
          {' '}
          Pop your details, and we’ll be round to give your Surrey space a proper tidy – no spot left behind!{' '}
        </p>

        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col justify-center gap-6 ">
            <div className="flex flex-row items-center justify-start gap-3">
              <Image src={Email.src} alt="email" width={40} height={40} />
              <a href="mailto:nospotsleft@gmail.com" className="text-xl font-bold">
                nospotsleft@gmail.com
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <Image src={Mobile.src} alt="mobile" width={40} height={40} />
              <a href="tel:07570532554 " className="text-xl font-bold">
                07570532554
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            {/* WhatsApp Button */}
            <div className=" w-[40px] h-[40px] rounded-full bg-[#FF6F61] my-1 flex justify-center items-center hover:bg-[#D3D3D3]  transition-colors duration-300">
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
          </div>
        </div>
      </div>
      <div className="z-10 items-center gap-8 px-4 xl:gap-16 xl:px-16">
        {!isFormSubmitted ? (
          <form action="https://formsubmit.co/popescu.romeo9@gmail.com" method="POST" target="_blank">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-black">
                Your Telephone Number
              </label>
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={handleChangeInput}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                placeholder="Telephone"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">
                Subject
              </label>
              <input
                type="subject"
                name="subject"
                value={subject}
                onChange={handleChangeInput}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Type the service you require (ex: Domestic Cleaning)"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
                Message
              </label>
              <textarea
                value={message}
                name="message"
                onChange={handleChangeInput}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block min-h-200 w-full p-2.5 min-h-[180px] md:min-h-[220px] "
                placeholder="Let's talk about..."
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              {true ? (
                <motion.button
                  whileHover={{ scale: 1.05 }} // Slight scaling effect on hover
                  whileTap={{ scale: 0.95 }} // Slight scaling down on click
                  className="bg-[#FF6F61] hover:bg-[#FFFFFF] text-white hover:text-[#FF6F61] font-medium py-2 px-6 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: 'auto', padding: '10px 20px' }} // Smaller button size
                >
                  {'Send Message'}
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }} // Slight scaling down on click
                  type="submit"
                  className="bg-[#FF6F61] hover:bg-[#FFFFFF] text-white hover:text-[#FF6F61] font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300 ease-in-out"
                  onClick={handleSubmit}
                >
                  {loading ? 'Sending' : 'Send Message'}
                </motion.button>
              )}
            </div>
          </form>
        ) : (
          <div>
            <h3 className="section-title ">Thanks for reaching out</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
