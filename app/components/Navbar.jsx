'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import Logo from '../assets/NoSpotsLeft-logo.png';
import Button from './menu/button';
import Nav from './menu/nav';
const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'What We Do',
    path: '#whatWeDo',
  },
  {
    title: 'Testimonials',
    path: '#testimonials',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const menu = {
  open: {
    width: '480px',
    height: '650px',
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: '100px',
    height: '40px',
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 mx-auto bg-transparent bg-opacity-100">
      <div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:py-4">
        <Link href={'/'}>
          <Image src={Logo} alt="Saas Logo" height={40} width={60} />
        </Link>
        <div className="block mobile-menu md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 text-slate-600 hover:text-black hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 text-slate-600 hover:text-black hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
