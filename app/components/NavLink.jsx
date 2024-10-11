'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ href, title }) => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);

    // Scroll to the section after the nav closes
    router.push(href); // This will update the URL hash and scroll to the section
  };

  return (
    <a
      href={href} // Set this to the fragment URL like "#domestic"
      onClick={closeNav} // Ensure nav closes and scrolls to the section
      className="block py-2 pl-3 pr-4 rounded text-black/60 sm:text-xl md:p-0 hover:text-black"
    >
      {title}
    </a>
  );
};

export default NavLink;
