import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="text-2xl font-bold text-blue-600">HealthCare</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/admin/auth" className="text-gray-600 hover:text-blue-600">Admin Login</Link>
          <Link to="/patient/auth" className="text-gray-600 hover:text-blue-600">Patient Login</Link>
          <Link to="/doctor/auth" className="text-gray-600 hover:text-blue-600">Doctor Login</Link>
          <Link to="/admin" className="text-gray-600 hover:text-blue-600">Admin Dashboard</Link>
          <Link to="/doctor" className="text-gray-600 hover:text-blue-600">Doctor Dashboard</Link>
          <Link to="/patient" className="text-gray-600 hover:text-blue-600">Patient Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
