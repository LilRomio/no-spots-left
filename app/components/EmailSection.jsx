'use client';
import React, { useState } from 'react';
import Whatsapp from '../assets/whatsapp.png';
import Phone from '../assets/phone.png';
import Facebook from '../assets/facebook.png';
import Link from 'next/link';

import { motion } from 'framer-motion';
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
        <h5 className="my-2 text-3xl font-bold text-black">Let&apos;s Get This Sorted, Shall We?</h5>
        <p className="max-w-md mb-4 text-xl text-black ">
          {' '}
          Pop your details, and we’ll be round to give your Surrey space a proper tidy – no spot left behind!{' '}
        </p>
        <div className="flex flex-row gap-8 socials">
          <a href="tel:+447570532554" target="_blank" rel="noreferrer">
            <motion.img
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              src={Phone.src}
              alt="Phone"
              width={40}
              height={40}
            />
          </a>
          <a href="whatsapp://send?text=Hello World!&phone=+447570532554" target="_blank" rel="noreferrer">
            <motion.img
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              src={Whatsapp.src}
              alt="Whatsapp"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.facebook.com/people/Gstar-cleaning-property-management/100090615077315/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              src={Facebook.src}
              alt="Facebook"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div className="z-10 items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        {!isFormSubmitted ? (
          <form
            className="app__footer-form app__flex"
            action="https://formsubmit.co/popescu.romeo9@gmail.com"
            method="POST"
            target="_blank"
          >
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
                placeholder="Just saying hi"
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
