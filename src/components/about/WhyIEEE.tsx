// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Network,
//   GraduationCap,
//   Globe2,
//   Briefcase,
//   BookOpen,
//   Users,
//   Trophy,
//   Lightbulb
// } from 'lucide-react';

// const WhyIEEE = () => {
//   const benefits = [
//     {
//       icon: <Network className="w-8 h-8" />,
//       title: 'Networking',
//       description: 'Connect with industry professionals and fellow students'
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8" />,
//       title: 'Skill Development',
//       description: 'Access to workshops, training, and technical resources'
//     },
//     {
//       icon: <Globe2 className="w-8 h-8" />,
//       title: 'Global Recognition',
//       description: 'Be part of a worldwide community of engineers'
//     },
//     {
//       icon: <Briefcase className="w-8 h-8" />,
//       title: 'Career Growth',
//       description: 'Job opportunities and career development resources'
//     },
//     {
//       icon: <BookOpen className="w-8 h-8" />,
//       title: 'Digital Library',
//       description: 'Access to IEEE\'s vast technical literature'
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Leadership',
//       description: 'Opportunities to develop leadership skills'
//     },
//     {
//       icon: <Trophy className="w-8 h-8" />,
//       title: 'Awards',
//       description: 'Recognition for technical achievements'
//     },
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: 'Innovation',
//       description: 'Platform to showcase innovative ideas'
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join IEEE?</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Discover the benefits of being part of the world's largest technical professional organization
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <div className="text-[#00629B] mb-4">{benefit.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
//               <p className="text-gray-600">{benefit.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyIEEE;


import React from 'react';
import { motion } from 'framer-motion';
import {
  Network,
  GraduationCap,
  Globe2,
  Briefcase,
  BookOpen,
  Users,
  Trophy,
  Lightbulb
} from 'lucide-react';
import './WhyIEEE.css'; // Import the CSS file

const WhyIEEE: React.FC = () => {
  const benefits = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Networking',
      description: 'Connect with industry professionals and fellow students'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Skill Development',
      description: 'Access to workshops, training, and technical resources'
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: 'Global Recognition',
      description: 'Be part of a worldwide community of engineers'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Job opportunities and career development resources'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Digital Library',
      description: 'Access to IEEE\'s vast technical literature'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership',
      description: 'Opportunities to develop leadership skills'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Awards',
      description: 'Recognition for technical achievements'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Platform to showcase innovative ideas'
    }
  ];

  return (
    <section className="why-ieee-section py-20 bg-white">
      <div className="why-ieee-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="why-ieee-heading text-3xl font-bold mb-4">Why Join IEEE?</h2>
          <p className="why-ieee-description text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of being part of the world's largest technical professional organization
          </p>
        </motion.div>

        <div className="why-ieee-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="why-ieee-item bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="why-ieee-icon text-[#00629B] mb-4">{benefit.icon}</div>
              <h3 className="why-ieee-title text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="why-ieee-description-text text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIEEE;
