// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Award, Users, Rocket, BookOpen, Star } from 'lucide-react';

// const Timeline = () => {
//   const milestones = [
//     {
//       year: '2018',
//       title: 'IEEE JCER Branch Founded',
//       description: 'Establishment of the IEEE Student Branch at JCER',
//       icon: <Calendar className="w-6 h-6" />
//     },
//     {
//       year: '2019',
//       title: 'First Technical Symposium',
//       description: 'Successfully organized our first major technical event',
//       icon: <Award className="w-6 h-6" />
//     },
//     {
//       year: '2020',
//       title: '100+ Active Members',
//       description: 'Reached milestone of 100 active student members',
//       icon: <Users className="w-6 h-6" />
//     },
//     {
//       year: '2021',
//       title: 'Innovation Hub Launch',
//       description: 'Launched dedicated innovation and project space',
//       icon: <Rocket className="w-6 h-6" />
//     },
//     {
//       year: '2022',
//       title: 'Educational Outreach',
//       description: 'Started community education programs',
//       icon: <BookOpen className="w-6 h-6" />
//     },
//     {
//       year: '2023',
//       title: 'Excellence Award',
//       description: 'Received IEEE Regional Excellence Award',
//       icon: <Star className="w-6 h-6" />
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A timeline of significant milestones in our branch's history
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00629B]" />

//           {/* Timeline Items */}
//           <div className="space-y-12">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`relative flex items-center ${
//                   index % 2 === 0 ? 'justify-end' : 'flex-row-reverse'
//                 }`}
//               >
//                 {/* Content */}
//                 <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
//                   <div className="bg-white p-6 rounded-lg shadow-lg">
//                     <span className="text-[#00629B] font-bold text-lg">{milestone.year}</span>
//                     <h3 className="text-xl font-semibold text-gray-900 mt-2">
//                       {milestone.title}
//                     </h3>
//                     <p className="text-gray-600 mt-2">{milestone.description}</p>
//                   </div>
//                 </div>

//                 {/* Icon */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#00629B] rounded-full text-white">
//                   {milestone.icon}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Rocket, BookOpen, Star } from 'lucide-react';
import './Timeline.css'; // Import the CSS file

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: '2023',
      title: 'IEEE JCER Branch Founded',
      description: 'Establishment of the IEEE Student Branch at JCER',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      year: 'Jan 2024',
      title: 'First Event',
      description: 'Successfully organized our first major event-IEEE NKSS AGM 2024',
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2024',
      title: '100+ Active Members',
      description: 'Reached milestone of 100 active student members',
      icon: <Users className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Premier Magazine',
      description: 'Launched our first premier magazine of JCER IEEE SB',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Best Voluteer Award',
      description: 'Our Chair Mr Yash Mane recieved the best voluteer award',
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="timeline-header"
        >
          <h2>Our Journey</h2>
          <p>
            A timeline of significant milestones in our branch's history
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="timeline-items">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`timeline-item`}
              >
                {/* Content */}
                <div
                  className={`timeline-content ${
                    index % 2 === 0 ? 'timeline-right' : 'timeline-left'
                  }`}
                >
                  <span>{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>

                {/* Icon */}
                <div className="timeline-icon">
                  {milestone.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
