import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="/path-to-your-logo.png"
                alt="BSA Logo"
              />
              <span className="ml-2 text-xl font-bold">Bangladesh Student Association</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-green-600 px-3 py-2 rounded-md">Home</Link>
              <Link to="/events" className="hover:bg-green-600 px-3 py-2 rounded-md">Events</Link>
              <Link to="/gallery" className="hover:bg-green-600 px-3 py-2 rounded-md">Gallery</Link>
              <Link to="/about" className="hover:bg-green-600 px-3 py-2 rounded-md">About</Link>
              <Link to="/contact" className="hover:bg-green-600 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-600"
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-green-600 px-3 py-2 rounded-md">Home</Link>
            <Link to="/events" className="block hover:bg-green-600 px-3 py-2 rounded-md">Events</Link>
            <Link to="/gallery" className="block hover:bg-green-600 px-3 py-2 rounded-md">Gallery</Link>
            <Link to="/about" className="block hover:bg-green-600 px-3 py-2 rounded-md">About</Link>
            <Link to="/contact" className="block hover:bg-green-600 px-3 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 