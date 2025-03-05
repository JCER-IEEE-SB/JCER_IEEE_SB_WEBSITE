// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Linkedin, Github, Mail } from 'lucide-react';

// // interface ExecomMember {
// //   id: string;
// //   name: string;
// //   role: string;
// //   image: string;
// //   bio: string;
// //   linkedin?: string;
// //   github?: string;
// //   email?: string;
// // }

// // const execomMembers: ExecomMember[] = [
// //   {
// //     id: '1',
// //     name: 'Kumuda R',
// //     role: 'Chair',
// //     image: 'assets/images/Members/kumda.jpg',
// //     bio: 'Final year Computer Science student passionate about technology and leadership.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'john@ieee.org'
// //   },
// //   {
// //     id: '2',
// //     name: 'Sakshi Hatti',
// //     role: 'Vice Chair',
// //     image: "/assets/images/Members/sakshi.jpg",
// //     bio: 'Dedicated to fostering innovation and technical excellence in our community.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'jane@ieee.org'
// //   },
// //   {
// //     id: '3',
// //     name: 'Siddita Varma',
// //     role: 'Secretary',
// //     image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
// //     bio: 'Organizing events and maintaining records with precision and dedication.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'mike@ieee.org'
// //   },
// //   {
// //     id: '4',
// //     name: 'Driti Birje',
// //     role: 'Joint Secretary',
// //     image: '/assets/images/Members/driti.jpg',
// //     bio: 'Organizing events and maintaining records with precision and dedication.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'mike@ieee.org'
// //   },
// //   {
// //     id: '5',
// //     name: 'Arihant Angolkar',
// //     role: 'Treasurer',
// //     image: '/assets/images/Members/arihant.jpg',
// //     bio: 'Managing finances and ensuring efficient resource utilization.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'sarah@ieee.org'
// //   },
// //   {
// //     id: '6',
// //     name: 'Ankit Nandgad',
// //     role: 'Joint Treasurer',
// //     image: '/assets/images/Members/ankit.jpg',
// //     bio: 'Managing finances and ensuring efficient resource utilization.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'sarah@ieee.org'
// //   },
// //   {
// //     id: '7',
// //     name: 'Anna Souz',
// //     role: 'Web Master',
// //     image: '/assets/images/Members/Anna.jpg',
// //     bio: 'Leading technical workshops and mentoring fellow students.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'david@ieee.org'
// //   },
// //   {
// //     id: '8',
// //     name: 'Shreeya Jegarkal',
// //     role: 'Content Head',
// //     image: '/assets/images/Members/shreeya.jpg',
// //     bio: 'Planning and executing engaging events for our community.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'emily@ieee.org'
// //   },
// //   {
// //     id: '8',
// //     name: 'Sambhav Kocheri',
// //     role: 'Membership Drive Chair',
// //     image: '/assets/images/Members/sambhav.jpg',
// //     bio: 'Planning and executing engaging events for our community.',
// //     linkedin: '#',
// //     github: '#',
// //     email: 'emily@ieee.org'
// //   }
// // ];

// // const Execom = () => {
// //   return (
// //     <div className="pt-16">
// //       {/* Hero Section */}
// //       <section className="relative py-20 bg-gradient-to-b from-gray-900 to-[#00629B]">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-4xl md:text-5xl font-bold mb-4"
// //           >
// //             Executive Committee
// //           </motion.h1>
// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="text-xl text-gray-200 max-w-2xl mx-auto"
// //           >
// //             Meet the dedicated team leading IEEE JCER Student Branch
// //           </motion.p>
// //         </div>
// //       </section>

