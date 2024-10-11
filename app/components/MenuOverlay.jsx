import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = () => {
  const links = [
    { path: '#domestic', title: 'Domestic Cleaning' },
    { path: '#office', title: 'Commercial and Retail Cleaning' },
    { path: '#endTenancy', title: 'End of Tenancy Cleaning' },
    { path: '#deepCleaning', title: 'Deep Cleaning Services' },
    { path: '#carpet', title: 'Carpet and Upholstery Cleaning' },
    { path: '#pressure', title: 'Pressure Washing Services' },
    { path: '#airBnb', title: 'Airbnb Rental Cleaning' },
  ];

  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
