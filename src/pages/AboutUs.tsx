import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css'; // Importing the CSS file

const AboutUs = () => {
  return (


    
    <div className="about pt-16">
          {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="About_Us-header"
                  >
                    <h2>About Us</h2>
                    <p>
                      A timeline of significant milestones in our branch's history
                    </p>
          </motion.div> */}

          {/* Mission & Vision Section */}
          <section className="mission-vision py-20 bg-gradient-to-b from-white 50 to-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="About_Us-header"
                  >
                    <h2>About Us</h2>
                    <p>
                      What we do & Why we do it?
                    </p>
          </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* <h1 className="text-4xl font-bold text-gray-900 mb-6">
                   About US
                  </h1> */}
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg ">
                      <h2 className="text-xl font-semibold text-[#00629B] mb-3">IEEE</h2>
                      <p className="text-gray-600">
                      The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. <br></br><br></br>Think of IEEE as the backbone of the technological revolution. From setting industry standards that ensure your devices work seamlessly together to publishing cutting-edge research in its vast array of journals and conferences, IEEE's influence permeates nearly every aspect of modern life.
                      </p>
                    </div>
                    {/* <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold text-[#00629B] mb-3">JCER Student Branch</h2>
                      <p className="text-gray-600">
                      Imagine a vibrant community of like-minded peers, all fueled by a shared passion for technology and its potential to solve global challenges. That's exactly what IEEE Student Branch is all about. At the core of our mission is the understanding that growth is not a linear path but a dynamic process. We recognize that each student is unique, possessing distinct talents, aspirations, and challenges.
                      </p>
                    </div> */}


                    
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    // src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                    src="public\assets\images\events\IEEE_logo_PNG_(2) (1).png"
                    alt="Students collaborating"
                    // className="rounded-lg shadow-xl"
                  />
                  {/* <div className="absolute inset-0 bg-[#00629B]/10 rounded-lg" /> */}
                </motion.div>
              </div>
            </div>
          </section>
    </div>




  );
};

export default AboutUs;
