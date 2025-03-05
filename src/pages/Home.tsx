import React from 'react';
import Hero from '../components/home/Hero';
import EventsCarousel from '../components/home/EventsCarousel';
import Timeline from '../components/about/Timeline';
import WhyIEEE from '../components/about/WhyIEEE';
import AboutUs from './AboutUs';

import Events from '../pages/Events';
// import Achievements from './Achievements';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Timeline />
      <EventsCarousel />
      <WhyIEEE />
      
      
      {/* Additional sections will be added here */}
    </div>
  );
};

export default Home;