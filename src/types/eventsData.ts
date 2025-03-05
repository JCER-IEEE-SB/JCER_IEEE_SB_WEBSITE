// eventsData.ts
export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    category: 'upcoming' | 'ongoing' | 'past';
    registrationLink?: string;
  }
  
  // Replace the sample events below with your full list of 27 events.
  export const events: Event[] = [
    {
      id: '1',
      title: 'PRAKASHAN : In-house Project Exhibition 2023',
      description: 'Prakashanis an in-house technical exhibition that provides first-year students with an opportunity to apply what they learn and gain confidence to aim higher.',
      date: '30 Dec 2023',
      location: 'Auditorium',
      image: '/assets/images/events/p.jpg',
      category: 'past',
  
    },
    {
      id: '2',
      title: 'Annual General Meet',
      description: 'The IEEE Annual General Meeting (AGM) served as a pivotal event for reflecting on the year’s achievements, addressing challenges, and setting a strategic vision for the upcoming year.',
      date: '01 Jan 2024',
      location: 'Auditorium',
      image: '/assets/images/events/DSC_3510.JPG',
      category: 'past',
    },
    {
      id: '3',
      title: 'IEEE Membership Drive',
      description: ' The event included informational sessions, workshops, and networking opportunities designed to showcase the resources, professional development opportunities, and community support that IEEE offers.',
      date: '24 Feb 2024 - 29 Feb 2024 ',
      location: 'JCER Auditorium',
      image: '/assets/images/events/imd.jpeg',
      category: 'past',
    },
    {
      id: '4',
      title: 'Arduino Odyssey',
      description: '\'Arduino Odyssey\' was a technical event focused on teaching participants how to use Arduino in IoT applications. ',
      date: '29 Jan 2024-01 Feb 2024',
      location: 'JCER Auditorium',
      image: '/assets/images/events/DSC_4727.JPG',
      category: 'past',
      
    },
    {
      id: '5',
      title: 'Ambassadors Summit',
      description: 'This event provides the right platform for those who are eager to solve the real time problems existing across the world.',
      date: '09 Feb 2024',
      location: 'Online',
      image: '/assets/images/events/as.jpg',
      category: 'past'
    },
    {
      id: '6',
      title: 'PROJECT EXHIBHITION',
      description: 'The aim of the Project Exhibition organized by the JCER IEEE Student Branch is to provide engineering students with a comprehensive and practical understanding of their field. ',
      date: ' 04 March 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/projectexh.jpeg',
      category: 'past'
    },
    {
      id: '7',
      title: 'IEEE Vision 2024',
      description: 'IEEE VISION 2024 celebrated innovation, collaboration, and excellence within the IEEE community.',
      date: '16 May 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/ieeevision.jpeg',
      category: 'past'
    },
    {
      id: '8',
      title: 'Technical Talk - Applications of Artificial Intelligence (AI) in the field of Medical Mechanics',
      description: 'The technical talk aims to explore and elucidate the applications of Artificial Intelligence (AI) in the field of medical mechanics, highlighting how AI technologies can advance medical diagnostics and treatment.',
      date: ' 27 May 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/techtalk.jpeg',
      category: 'past'
    },
    {
      id: '9',
      title: 'Codify.c',
      description: 'The Codify.c Hackathon aimed to give students a chance to show off their programming skills, work together in teams, and solve problems in a fun and competitive environment.',
      date: ' 04 March 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/codify.jpg',
      category: 'past'
    },
    {
      id: '10',
      title: 'IEEE Innovation Oasis',
      description: 'Innovation Oasis is an in-house technical exhibition designed to give students an opportunity to showcase their learning through practical applications. ',
      date: ' 13 June 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/codify.jpg',
      category: 'past'
    },
    {
      id: '11',
      title: 'Student Outreach Program',
      description: 'The Student Outreach Program is designed to teach basic computer skills through hands-on projects led by experienced members.',
      date: ' 24 June 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/so.jpeg',
      category: 'past'
    },
    {
      id: '12',
      title: 'Rural Outreach Programme',
      description: 'The rural outreach program is a community initiative organized by IEEE members to bridge the technology gap between urban and rural areas.',
      date: ' 26 June 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/rural.jpeg',
      category: 'past'
    },
    {
      id: '13',
      title: 'Quizbate',
      description: 'Quizbate is an engaging and intellectually stimulating competition that blends the excitement of a quiz with the persuasive power of a debate.',
      date: '18 Sep 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/quiz.jpg',
      category: 'past'
    },
    {
      id: '14',
      title: 'Debate Quest',
      description: '/"Debate Quest/" was a competition designed to enhance critical thinking and public speaking skills among engineering students.',
      date: ' 04 Oct 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/debate.jpeg',
      category: 'past'
    },

    {
      id: '15',
      title: 'Creative Engineering: Freshers\' Art & Innovation Fest',
      description: "Creative Engineering: Freshers Art & Innovation Fest\" hosted by JCER IEEE SB was a dynamic event designed to help first-year engineering students build confidence interact with peers and explore their creative sides through engaging activities",
      date: ' 07 Oct 2024 ',
      location: 'Lab Complex',
      image: '/assets/images/events/freshers.jpeg',
      category: 'past'
    },
    
    {
      id: '16',
      title: 'Discover IEEE: Your Gateway to Innovation and Networking',
      description: 'Discover IEEE: Your Gateway to Innovation and Networking, was an engaging event tailored for first-year students to explore the world of technology and engineering.',
      date: ' 08 Oct 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/ss.jpg',
      category: 'past'
    },
    
    {
      id: '17',
      title: 'Technical Talk - \"From Classroom to Career: What After Engineering\?\"',
      description: 'The event "From Classroom to Career: What After Engineering?" aimed to support engineering students as they transition into the professional world, bridging academic learning with industry expectations.',
      date: ' 15 Oct 2024',
      location: 'Lab Complex',
      image: '/assets/images/events/codify.jpg',
      category: 'past'
    },
    {
      id: '18',
      title: 'Annual General Meet',
      description: 'The IEEE Annual General Meeting (AGM) served as a pivotal event for reflecting on the year’s achievements, addressing challenges, and setting a strategic vision for the upcoming year.',
      date: '05 March 2025',
      location: 'Auditorium',
      image: '/assets/images/events/agm1.jpg',
      category: 'ongoing',
    },
    
    
  ];
  // {
  //   id: '4',
  //   title: 'Meeting- Planning Arduino Odyssey and Ambassadors Summit',
  //   description: 'The Execom meeting focused on brainstorming upcoming events. After analyzing students\' needs for societal progress in both technical and administrative fields, two events were finalized: "Arduino Odyssey" to enhance hands-on technical skills and "Ambassadors\' Summit" to foster geopolitical knowledge and diplomatic approaches.',
  //   date: '02 Jan 2024',
  //   location: 'JCER Auditorium',
  //   image: '/assets/images/events/DSC_4727.JPG',
  //   category: 'upcoming',
  //   registrationLink: '#'
  // },