// //       {/* Team Grid */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {execomMembers.map((member, index) => (
// //               <motion.div
// //                 key={member.id}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 viewport={{ once: true }}
// //                 className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
// //               >
// //                 {/* Front of Card */}
// //                 <div className="relative h-full transform transition-transform duration-500 group-hover:scale-0">
// //                   <div className="relative h-64">
// //                     <img
// //                       src={member.image}
// //                       alt={member.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
// //                     <div className="absolute bottom-4 left-4 right-4 text-white">
// //                       <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
// //                       <p className="text-gray-200">{member.role}</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Back of Card */}
// //                 <div className="absolute inset-0 bg-white p-6 transform transition-transform duration-500 scale-0 group-hover:scale-100">
// //                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
// //                   <p className="text-[#00629B] font-medium mb-4">{member.role}</p>
// //                   <p className="text-gray-600 mb-6">{member.bio}</p>
// //                   <div className="flex space-x-4">
// //                     {member.linkedin && (
// //                       <a
// //                         href={member.linkedin}
// //                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
// //                       >
// //                         <Linkedin className="w-5 h-5" />
// //                       </a>
// //                     )}
// //                     {member.github && (
// //                       <a
// //                         href={member.github}
// //                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
// //                       >
// //                         <Github className="w-5 h-5" />
// //                       </a>
// //                     )}
// //                     {member.email && (
// //                       <a
// //                         href={`mailto:${member.email}`}
// //                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
// //                       >
// //                         <Mail className="w-5 h-5" />
// //                       </a>
// //                     )}
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Photo */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="relative rounded-xl overflow-hidden"
// //           >
// //             <img
// //               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
// //               alt="IEEE JCER Executive Committee"
// //               className="w-full h-[400px] object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
// //             <div className="absolute bottom-8 left-8 right-8 text-white text-center">
// //               <h2 className="text-2xl font-bold mb-2">Meet the Team Behind IEEE JCER</h2>
// //               <p className="text-gray-200">
// //                 Dedicated to fostering innovation and technical excellence in our community
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Execom;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { Linkedin, Github, Mail } from 'lucide-react';
// import { a } from 'framer-motion/client';

// interface ExecomMember {
//   id: string;
//   name: string;
//   name1: string;
//   name_link?: string;
//   role: string;
//   image: string;
//   bio: string;
//   linkedin?: string;
//   github?: string;
//   email?: string;
// }

// const execomMembers: ExecomMember[] = [
//   {
//     id: '1',
//     name: 'Kumuda R',
//     name1: '',
//     role: 'Chair',
//     image: 'assets/images/Members/kumda.jpg',
//     bio: 'Final year Computer Science student passionate about technology and leadership.',
//     linkedin: 'https://www.linkedin.com/in/kumuda-r-395332220',
//     // github: '#',
//     email: 'kumuda134@gmail.com'
//   },
//   {
//     id: '2',
//     name: 'Sakshi Hatti',
//     role: 'Vice Chair',
//     name1: '',
//     image: "/assets/images/Members/sakshi.jpg",
//     bio: 'Dedicated to fostering innovation and technical excellence in our community.',
//     linkedin: 'https://www.linkedin.com/in/sakshi-hatti-a3718a304',
//     // github: '#',
//     email: 'Hattisakshi@gmail.com'
//   },
//   {
//     id: '3',
//     name1: 'Arihant Angolkar',
//     role: 'Treasurer',
//     name: '',
//     image: '/assets/images/Members/arihant.jpg',
//     bio: 'Managing finances and ensuring efficient resource utilization.',
//     linkedin: 'https://www.linkedin.com/in/arihant-angolkar/',
//     name_link: 'https://arihant-angolkar.netlify.app/',
//     github: 'https://github.com/arihant-angolkar',
//     email: 'arihantangolkar43849@gmail.com'
//   },
//   {
//     id: '4',
//     name: 'Ankit Nandgad',
//     name1: '',
//     role: 'Joint Treasurer',
//     image: '/assets/images/Members/ankit.jpg',
//     bio: 'Managing finances and ensuring efficient resource utilization.',
//     linkedin: 'https://www.linkedin.com/in/ankit-nandgad-a24623281',
//     // github: '#',
//     email: 'mike@ieee.org'
//   },
//   {
//     id: '5',
//     name: 'Siddita Varma',
//     name1: '',
//     role: 'Secretary',
//     image: '/assets/images/Members/siddita.jpg',
//     bio: 'Organizing events and maintaining records with precision and dedication.',
//     linkedin: 'http://www.linkedin.com/in/siddita-varma-52b204286',
//     github: 'https://github.com/Siddita',
//     email: 'sidditav@gmail.com'
//   },
//   {
//     id: '6',
//     name: 'Driti Birje',
//     name1: '',
//     role: 'Joint Secretary',
//     image: '/assets/images/Members/driti.jpg',
//     bio: 'Organizing events and maintaining records with precision and dedication.',
//     linkedin: 'https://www.linkedin.com/in/driti-birje-36928027a',
//     github: 'https://github.com/Heygirlsssss',
//     email: 'dritibirje03@gmail.com'
//   },
//   {
//     id: '7',
//     name1: 'Anna Souz',
//     role: 'Web Master',
//     name: '',
//     image: '/assets/images/Members/Anna.jpg',
//     bio: 'Leading technical workshops and mentoring fellow students.',
//     name_link: 'https://annasouz-resume.netlify.app/',
//     linkedin: 'https://www.linkedin.com/in/anna-souz',
//     github: 'https://github.com/Anna-Souz',
//     email: 'annasouz29@gmai.com'
//   },
//   {
//     id: '8',
//     name: 'Sambhav Kocheri',
//     name1: '',
//     role: 'SBMDC Chair',
//     image: '/assets/images/Members/sambhav.jpg',
//     bio: 'Planning and executing engaging events for our community.',
//     linkedin: 'https://www.linkedin.com/in/sambhav-kocheri-a6a85228b/',
//     // github: '#',
//     email: 'Sambhav.pkocheri@gmail.com'
//   },
//   {
//     id: '8',
//     name: 'Shreeya Jegarkal ',
//     name1: '',
//     role: 'Content Head',
//     image: '/assets/images/Members/shreeya.jpg',
//     bio: 'Planning and executing engaging events for our community.',
//     // linkedin: '#',
//     // github: '#',
//     email: 'shreeyajegarkal@gmail.com'
//   }
// ];

