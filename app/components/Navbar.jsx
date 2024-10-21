'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { LuMenu } from 'react-icons/lu';

import { TbSquareRoundedChevronDown, TbSquareRoundedChevronUp } from 'react-icons/tb';
import Logo from '../assets/NoSpotsLeft-logo.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavLink from './NavLink';
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
import { BiLogoGmail, BiMobileVibration } from 'react-icons/bi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IoLocationSharp } from 'react-icons/io5';
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
      { title: 'Commercial & Retail Cleaning', path: 'office' },
      { title: 'End of Tenancy Cleaning', path: 'endTenancy' },
      { title: 'Deep Cleaning Services', path: 'deepCleaning' },
      { title: 'Carpet & Upholstery Cleaning', path: 'carpet' },
      { title: 'Pressure Washing', path: 'pressure' },
      { title: 'Airbnb Rental Cleaning', path: 'airBnb' },
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

  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

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

  const setTab = (tabId) => {
    const url = new URL(window.location);
    url.searchParams.set('activeTab', tabId);
    history.pushState(null, '', url);

    if (tabId) {
      document.getElementById(tabId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-opacity-70 backdrop-blur-md transition-transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className="max-w-[95%] lg:max-w-[1300px] xl:max-w-[1450px] mx-auto flex justify-between text-black pr-2
        text-xl items-center h-20 mt-2"
      >
        <a href="#heroSection">
          <Image src={Logo} alt="No Spots Left Logo" height={40} width={110} />
        </a>
        <div className="items-center justify-center hidden gap-4 py-3 font-bold lg:flex md:justify-start text-md md:text-xl">
          <IoLocationSharp className="text-[#FF6F61] w-17 h-17 " /> <span>Godalming</span> <span>Guildford</span>
          <span>Farnham</span>
        </div>
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
        <div onClick={toggleNav} className="z-50 text-[#18191E] ml-2 md:hidden">
          {nav ? (
            <AiOutlineClose className="text-[#FF6F61] " size={40} />
          ) : (
            <LuMenu className="text-[#FF6F61]   " size={50} />
          )}
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed top-0 left-0 z-40 w-full min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
        >
          <div className="flex flex-col items-center justify-between menu md:hidden md:w-auto" id="navbar">
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
                              {dropdownOpen ? (
                                <TbSquareRoundedChevronUp className="text-[#FF6F61] " size={40} />
                              ) : (
                                <TbSquareRoundedChevronDown className="text-[#FF6F61] " size={40} />
                              )}
                            </button>
                          </div>

                          {/* Sub-links for "What We Do" */}
                          {dropdownOpen && (
                            <ul className="flex flex-col items-center mt-4 space-y-2 text-sm text-center">
                              {link.subLinks.map((subLink, subIndex) => (
                                <li key={subIndex} className="w-full">
                                  <Link
                                    to={subLink.path} // Correct path to section ID
                                    smooth={true}
                                    offset={-90} // Adjust offset value
                                    duration={500}
                                    className="block w-full cursor-pointer"
                                    onClick={() => {
                                      closeNav(); // Close menu when sublink clicked
                                      setDropdownOpen(false); // Close dropdown
                                    }}
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
            <div className="flex flex-row items-center justify-between gap-6 mt-[240px]">
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
              <Image src={Logo} alt="Saas Logo" height={60} width={100} className="relative" />
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
