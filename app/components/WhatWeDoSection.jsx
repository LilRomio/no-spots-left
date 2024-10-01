'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Domestic Cleaning',
    id: 'domestic',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">
          Your home is your sanctuary, and we treat it that way. Our domestic cleaning service offers everything from routine cleaning to deep cleans,
          ensuring your living space remains fresh, comfortable, and pristine. Whether it&apos;s regular weekly cleaning or a one-off deep clean, our
          team will handle everything:
        </h1>
        <li>Thorough Cleaning: Every room will be dusted, vacuumed, and scrubbed to perfection.</li>

        <li>Kitchen and Bathroom Detailing: We pay special attention to these high-use areas, leaving them sanitized and sparkling.</li>
        <li>Bedroom Cleaning: Tidying up, changing bed linens, and dusting furniture.</li>
        <li>Window Cleaning (Interior): Wiping windows and frames to ensure streak-free glass.</li>
        <li>Laundry & Ironing Services: Washing, drying, and ironing clothes (optional add-on).</li>
        <li>Flexible Scheduling: We work around your timetable to ensure minimal disruption.</li>
      </ul>
    ),
  },
  {
    title: 'Office Cleaning',
    id: 'office',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">
          A clean office promotes productivity and leaves a lasting impression on clients and employees. No Spots Left offers customizable office
          cleaning services designed to maintain a pristine and healthy work environment:
        </h1>
        <li>Daily, Weekly, or Monthly Services: Choose a cleaning frequency that suits your office needs.</li>

        <li>Disinfection and Sanitization: We focus on high-traffic areas like desks, breakrooms, and restrooms to keep your workplace germ-free.</li>
        <li>Floor and Window Cleaning: Vacuuming, mopping, and window cleaning to keep the office looking professional and welcoming.</li>
        <li>Restroom Cleaning: Thorough cleaning of office restrooms, replenishing supplies, and disinfecting surfaces.</li>
        <li>Waste Management: Emptying bins and recycling stations, with proper waste segregation.</li>
        <li>Window and Glass Cleaning: Interior window cleaning and wiping down glass partitions.</li>
      </ul>
    ),
  },
  {
    title: 'End of Tenancy Cleaning',
    id: 'endTenancy',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">
          Moving out? Leave the cleaning to us. We provide comprehensive end-of-tenancy cleaning services that ensure the property is spotless for the
          next tenants or to meet the landlord&apos;s expectations. Our service covers:
        </h1>
        <li>Complete Property Cleaning: Every nook and cranny, including carpets, floors, walls, and windows, will be professionally cleaned.</li>

        <li>Appliance Cleaning: Deep cleaning of ovens, fridges, and other appliances to leave them looking like new.</li>
        <li>Deposit Back Guarantee: We provide the thorough clean required to help you reclaim your deposit.</li>
      </ul>
    ),
  },
  {
    title: 'Deep Cleaning Services',
    id: 'deepCleaning',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">
          Ideal for spring cleaning or special occasions, this service goes beyond standard cleaning to tackle areas often overlooked during routine
          cleans:
        </h1>
        <li>Behind Furniture and Appliances: Cleaning under and behind heavy furniture or kitchen appliances.</li>

        <li>Grout and Tile Scrubbing: Intensive cleaning to remove grime from tile grout in bathrooms and kitchens.</li>
        <li>Detailing of Light Fixtures and Ceiling Fans: Dusting and cleaning hard-to-reach areas.</li>
      </ul>
    ),
  },
  {
    title: 'Carpet and Upholstery Cleaning',
    id: 'carpet',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">
          Over time, carpets and upholstery can trap dirt, allergens, and odors. This specialized service ensures a deep clean for soft furnishings:
        </h1>
        <li>Carpet Steam Cleaning: Deep cleaning to remove stains, dirt, and allergens from carpets.</li>

        <li>Upholstery Cleaning: Cleaning sofas, chairs, and curtains to refresh fabrics and remove stains.</li>
        <li>Stain and Odor Removal: Using eco-friendly solutions to remove tough stains and lingering smells.</li>
      </ul>
    ),
  },
  {
    title: 'Post-Construction Cleaning',
    id: 'construction',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">After renovation or construction, a property often needs thorough cleaning to remove debris and dust:</h1>
        <li>Debris Removal: Cleaning and removing dust, drywall particles, and leftover materials.</li>

        <li>Window and Surface Cleaning: Making sure windows, countertops, and floors are spotless after the mess.</li>
        <li>Detail-Oriented Finish: Ensuring newly installed fixtures are clean and presentable.</li>
      </ul>
    ),
  },
  {
    title: 'Pressure Washing Services',
    id: 'pressure',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">Ideal for outdoor cleaning, pressure washing removes dirt, mold, and grime from exterior surfaces:</h1>
        <li>Driveways and Patios: Pressure washing stone, concrete, and tiled surfaces to remove buildup.</li>

        <li>House Exterior and Fences: Cleaning siding, fences, and other exterior areas that require high-powered cleaning.</li>
      </ul>
    ),
  },
  {
    title: 'Airbnb Rental Cleaning',
    id: 'airBnb',
    content: (
      <ul className="pl-2 list-disc">
        <h1 className="section-description">Offer a specialized cleaning service tailored to short-term rental properties like Airbnb listings:</h1>
        <li>
          Turnover Service: Preparing the property between guests, including laundry, replenishing supplies, and ensuring the space is guest-ready.
        </li>

        <li>Check-In/Out Inspections: Conducting a thorough inspection to ensure no damage and that everything is in order.</li>
      </ul>
    ),
  },
  {
    title: 'Commercial and Retail Cleaning',
    id: 'commercial',
    content: (
      <ul className="pl-2 list-disc ">
        <h1 className="section-description ">Expand your commercial services to include retail shops, restaurants, and other business premises:</h1>
        <li>Storefront and Display Cleaning: Ensuring that windows and displays are spotless to attract customers.</li>

        <li>Restroom and Kitchen Cleaning: Providing a regular cleaning service for high-traffic restrooms and kitchen areas.</li>
        <li>Floor Care and Polishing: Keeping floors in retail spaces looking clean and polished.</li>
      </ul>
    ),
  },
];

