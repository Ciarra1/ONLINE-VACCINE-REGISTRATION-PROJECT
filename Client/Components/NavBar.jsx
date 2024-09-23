import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium border border-gray-300">Home</Link>
              <Link to="/register" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium border border-gray-300">Register</Link>
              <Link to="/login" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium border border-gray-300">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}



