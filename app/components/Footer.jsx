import React from 'react';
import Image from 'next/image';
import Logo from '../assets/NoSpotsLeft-logo.png';
import { IoLocationSharp } from 'react-icons/io5';
const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container flex items-center justify-between p-12">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] before:absolute">
          <Image src={Logo} alt="Saas Logo" height={60} width={150} className="relative" />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
        <div className="items-center justify-center hidden gap-3 py-3 text-sm font-bold md:flex">
          <IoLocationSharp className="text-[#FF6F61] w-5 h-5 " /> <span>Godalming</span> <span>Guildford</span>
          <span>Farnham</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
