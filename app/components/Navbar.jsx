'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logo from '../assets/NoSpotsLeft-logo.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavLink from './NavLink';

// Main navigation links
const navLinks = [
  {
    title: 'Home',
    path: 'heroSection',
    isScroll: true,
  },
  {
    title: 'What We Do',
    path: 'whatWeDo',
    isScroll: true,
    hasSubLinks: true,
    subLinks: [
      { title: 'Domestic Cleaning', path: 'domestic' },
      { title: 'Office Cleaning', path: 'office' },
      { title: 'End of Tenancy Cleaning', path: 'endTenancy' },
      { title: 'Deep Cleaning Services', path: 'deepCleaning' },
      { title: 'Carpet & Upholstery Cleaning', path: 'carpet' },
      { title: 'Post-Construction Cleaning', path: 'construction' },
      { title: 'Pressure Washing', path: 'pressure' },
      { title: 'Airbnb Rental Cleaning', path: 'airBnb' },
      { title: 'Commercial & Retail Cleaning', path: 'commercial' },
    ],
  },
  {
    title: 'Testimonials',
    path: 'testimonials',
    isScroll: true,
  },
  {
    title: 'Contact',
    path: 'contact',
    isScroll: true,
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true); // Track visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Track previous scroll position

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); // Show navbar if scrolling up or at top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md transition-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className="max-w-[95%] lg:max-w-[1300px] xl:max-w-[1450px] mx-auto flex justify-between text-black
        text-xl items-center h-20"
      >
        <a href="#heroSection">
          <Image src={Logo} alt="No Spots Left Logo" height={40} width={110} />
        </a>

        {/* Desktop Menu */}
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
        <div onClick={toggleNav} className="z-50 text-[#18191E] md:hidden">
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
                    <>
                      {link.hasSubLinks ? (
                        <>
                          <div className="flex items-center justify-center">
                            <Link
                              to={link.path}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              className="cursor-pointer"
                              onClick={toggleDropdown}
                            >
                              {link.title}
                            </Link>
                            <button onClick={toggleDropdown} className="ml-2">
                              {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                          </div>

                          {/* Sub-links for "What We Do" */}
                          {dropdownOpen && (
                            <ul className="mt-4 space-y-4 text-xl">
                              {link.subLinks.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    to={subLink.path}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={closeNav}
                                  >
                                    {subLink.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="cursor-pointer"
                          onClick={closeNav}
                        >
                          {link.title}
                        </Link>
                      )}
                    </>
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
