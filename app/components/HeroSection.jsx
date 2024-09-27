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
    <section ref={heroRef}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-black sm:text-3xl lg:text-6xl lg:leading-normal">
            <br></br>
            <TypeAnimation
              sequence={[
                'Got dirt? Not for long...',
                1000,
                'Cleaning so good, you’ll think we hired Mary Poppins.',
                1000,
                'Turning mess into magic!',
                1000,
                'Spotless results, every time!',
                1000,
                'Your mess... poof! Gone!',
                1000,
                'We scrub, you relax.',
                1000,
                'Clean enough to impress your nan!',
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
          <p className="bg-gradient-to-b font-bold from-black to-[#001E80] text-transparent bg-clip-text sm:text-lg mb-6 lg:text-xl mt-6">
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
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <motion.img
            src={Sponge.src}
            alt="Sponge image"
            width={250}
            height={250}
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
