import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'; // Adjust the path to import your logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-12 w-[40rem] ml-[17rem]" src={Logo} alt="Your Logo" />
              </Link>
            </div>
            <div className="hidden md:block"></div> {/* Empty div for spacing */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <Link to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
