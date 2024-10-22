import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/NoSpotsLeft-logo.png';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm flex items-center text-center">
      <div className="container flex flex-col items-center justify-between gap-6 p-6 md:gap-0 md:flex-row">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] before:absolute">
          <Image src={Logo} alt="Saas Logo" height={60} width={100} className="relative" />
        </div>

        <Link href="/privacy-policy" target="_blank" className="hover:text-[#FF6F61]">
          Privacy Notice
        </Link>
        <Link href="/terms" target="_blank" className="hover:text-[#FF6F61]">
          Terms and Conditions
        </Link>

        <p className="text-[#FF6F61]">All rights reserved.</p>

        <div className="flex items-center justify-center gap-3 py-3 text-sm font-bold ">
          <IoLocationSharp className="text-[#FF6F61] w-5 h-5 " /> <span>Godalming</span> <span>Guildford</span>
          <span>Farnham</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
