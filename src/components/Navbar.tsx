// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, CircuitBoard } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Events', href: '/events' },
//     { name: 'Achievements', href: '/achievements' },
//     { name: 'Execom', href: '/execom' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <CircuitBoard className="h-8 w-8 text-[#00629B]" />
//               <span className="ml-2 text-xl font-bold text-gray-800">IEEE JCER</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`${
//                   isActive(item.href)
//                     ? 'text-[#00629B] border-b-2 border-[#00629B]'
//                     : 'text-gray-600 hover:text-[#00629B]'
//                 } px-3 py-2 text-sm font-medium transition-colors duration-200`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Navigation Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-[#00629B] focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`${
//                   isActive(item.href)
//                     ? 'text-[#00629B] bg-black-50'
//                     : 'text-blue-600 hover:text-[#00629B] hover:bg-blue-50'
//                 } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', to: '/' },
//     { name: 'About Us', to: '/about' },
//     { name: 'Events', to: '/events' },
//     { name: 'Achievements', to: '/achievements' },
//     { name: 'Execom', to: '/execom' },
//     { name: 'Contact', to: '/contact' },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
//       <nav className="mx-auto max-w-7xl">
//       <div className="backdrop-blur-md bg-blue-600/20 border border-white/20 rounded-full px-4 py-2">

//           <div className="flex items-center justify-between h-14">
//             <div className="flex items-center">
//               <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%20branch-GdvU0NEGhRSKhuLxMoON4bxtSoDwAs.png"
//                   alt="JCER IEEE Logo"
//                   className="h-8 w-auto brightness-200"
//                 />
//                 <span>JCER IEEE</span>
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <div className="flex items-center space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.to}
//                     className={`text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
//                       isActive(item.to) ? 'border-b-2 border-white' : ''
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white hover:bg-white/20 p-2 rounded-lg"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden mt-2">
//             <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.to}
//                   className="text-white hover:bg-white/20 block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;










// --------------------------------------------- anna----------------------






// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import './Navbar.css';  // Import the CSS file

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigation = [
//     { name: 'Home', to: '/' },
//     { name: 'About Us', to: '/about' },
//     { name: 'Events', to: '/events' },
//     { name: 'Achievements', to: '/achievements' },
//     { name: 'Execom', to: '/execom' },
//     { name: 'Contact', to: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <div className="navbar-container">
//       <nav className="navbar-wrapper">
//         <div className="navbar-background">
//           <div className="navbar-content">
//             <div className="flex items-center">
//               <Link to="/" className="text-black font-bold text-xl flex items-center gap-2">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%20branch-GdvU0NEGhRSKhuLxMoON4bxtSoDwAs.png"
//                   alt="JCER IEEE Logo"
//                   className="h-8 w-auto brightness-200"
//                 />
//                 <span>JCER IEEE</span>
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <div className="flex items-center space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.to}
//                     className={`navbar-link ${isActive(item.to) ? 'navbar-link-active' : ''}`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="navbar-menu-button"
//                 aria-label="Toggle Menu"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden mt-2">
//             <div className="navbar-menu">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.to}
//                   className="navbar-menu-link"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



//------------------------------------------------------------------------------------


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "HOME", href: "/" },
//     { name: "ABOUT US", href: "/about" },
//     { name: "EVENTS", href: "/events" },
//     { name: "EXECOM", href: "/execom" },
//     { name: "ACHIEVEMENTS", href: "/achievements" },
//     { name: "CONTACT", href: "/contact" },
//   ]

//   return (
//     <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
//       <nav className="mx-auto max-w-7xl">
//         <div
//           className={`backdrop-blur-md border border-white/20 rounded-full px-4 py-2 transition-all duration-300 ${
//             isScrolled ? "bg-black/50" : "bg-white/10"
//           }`}
//         >
//           <div className="flex items-center justify-between h-14">
//             <div className="flex items-center">
//               <Link href="/" className="text-white font-bold text-xl flex items-center gap-2">
//                 <img
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%20branch-GdvU0NEGhRSKhuLxMoON4bxtSoDwAs.png"
//                   alt="JCER IEEE Logo"
//                   className="h-8 w-auto brightness-200"
//                 />
//                 <span>JCER IEEE</span>
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <div className="flex items-center space-x-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="md:hidden">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white hover:bg-white/20"
//               >
//                 <Menu />
//               </Button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden mt-2">
//             <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-2xl px-4 py-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-white hover:bg-white/20 block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   )
// }

// export default Navbar