import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { events } from '../types/eventsData'; // Adjust the path as needed

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = events.find(ev => ev.id === id);

  if (!event) {
    return <div className="pt-16 text-center">Event not found.</div>;
  }

  return (
    <div className="pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <div className="flex items-center text-gray-500 mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              className="inline-flex items-center text-[#00629B] hover:text-blue-700 font-medium"
            >
              Register Now <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetails;
