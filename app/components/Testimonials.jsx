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
import { motion } from 'framer-motion';
import React from 'react';
import { AppWrap, MotionWrap } from '../wrapper';

const testimonials = [
  {
    text: 'No Spots Left transformed our home! They took care of every corner with such precision and care.',
    imageSrc: avatar1.src,
    name: 'Sophie',
    location: 'Guildford',
  },
  {
    text: 'I’ve never seen my office this clean before. They were quick, professional, and left no stone unturned!',
    imageSrc: avatar2.src,
    name: 'Oliver',
    location: 'Woking',
  },
  {
    text: 'Top-notch service! The attention to detail was impressive, and our house feels brand new.',
    imageSrc: avatar3.src,
    name: 'George',
    location: 'Godalming',
  },
  {
    text: 'I couldn’t believe the difference! No Spots Left exceeded all my expectations. Highly recommend!',
    imageSrc: avatar4.src,
    name: 'James',
    location: 'Farnham',
  },
  {
    text: 'Our carpets haven’t looked this good in years. Amazing work by the team at No Spots Left!',
    imageSrc: avatar5.src,
    name: 'Charlotte',
    location: 'Leatherhead',
  },
  {
    text: 'The cleaners were friendly, efficient, and thorough. A truly fantastic experience!',
    imageSrc: avatar6.src,
    name: 'Mia',
    location: 'Camberley',
  },
  {
    text: 'I was hesitant at first, but now I can’t imagine using any other cleaning service.',
    imageSrc: avatar7.src,
    name: 'Paulo',
    location: 'Epsom',
  },
  {
    text: 'Everything sparkled! They truly live up to their name. I’m definitely booking again.',
    imageSrc: avatar8.src,
    name: 'Emily',
    location: 'Dorking',
  },
  {
    text: 'Professional, reliable, and the cleanest my house has ever been!',
    imageSrc: avatar9.src,
    name: 'Liam',
    location: 'Reigate',
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
          {testimonials.map(({ text, imageSrc, name, location }) => (
            <div
              className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              key={name}
            >
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="w-10 h-10 rounded-full" />
                <div className="font-medium leading-5 tracking-tight">
                  {name} <span className="text-gray-500">({location})</span>
                </div>
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
      <div className="items-center gap-8 px-4 py-8 md:pt-0 md:mt-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            What Our Clients Say
          </h2>
          <p className="mt-5 text-xl section-description">
            Nothing speaks louder than the praise of our happy clients. From spotless homes to gleaming offices, our
            customers love the detail and dedication we bring to every clean. Hear why they trust us to keep their
            spaces shining!
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

export default AppWrap(MotionWrap(Testimonials, 'app__testimonials'), 'testimonials');
