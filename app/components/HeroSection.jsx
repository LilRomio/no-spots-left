'use client';
import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Sponge from '../assets/sponge.png';
import { AppWrap, MotionWrap } from '../wrapper';

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  // Animation durations
  const animationDuration = 6;

  return (
    <section id="heroSection" ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
      <div className="relative items-center gap-8 px-4 py-8 md:flex xl:gap-16 sm:py-16 xl:px-16">
        {/* Sponge Image and Text Reveal */}
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="relative z-10 col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          {/* Typing Animation for Text */}
          <h1 className="hidden mb-2 text-3xl font-extrabold text-black lg:block md:text-5xl lg:text-7xl lg:leading-normal">
            <br />
            <TypeAnimation
              sequence={[
                'Cleaning Services',
                1500,
                'Guildford',
                1500,
                'Godalming',
                1500,
                'Farnham',
                1500,
                'Cleaning Services around Guildford',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Masked Text Animation */}
          <div className="relative mt-6">
            <motion.div
              initial={{ x: 240 }}
              animate={{ x: -840 }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              className="absolute right-0 z-20 lg:-top-20"
            >
              <motion.img src={Sponge.src} alt="Sponge image" className="w-[150px] md:w-45 lg:w-48" />
            </motion.div>

            {/* Text that is revealed by the sponge */}

            <div className="flex flex-col items-center gap-2 xl:flex-row">
              <div className="text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                We Clean
              </div>

              <motion.div
                style={{
                  clipPath: 'inset(0% 100% 0% 0%)',
                }}
                animate={{
                  clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 100% 0% 0%)'],
                }}
                transition={{
                  duration: animationDuration,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
                className="text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
              >
                Like Your Mum&apos;s Coming Over!
              </motion.div>
            </div>
          </div>

          <p className="bg-gradient-to-b font-bold from-black to-[#001E80] text-transparent bg-clip-text sm:text-2xl mb-6 text-2xl lg:text-2xl mt-6">
            At No Spots Left, we take cleaning as seriously as a cuppa tea. From stubborn stains to hidden dust bunnies,
            we handle the mess so you can put your feet up. Our expert team ensures every nook and cranny is spotless,
            leaving your space looking as fresh as a daisy. Whether it’s your home, office, or somewhere in between,
            we’ve got you covered – no fuss, no spots, just pristine results.
          </p>
          <div>
            <Link href="/#contact" className="btn btn-primary">
              Get a quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(HeroSection, 'app__hero'), 'heroSection', 'app__radialbg');
