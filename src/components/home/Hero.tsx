// --------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css'; 
// Removed unused events import

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="hero-background absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/assets/images/HeroImage4.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-900/60" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Empowering Technology,
            <br />
            <span className="highlighted-text text-[#99d7fb]">Enabling Futures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subheading text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >Join the IEEE JCER Student Branch and be part of a community that drives innovation
            and technological advancement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-buttons flex flex-wrap justify-center gap-4"
          >
            {/* Example of a "Join Us" button (currently commented out)
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="join-button bg-[#00629B] hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center text-lg font-semibold transition-colors duration-300"
            >
              Join Us <ArrowRight className="ml-2" />
            </motion.button>
            */}
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="explore-button bg-white hover:bg-gray-100 text-[#00629B] px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 border border-white-500 border-2"
              >
                Explore Events
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------










