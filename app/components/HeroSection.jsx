'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

import Link from 'next/link';
import Sponge from '../assets/sponge.png';
const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="items-center gap-8 px-4 py-8 md:flex md:flex-row xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="hidden mb-4 text-4xl font-extrabold text-black md:block sm:text-s lg:text-5xl lg:leading-normal">
            <br></br>
            <TypeAnimation
              sequence={[
                'Got dirt? Not for long...',
                1000,

                'Turning mess into magic!',
                1000,
                'Spotless results, every time!',
                1000,
                'Your mess... poof! Gone!',
                1000,
                'We scrub, you relax.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            We Clean Like Your Mum&apos;s Coming Over!
          </h2>
          <p className="bg-gradient-to-b font-bold from-black to-[#001E80] text-transparent bg-clip-text sm:text-2xl mb-6 lg:text-2xl mt-6">
            At No Spots Left, we take cleaning as seriously as a cuppa tea. From stubborn stains to hidden dust bunnies, we handle the mess so you can
            put your feet up. Our expert team ensures every nook and cranny is spotless, leaving your space looking as fresh as a daisy. Whether it’s
            your home, office, or somewhere in between, we’ve got you covered – no fuss, no spots, just pristine results.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block w-full px-1 py-1 mt-3 text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Get a quote</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative hidden col-span-4 mt-4 md:block place-self-center lg:mt-0"
        >
          <motion.img
            src={Sponge.src}
            alt="Sponge image"
            width={600}
            height={600}
            animate={{
              translateX: [-10, -450],
              translateY: [30, -100],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 4,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
