import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Trophy, Target, Rocket } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Student Branch Award',
    description: 'Recognized as the best IEEE student branch in the region for outstanding activities and member engagement.',
    date: 'December 2023',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80',
    category: 'Award'
  },
  {
    id: '2',
    title: 'Technical Excellence',
    description: 'Successfully organized 50+ technical workshops and seminars reaching over 1000 students.',
    date: 'November 2023',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    category: 'Milestone'
  },
  {
    id: '3',
    title: 'Community Impact',
    description: 'Led multiple social initiatives benefiting local communities through technology education.',
    date: 'October 2023',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
    category: 'Impact'
  }
];

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '100+',
    label: 'Active Members'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    value: '20+',
    label: 'Events Organized'
  },
];

const Achievements = () => {
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
            Our Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Celebrating our milestones and recognitions in technical excellence
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-[#00629B] rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#00629B] text-white px-3 py-1 rounded-full text-sm">
                    {achievement.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {achievement.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence continues as we set new goals and aspirations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: 'Innovation Hub',
                description: 'Establishing a dedicated space for student innovations and research projects'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Global Collaboration',
                description: 'Expanding our network through international partnerships and exchange programs'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Skill Development',
                description: 'Launching comprehensive training programs in emerging technologies'
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00629B] text-white rounded-full mb-4">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;