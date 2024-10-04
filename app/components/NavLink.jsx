'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <Link
      href={href}
      onClick={closeNav}
      className="block py-2 pl-3 pr-4 rounded text-black/60 sm:text-xl md:p-0 hover:text-black"
    >
      {title}
    </Link>
  );
};

export default NavLink;
