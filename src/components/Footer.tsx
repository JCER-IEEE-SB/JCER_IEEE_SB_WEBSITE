import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IEEE JCER</h3>
            <p className="text-gray-400">
              Empowering Technology, Enabling Futures through innovation and education.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/execom" className="text-gray-400 hover:text-white">Execom</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="h-12 w-12 mr-2" />
                JCER Campus, 682/2, 683/2A, Udyambag, Angol, Belagavi, Karnataka 590008
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91 9110841457
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                jcerieee@gmail.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a> */}
              <a href="https://www.instagram.com/jcer_ieee/" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          
            <br />

            {/* ---------------------Designed & Developed with ❤️ by Contributors: ------------------------ */}
            <div className="flex space-x-4">
              <div>
                <h2 className="font-semibold text-sm pb-2">Designed & Developed with ❤️ by Contributors:</h2>
                <div className="flex items-center -space-x-2">
                  
                  {/* Contributor 1 */}
                  <div className="relative group w-10 h-10">
                    <a
                      className="block w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      href="https://github.com/Anna-Souz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://github.com/Anna-Souz.png?size=128"
                        alt="Anna-Souz"
                      />
                    </a>
                    <span className="absolute left-1/2 bottom-12 transform -translate-x-1/2 px-2 py-1 text-xs font-semibold text-white bg-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                      Anna-Souz
                    </span>
                  </div>
                
                  {/* Contributor 2 */}
                  <div className="relative group w-10 h-10">
                    <a
                      className="block w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      href="https://github.com/arihant-angolkar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://github.com/arihant-angolkar.png?size=128"
                        alt="Arihant Angolkar"
                      />
                    </a>
                    <span className="absolute left-1/2 bottom-12 transform -translate-x-1/2 px-2 py-1 text-xs font-semibold text-white bg-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                      Arihant Angolkar
                    </span>
                  </div>

                </div>
              </div>
            </div>
            {/* ---------------------Designed & Developed with ❤️ by Contributors: ------------------------ */}
            
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-4 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JCER IEEE Student Branch. All rights reserved.</p>
        </div>

        <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="-1" y="40" className="w-full text-white" pb-0 font-size="43.52" font-weight="900" fill="#878E9C">
            JCER IEEE
          </text>
        </svg>
        
      </div>
    </footer>
  );
};

export default Footer;













// -------------------- original collabrator code
{/* <h3 className="text-xl font-bold mb-4">Designed with ❤️ by </h3> */}
{/* <div className="flex space-x-4">

<div>
  <p className="font-semibold text-sm pb-2">Designed & Developed with ❤️ by Contributors:</p>
  <div className="flex items-center -space-x-2">
    <a
      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
      href="https://github.com/Anna-Souz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-full h-full object-cover"
        src="https://github.com/Anna-Souz.png?size=128"
        alt="colebemis"
      />
    </a>
    <a
      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
      href="https://github.com/arihant-angolkar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-full h-full object-cover"
        src="https://github.com/arihant-angolkar.png?size=128"
        alt="csandman"
      />
    </a>
    
  </div>
</div>
</div>
----------- */}



// 