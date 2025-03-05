import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../types/eventsData'; // Adjust the path as necessary

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredEvents = events.filter(event => event.category === activeTab);

  // return (
  //   <div className="pt-16">
  //     {/* Hero Section */}
  //     <section className="relative py-20 bg-gradient-to-b from-gray-900 to-[#00629B]">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
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
            Events & Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Stay updated with our latest events and join us in our journey of innovation
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-200 p-1">
              {(['upcoming', 'ongoing', 'past'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? 'bg-white text-[#00629B] shadow-sm'
                      : 'text-gray-600 hover:text-[#00629B]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 cursor-pointer" onClick={() => setSelectedImage(event.image)}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      className="mt-6 inline-flex items-center text-[#00629B] hover:text-blue-700 font-medium"
                    >
                      Register Now <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Event"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              {/* Replace with your preferred close icon */}
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
