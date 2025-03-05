
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "EVENTS", href: "/events" },
    { name: "EXECOM", href: "/execom" },
    // { name: "ACHIEVEMENTS", href: "/achievements" },
    { name: "CONTACT", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      {/* <nav className="mx-auto max-w-7xl"> */}
      <nav className="mx-auto max-w-[76rem]">
        <div
          className="backdrop-blur-md border border-white/40 rounded-full px-4 py-2 transition-all duration-300 bg-[rgba(63,95,105,0.22)]"
        >

        {/* <div
          className="backdrop-blur-md border border-white/30 rounded-full px-4 py-2 transition-all duration-300 bg-[rgba(65,88,113,0.3)]"
        > */}

        {/* <div
          className="backdrop-blur-md border border-white/30 rounded-full px-4 py-2 transition-all duration-300 bg-[rgba(30,58,138,0.3)]"
        > */}

          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%20branch-GdvU0NEGhRSKhuLxMoON4bxtSoDwAs.png"
                  alt="JCER IEEE Logo"
                  className="h-8 w-auto brightness-200"
                />
                <span>JCER IEEE</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-white hover:text-white/80 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href) ? 'border-b-2 border-white' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/20 p-2 rounded-lg"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            
            <div className="backdrop-blur-md  border-white/20 rounded-2xl px-4 py-2 bg-[rgba(30,58,138,0.3)]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:bg-white/20 block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