// const Execom = () => {
//   return (
//     <div className="pt-1 bg-gradient-to-b from-gray-900 to-[#00629B]">
//       {/* Hero Section */}
//       <section className="relative mt-16 py-20 bg-gradient-to-b from-gray100 to-[#00629B]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Executive Committee
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl text-gray-200 max-w-2xl mx-auto"
//           >
//             Meet the dedicated team leading IEEE JCER Student Branch
//           </motion.p>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {execomMembers.map((member, index) => (
//               <motion.div
//                 key={member.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Front of Card */}
//                 <div className="relative h-full transform transition-transform duration-500 group-hover:scale-0">
//                   <div className="relative h-80 w-50">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//                       <h3 className="text-xl font-semibold mb-1">{member.name1}</h3>
//                       <p className="text-gray-200">{member.role}</p>
//                     </div>
//                   </div>
//                 </div>
                

//                 {/* Back of Card */}
//                 <div className="absolute inset-0 bg-white p-6 transform transition-transform duration-500 scale-0 group-hover:scale-100">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                
//                 {member.name_link && (
//                       <a
//                         href={member.name_link} 
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name1}</h3>
//                       </a>
//                     )}
//                   <p className="text-[#00629B] font-medium mb-4">{member.role}</p>
//                   <p className="text-gray-600 mb-6">{member.bio}</p>
//                   <div className="flex space-x-4">
                    
                  
                    
//                     {member.linkedin && (
//                       <a
//                         href={member.linkedin}
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <Linkedin className="w-5 h-5" />
//                       </a>
//                     )}
//                     {member.github && (
//                       <a
//                         href={member.github}
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <Github className="w-5 h-5" />
//                       </a>
//                     )}
//                     {member.email && (
//                       <a
//                         href={`mailto:${member.email}`}
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <Mail className="w-5 h-5" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Photo */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative rounded-xl overflow-hidden"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
//               alt="IEEE JCER Executive Committee"
//               className="w-full h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//             <div className="absolute bottom-8 left-8 right-8 text-white text-center">
//               <h2 className="text-2xl font-bold mb-2">Meet the Team Behind IEEE JCER</h2>
//               <p className="text-gray-200">
//                 Dedicated to fostering innovation and technical excellence in our community
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Execom;
















// // ALL Done here!


// ==================================================================================================================








// import React from 'react';
// import { motion } from 'framer-motion';
// import { Linkedin, Github, Mail } from 'lucide-react';

