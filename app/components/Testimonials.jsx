'use client';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import avatar5 from '../assets/avatar-5.png';
import avatar6 from '../assets/avatar-6.png';
import avatar7 from '../assets/avatar-7.png';
import avatar8 from '../assets/avatar-8.png';
import avatar9 from '../assets/avatar-9.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    text: 'As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.',
    imageSrc: avatar1.src,
    name: 'Jamie Rivera',
    username: '@jamietechguru00',
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: 'Josh Smith',
    username: '@jjsmith',
  },
  {
    text: 'This app has completely transformed how I manage my projects and deadlines.',
    imageSrc: avatar3.src,
    name: 'Morgan Lee',
    username: '@morganleewhiz',
  },
  {
    text: 'I was amazed at how quickly we were able to integrate this app into our workflow.',
    imageSrc: avatar4.src,
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    text: 'Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.',
    imageSrc: avatar5.src,
    name: 'Taylor Kim',
    username: '@taylorkimm',
  },
  {
    text: 'The customizability and integration capabilities of this app are top-notch.',
    imageSrc: avatar6.src,
    name: 'Riley Smith',
    username: '@rileysmith1',
  },
  {
    text: 'Adopting this app for our team has streamlined our project management and improved communication across the board.',
    imageSrc: avatar7.src,
    name: 'Jordan Patels',
    username: '@jpatelsdesign',
  },
  {
    text: 'With this app, we can easily assign tasks, track progress, and manage documents all in one place.',
    imageSrc: avatar8.src,
    name: 'Sam Dawson',
    username: '@dawsontechtips',
  },
  {
    text: 'Its user-friendly interface and robust features support our diverse needs.',
    imageSrc: avatar9.src,
    name: 'Casey Harper',
    username: '@casey09',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ className, testimonials, duration }) => (
  <div className={className}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-6 pb-6 "
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name }) => (
            <div className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full" key={name}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="w-10 h-10 rounded-full" />
                <div className="font-medium leading-5 tracking-tight">{name}</div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="items-center gap-8 px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="mt-5 section-description">
            At No Spots Left, nothing speaks louder than the praise of our happy clients. From spotless homes to gleaming offices, our customers love
            the detail and dedication we bring to every clean. Hear why they trust us to keep their spaces shining!
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden mt-10">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={23} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