const WhatWeDoSection = () => {
  const [tab, setTab] = useState('domestic');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="whatWeDo" className="text-black">
      <div className="items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            What We Do
          </h2>
          <p className="text-lg md:text-xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            At No Spots Left, we provide a spotless, professional, and reliable cleaning service tailored to meet your every need. Whether it&apos;s
            your home, office, or preparing a rental property for its next tenant, our expert cleaning team ensures every corner is left sparkling.
            Our commitment to using eco-friendly cleaning products and top-tier equipment guarantees that your space is not only clean but safe for
            your family, employees, and guests. Here&apos;s a glimpse of the services we offer:
          </p>
          <div className="flex flex-col justify-start mt-8 md:flex-row">
            <TabButton selectTab={() => handleTabChange('domestic')} active={tab === 'domestic'}>
              {' '}
              Domestic Cleaning{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('office')} active={tab === 'office'}>
              {' '}
              Office Cleaning{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('endTenancy')} active={tab === 'endTenancy'}>
              {' '}
              End of Tenancy Cleaning{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('deepCleaning')} active={tab === 'deepCleaning'}>
              {' '}
              Deep Cleaning Services{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('carpet')} active={tab === 'carpet'}>
              {' '}
              Carpet and Upholstery Cleaning{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('construction')} active={tab === 'construction'}>
              {' '}
              Post-Construction Cleaning{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('pressure')} active={tab === 'pressure'}>
              {' '}
              Pressure Washing Services{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('airBnb')} active={tab === 'airBnb'}>
              {' '}
              Airbnb Rental Cleaning{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('commercial')} active={tab === 'commercial'}>
              {' '}
              Commercial and Retail Cleaning{' '}
            </TabButton>
          </div>
          <div className="mt-8 ">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