// interface ExecomMember {
//   id: string;
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
//   linkedin?: string;
//   github?: string;
//   email?: string;
// }

// const execomMembers: ExecomMember[] = [
//   {
//     id: '1',
//     name: 'Kumuda R',
//     role: 'Chair',
//     image: 'assets/images/Members/kumda.jpg',
//     bio: 'Final year Computer Science student passionate about technology and leadership.',
//     linkedin: '#',
//     github: '#',
//     email: 'john@ieee.org'
//   },
//   {
//     id: '2',
//     name: 'Sakshi Hatti',
//     role: 'Vice Chair',
//     image: "/assets/images/Members/sakshi.jpg",
//     bio: 'Dedicated to fostering innovation and technical excellence in our community.',
//     linkedin: '#',
//     github: '#',
//     email: 'jane@ieee.org'
//   },
//   {
//     id: '3',
//     name: 'Siddita Varma',
//     role: 'Secretary',
//     image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
//     bio: 'Organizing events and maintaining records with precision and dedication.',
//     linkedin: '#',
//     github: '#',
//     email: 'mike@ieee.org'
//   },
//   {
//     id: '4',
//     name: 'Driti Birje',
//     role: 'Joint Secretary',
//     image: '/assets/images/Members/driti.jpg',
//     bio: 'Organizing events and maintaining records with precision and dedication.',
//     linkedin: '#',
//     github: '#',
//     email: 'mike@ieee.org'
//   },
//   {
//     id: '5',
//     name: 'Arihant Angolkar',
//     role: 'Treasurer',
//     image: '/assets/images/Members/arihant.jpg',
//     bio: 'Managing finances and ensuring efficient resource utilization.',
//     linkedin: '#',
//     github: '#',
//     email: 'sarah@ieee.org'
//   },
//   {
//     id: '6',
//     name: 'Ankit Nandgad',
//     role: 'Joint Treasurer',
//     image: '/assets/images/Members/ankit.jpg',
//     bio: 'Managing finances and ensuring efficient resource utilization.',
//     linkedin: '#',
//     github: '#',
//     email: 'sarah@ieee.org'
//   },
//   {
//     id: '7',
//     name: 'Anna Souz',
//     role: 'Web Master',
//     image: '/assets/images/Members/Anna.jpg',
//     bio: 'Leading technical workshops and mentoring fellow students.',
//     linkedin: '#',
//     github: '#',
//     email: 'david@ieee.org'
//   },
//   {
//     id: '8',
//     name: 'Shreeya Jegarkal',
//     role: 'Content Head',
//     image: '/assets/images/Members/shreeya.jpg',
//     bio: 'Planning and executing engaging events for our community.',
//     linkedin: '#',
//     github: '#',
//     email: 'emily@ieee.org'
//   },
//   {
//     id: '8',
//     name: 'Sambhav Kocheri',
//     role: 'Membership Drive Chair',
//     image: '/assets/images/Members/sambhav.jpg',
//     bio: 'Planning and executing engaging events for our community.',
//     linkedin: '#',
//     github: '#',
//     email: 'emily@ieee.org'
//   }
// ];

// const Execom = () => {
//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-b from-gray-900 to-[#00629B]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-bold mb-4"
//           >
//             Executive Committee
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl text-gray-200 max-w-2xl mx-auto"
//           >
//             Meet the dedicated team leading IEEE JCER Student Branch
//           </motion.p>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {execomMembers.map((member, index) => (
//               <motion.div
//                 key={member.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Front of Card */}
//                 <div className="relative h-full transform transition-transform duration-500 group-hover:scale-0">
//                   <div className="relative h-64">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                       <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//                       <p className="text-gray-200">{member.role}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Back of Card */}
//                 <div className="absolute inset-0 bg-white p-6 transform transition-transform duration-500 scale-0 group-hover:scale-100">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
//                   <p className="text-[#00629B] font-medium mb-4">{member.role}</p>
//                   <p className="text-gray-600 mb-6">{member.bio}</p>
//                   <div className="flex space-x-4">
//                     {member.linkedin && (
//                       <a
//                         href={member.linkedin}
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <Linkedin className="w-5 h-5" />
//                       </a>
//                     )}
//                     {member.github && (
//                       <a
//                         href={member.github}
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <Github className="w-5 h-5" />
//                       </a>
//                     )}
//                     {member.email && (
//                       <a
//                         href={`mailto:${member.email}`}
//                         className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
//                       >
//                         <Mail className="w-5 h-5" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Photo */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative rounded-xl overflow-hidden"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
//               alt="IEEE JCER Executive Committee"
//               className="w-full h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//             <div className="absolute bottom-8 left-8 right-8 text-white text-center">
//               <h2 className="text-2xl font-bold mb-2">Meet the Team Behind IEEE JCER</h2>
//               <p className="text-gray-200">
//                 Dedicated to fostering innovation and technical excellence in our community
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Execom;




