// import React from 'react';
import { motion } from 'framer-motion';
import WhyIEEE from '../components/about/WhyIEEE';
import './About.css'; // Importing the CSS file

const About = () => {
  return (
      <div className="pt-1 bg-gradient-to-b from-gray-900 to-[#00629B]">
        {/* Hero Section */}
        <section className="relative mt-16 py-20 bg-gradient-to-b from-gray100 to-[#00629B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Our Mission & Vision of fostering technological innovation and excellence for the benefit of humanity
            </motion.p>
          </div>
        </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} 
              >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h1>
              <div className="space-y-6">

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-[#00629B] mb-3">JCER Student Branch (STB60208149)</h2>
                  <p className="text-gray-600">
                  Imagine a vibrant community of like-minded peers, all fueled by a shared passion for technology and its potential to solve global challenges. That is exactly what IEEE Student Branch is all about. 
                  <br /><br />
                  At the core of our mission is the understanding that growth is not a linear path but a dynamic process. We recognize that each student is unique, possessing distinct talents, aspirations, and challenges.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} 
              >
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision & Mission
              </h1>
              <div className="space-y-6">            
                <div className="bg-white p-6 rounded-lg shadow-md">

                  {/* <h2 className="text-xl font-semibold text-[#00629B] mb-3">Mission</h2>
                  <p className="text-gray-600">
                    To foster technological innovation and excellence for the benefit of humanity, while providing a platform for students to develop their technical and professional skills.
                  </p> */}
                  <h2 className="text-xl font-semibold text-[#00629B] mb-3">Vision</h2>
                  <p className="text-gray-600">
                    To be the leading student organization in advancing technology and inspiring future leaders in the field of electrical and electronic engineering.
                  </p>

                  <br />

                  {/* <h2 className="text-xl font-semibold text-[#00629B] mb-3">Vision</h2>
                  <p className="text-gray-600">
                    To be the leading student organization in advancing technology and inspiring future leaders in the field of electrical and electronic engineering.
                  </p> */}
                  <h2 className="text-xl font-semibold text-[#00629B] mb-3">Mission</h2>
                  <p className="text-gray-600">
                    To foster technological innovation and excellence for the benefit of humanity, while providing a platform for students to develop their technical and professional skills.
                  </p>

                </div>
              </div>
            </motion.div>
          </div>

          <br />

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  // src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                  src="public\assets\images\events\group_photo.jpg"

                  alt="Students collaborating"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-[#00629B]/10 rounded-lg" /><div/>
            </motion.div>

        </div>
      </section>

      {/* Why IEEE Section */}
      <WhyIEEE />
    </div>
  );
};

export default About;







// -----------------------ALL DONE HERE!----------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------


