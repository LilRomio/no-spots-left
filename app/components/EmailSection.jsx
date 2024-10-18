'use client';
import React, { useState } from 'react';

import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
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
    <section
      id="contact"
      className="relative grid gap-4 py-24 pt-8 pb-20 my-12 md:grid-cols-2 md:my-12 md:pt-5 md:pb-10 overflow-x-clip"
    >
      <div className="z-10 items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <h5 className="my-2 text-7xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Let&apos;s Get This Sorted, Shall We?
        </h5>
        <p className="max-w-md mb-4 text-2xl  bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
          {' '}
          Pop your details, and we’ll be round to give your Surrey space a proper tidy – no spot left behind!{' '}
        </p>
        <div></div>
        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-4 justify-evenly">
            <div className="flex flex-row items-center justify-start gap-3">
              <Image src={Email.src} alt="email" width={40} height={40} />
              <a href="mailto:giurgealena@gmail.com" className="text-xl font-bold">
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
      <div className="z-10 items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
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
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
                placeholder="Type the service you require"
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
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block min-h-200 w-full p-2.5 "
                placeholder="Let's talk about..."
              />
            </div>

            {true ? (
              <button className="bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full">
                {'Send Message'}
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full"
                onClick={handleSubmit}
              >
                {loading ? 'Sending' : 'Send Message'}
              </button>
            )}
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