import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { a } from 'framer-motion/client';

interface ProfExecomMember {
  id: string;
  name: string;
  name1: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

interface ExecomMember {
  id: string;
  name: string;
  name1: string;
  name_link?: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
  email?: string;
}


const prof_execomMembers: ProfExecomMember[] = [
  {
    id: '1',
    name: 'Dr. Virupaxi B. Dalal',
    name1: '',
    role: 'Branch Counselor',
    image: 'assets/images/Members/virupaxi_sir2.jpg',
    bio: 'Faculty Coordinator',
    linkedin: 'https://www.linkedin.com/in/virupaxi-dalal-317651124/',
    // github: '#',
    // email: 'kumuda134@gmail.com'
  },
  {
    id: '2',
    name: 'Prof. Chaitanya K J',
    role: 'Professional Member',
    name1: '',
    image: "/assets/images/Members/chaitanya_sir1.jpg",
    bio: 'HoD ECE Dept. is Dedicated to fostering innovation and technical excellence in our community.',
    linkedin: 'https://www.linkedin.com/in/chaitanya-krishna-jambotkar-989a9054/',
    // github: '#',
    // email: 'Hattisakshi@gmail.com'
  },
  {
    id: '3',
    name: 'Prof. Govinda M R',
    role: 'Professional Member',
    name1: '',
    image: '/assets/images/Members/Govinda_sir1.jpg',
    bio: 'Asst. Professor...',
    linkedin: 'https://www.linkedin.com/in/govind-m-r-49605116/',
    // github: 'https://github.com/arihant-angolkar',
    // email: 'arihantangolkar43849@gmail.com'
  }
];


const execomMembers: ExecomMember[] = [
  {
    id: '1',
    name: 'Kumuda R',
    name1: '',
    role: 'Chair',
    image: 'assets/images/Members/kumda.jpg',
    // bio: 'Final year Computer Science student passionate about technology and leadership.',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/kumuda-r-395332220',
    // github: '#',
    email: 'kumuda134@gmail.com'
  },
  {
    id: '2',
    name: 'Sakshi Hatti',
    role: 'Vice Chair',
    name1: '',
    image: "/assets/images/Members/sakshi1.jpg",
    // bio: 'Dedicated to fostering innovation and technical excellence in our community.',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/sakshi-hatti-a3718a304',
    // github: '#',
    email: 'Hattisakshi@gmail.com'
  },
  {
    id: '3',
    name1: 'Arihant Angolkar',
    role: 'Treasurer',
    name: '',
    image: '/assets/images/Members/arihant4.jpg',
    // bio: 'Managing finances and ensuring efficient resource utilization.',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/arihant-angolkar/',
    name_link: 'https://arihant-angolkar.netlify.app/',
    github: 'https://github.com/arihant-angolkar',
    email: 'arihantangolkar43849@gmail.com'
  },
  {
    id: '4',
    name: 'Ankit Nandgad',
    name1: '',
    role: 'Joint Treasurer',
    image: '/assets/images/Members/ankit.jpg',
    // bio: 'Managing finances and ensuring efficient resource utilization.',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/ankit-nandgad-a24623281',
    // github: '#',
    email: 'mike@ieee.org'
  },
  {
    id: '5',
    name: 'Siddita Varma',
    name1: '',
    role: 'Secretary',
    image: '/assets/images/Members/siddita1.jpg',
    // bio: 'Organizing events and maintaining records with precision and dedication.',
    bio: '',
    linkedin: 'http://www.linkedin.com/in/siddita-varma-52b204286',
    github: 'https://github.com/Siddita',
    email: 'sidditav@gmail.com'
  },
  {
    id: '6',
    name: 'Driti Birje',
    name1: '',
    role: 'Joint Secretary',
    image: '/assets/images/Members/driti1.jpg',
    // bio: 'Organizing events and maintaining records with precision and dedication.',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/driti-birje-36928027a',
    github: 'https://github.com/Heygirlsssss',
    email: 'dritibirje03@gmail.com'
  },
  {
    id: '7',
    name1: 'Anna Souz',
    role: 'Web Master',
    name: '',
    image: '/assets/images/Members/Anna1.jpg',
    // bio: 'Leading technical workshops and mentoring fellow students.',
    bio: '',
    name_link: 'https://annasouz-resume.netlify.app/',
    linkedin: 'https://www.linkedin.com/in/anna-souz',
    github: 'https://github.com/Anna-Souz',
    email: 'annasouz29@gmai.com'
  },
  {
    id: '8',
    name: 'Sambhav Kocheri',
    name1: '',
    role: 'SBMDC Chair',
    image: '/assets/images/Members/sambhav4.jpg',
    // bio: 'Planning and executing engaging events for our community.',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/sambhav-kocheri-a6a85228b/',
    // github: '#',
    email: 'Sambhav.pkocheri@gmail.com'
  },
  {
    id: '8',
    name: 'Shreeya Jegarkal ',
    name1: '',
    role: 'Content Head',
    image: '/assets/images/Members/shreeya1.jpg',
    // bio: 'Planning and executing engaging events for our community.',
    bio: '',
    // linkedin: '#',
    // github: '#',
    email: 'shreeyajegarkal@gmail.com'
  }
];

const Execom = () => {
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
            Executive Committee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Meet the dedicated team leading IEEE JCER Student Branch
          </motion.p>
        </div>
      </section>


      {/* Team Grid 1*/}
      {/* --------------------- Prof Execom Members Start--------------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        <h2 className="font-semibold text-2xl pb-2">JCER IEEE Student Branch Professional Members: </h2>
        <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prof_execomMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Front of Card */}
                <div className="relative h-full transform transition-transform duration-500 group-hover:scale-0">
                  <div className="relative h-80 w-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <h3 className="text-xl font-semibold mb-1">{member.name1}</h3>
                      <p className="text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                

                {/* Back of Card */}
                <div className="absolute inset-0 bg-white p-6 transform transition-transform duration-500 scale-0 group-hover:scale-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#00629B] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        {/* <br />
        <div className="border-t border-gray-400 mt-4 pt-4 text-center text-gray-400"></div> */}
        </div>
      </section>

      {/* --------------------- Prof Execom Members End--------------------- */}


            






      {/* Team Grid 2*/}
      {/* --------------------- Execom Members Start--------------------- */}
      <section className="py-16 bg-gray-50 -mt-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        <h2 className="font-semibold text-2xl pb-2">JCER IEEE Student Branch Student Execom: </h2>
        <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {execomMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Front of Card */}
                <div className="relative h-full transform transition-transform duration-500 group-hover:scale-0">
                  <div className="relative h-80 w-50">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <h3 className="text-xl font-semibold mb-1">{member.name1}</h3>
                      <p className="text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                

                {/* Back of Card */}
                <div className="absolute inset-0 bg-white p-6 transform transition-transform duration-500 scale-0 group-hover:scale-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                
                {member.name_link && (
                      <a
                        href={member.name_link} 
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name1}</h3>
                      </a>
                    )}
                  <p className="text-[#00629B] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    
                  
                    
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-[#00629B] transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="IEEE JCER Executive Committee"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">Meet the Team Behind IEEE JCER</h2>
              <p className="text-gray-200">
                Dedicated to fostering innovation and technical excellence in our community
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     {/* --------------------- Execom Members End--------------------- */}

    </div>
  );
};

export default Execom;
















// ALL Done here!