'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/NoSpotsLeft-logo.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavLink from './NavLink';

const navLinks = [
  {
    title: 'Home',
    path: 'heroSection',
    isScroll: true, // Regular navigation
  },
  {
    title: 'What We Do',
    path: 'whatWeDo',
    isScroll: true, // Smooth scroll navigation
  },
  {
    title: 'Testimonials',
    path: 'testimonials',
    isScroll: true, // Smooth scroll navigation
  },
  {
    title: 'Contact',
    path: 'contact',
    isScroll: true, // Smooth scroll navigation
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md">
      <div
        className="max-w-[1300px] mx-auto flex justify-between text-black
        text-xl items-center px-12 h-20"
      >
        <Link href={'/'}>
          <Image src={Logo} alt="No Spots Left Logo" height={40} width={60} />
        </Link>

        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isScroll ? (
                  <Link
                    to={link.path}
                    smooth={true}
                    offset={-70} // Offset for fixed navbar
                    duration={500}
                    className="cursor-pointer"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <NavLink href={link.path} title={link.title} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div onClick={toggleNav} className="z-50 text-black/60 md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed top-0 left-0 z-40 w-full min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
        >
          <div className="block menu md:hidden md:w-auto" id="navbar">
            <ul className="mt-24 space-y-8 text-3xl font-semibold text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.isScroll ? (
                    <Link
                      to={link.path}
                      smooth={true}
                      offset={-70} // Adjust according to your fixed navbar height
                      duration={500}
                      className="cursor-pointer"
                      onClick={closeNav} // Close menu after clicking
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <NavLink href={link.path} title={link.title} onClick={closeNav} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
