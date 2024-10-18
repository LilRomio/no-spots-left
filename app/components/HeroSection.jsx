'use client';
import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import Sponge from '../assets/sponge.png';
import { AppWrap, MotionWrap } from '../wrapper';
import { IoLocationSharp } from 'react-icons/io5';
const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  // Animation durations
  const animationDuration = 6;

  return (
    <section id="heroSection" ref={heroRef} className="pt-10 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
      <div className="relative items-center gap-10 px-4 py-8 md:flex xl:gap-16 sm:py-16 xl:px-16">
        {/* Sponge Image and Text Reveal */}
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="relative z-10 col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          {/* Typing Animation for Text (only visible on md and above) */}
          <h1 className="hidden text-3xl font-extrabold text-black mb-14 lg:block md:text-5xl lg:text-7xl">
            <br />
            <TypeAnimation
              sequence={[
                'Domestic Cleaning',
                1500,
                'Commercial and Retail Cleaning',
                1500,
                'End of Tenancy Cleaning',
                1500,
                'Deep Cleaning Services',
                1500,
                'Carpet and Upholstery Cleaning',
                1500,
                'Pressure Washing Services',
                1500,
                'Airbnb Rental Cleaning',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Masked Text Animation (only visible on md and above) */}
          <div className="relative mt-6 md:block">
            <motion.div
              initial={{ x: 260 }}
              animate={{ x: -840 }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              className="absolute right-0 z-20 hidden md:flex md:-top-200 lg:-top-20"
            >
              <motion.img src={Sponge.src} alt="Sponge image" className="w-[150px] md:w-45 lg:w-48" />
            </motion.div>

            {/* Text that is revealed by the sponge */}
            <div className="flex flex-col items-center gap-2 xl:flex-row">
              <div className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                We Clean <span className="md:hidden"> Like Your Mum&apos;s Coming Over!</span>
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
                className="hidden md:flex text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
              >
                Like Your Mum&apos;s Coming Over!
              </motion.div>
            </div>
          </div>

          {/* Hero description text */}
          <p className="bg-gradient-to-b font-bold from-black to-[#001E80] text-transparent bg-clip-text md:text-3xl   mb-6 text-xl lg:text-3xl  mt-6">
            At No Spots Left, we take cleaning as seriously as a cuppa tea. From stubborn stains to hidden dust bunnies,
            we handle the mess so you can put your feet up. Our expert team ensures every nook and cranny is spotless,
            leaving your space looking as fresh as a daisy. Whether it’s your home, office, or somewhere in between,
            we’ve got you covered – no fuss, no spots, just pristine results.
          </p>
          <div className="flex flex-col items-center justify-center mt-4 md:flex-row md:justify-between">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#FF6F61' }} // Scaling effect and color change on hover
                whileTap={{ scale: 0.95 }} // Slight scaling down on click
                className="bg-[#FF6F61] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: 'auto', padding: '10px 20px' }} // Smaller button size
              >
                Get a Quote
              </motion.button>
            </Link>
            <div className="flex items-center justify-center gap-4 py-3 font-bold text-md md:text-3xl">
              <IoLocationSharp className="text-[#FF6F61] w-17 h-17 " /> <span>Godalming</span> <span>Guildford</span>
              <span>Farnham</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(HeroSection, 'app__hero'), 'heroSection', 'app__radialbg');
