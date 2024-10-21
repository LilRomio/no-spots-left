'use client';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WhatWeDoSection from '././components/WhatWeDoSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';
import Testimonials from './components/Testimonials';
const App = () => {
  return (
    <>
      <Navbar />

      <HeroSection />

      <WhatWeDoSection />

      <Testimonials />
      <EmailSection />

      <Footer />
    </>
  );
};

export default App;
