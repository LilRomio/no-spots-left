import React from 'react';
import Image from 'next/image';
import Logo from '../assets/NoSpotsLeft-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container flex items-center justify-between p-12">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="Saas Logo" height={60} width={150} className="relative" />
        </div>

        <nav className="flex flex-col gap-6">
          <a href="/">Home</a>
          <a href="whatWeDo">What We Do</a>
        </nav>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
