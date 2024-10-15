import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [currentSection, setCurrentSection] = useState(0); // State to track the current section being displayed

  // Defining the sections of the landing page
  const sections = [
    {
      title: 'Welcome to HealthCare Management',
      content: 'Manage your healthcare system with ease, efficiency, and control.',
      buttonText: 'Next',
    },
    {
      title: 'Key Features',
      content: (
        <div className="space-y-8 text-left max-w-2xl mx-auto">
          <div className="feature-item">
            <h3 className="text-3xl font-bold">🌟 Doctor Dashboard</h3>
            <p className="text-lg">
              Manage appointments, billing, and patient records efficiently.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="text-3xl font-bold">🌟 Patient Dashboard</h3>
            <p className="text-lg">
              Book appointments, view medical history, and pay bills seamlessly.
            </p>
          </div>
          <div className="feature-item">
            <h3 className="text-3xl font-bold">🌟 Admin Dashboard</h3>
            <p className="text-lg">
              Manage doctors, assign roles, and oversee billing and records.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'About Us',
      content: (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Commitment to Health Care</h2>
          <p className="text-lg md:text-xl mb-6">
            At Pinnacle Health Care Services, we are dedicated to providing the highest quality healthcare management solutions.
            Our mission is to improve patient outcomes and enhance operational efficiency through innovative technology and compassionate care.
          </p>
          <p className="text-lg md:text-xl">
            Join us in revolutionizing the healthcare experience for patients, doctors, and administrators alike.
          </p>
        </div>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <div className="text-center">
          <p>Need help? Contact us at:</p>
          <p className="mt-2">Phone: +1 123 456 7890</p>
          <p className="mt-2">Email: support@healthcare.com</p>
        </div>
      ),
    },
  ];

  // Handler function to navigate through the sections
  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length); // Move to the next section
  };

  // Function to dynamically set the background color based on the current section
  const getBackgroundColor = () => {
    switch (currentSection) {
      case 0:
        return 'skyblue';
      case 1:
        return '#0091EA'; // Ocean blue
      case 2:
        return '#00BFFF'; // Light ocean blue
      default:
        return 'skyblue';
    }
  };

  // Function to set text color based on the background color for better contrast
  const getTextColor = () => {
    switch (currentSection) {
      case 0:
        return '#000'; // Black text for light background
      case 1:
        return '#fff'; // White text for dark background
      case 2:
        return '#fff'; // White text for dark background
      default:
        return '#000'; // Default to black text
    }
  };

  return (
    <div
      className="min-h-screen font-sans flex flex-col justify-between"
      style={{ backgroundColor: getBackgroundColor(), color: getTextColor() }} // Apply dynamic text and background colors
    >
      {/* Main Section Content */}
      <section className="min-h-screen flex flex-col justify-between p-4">
        {/* Navbar */}
        <nav className="bg-white shadow-lg fixed w-full z-10 top-0 flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">Pinnacle Health Care Services</div> {/* Title on the left */}
          <div className="hidden md:flex space-x-4">
            {/* Links to different authentication routes */}
            <Link to="/admin/auth" className="text-gray-600 hover:text-blue-600 transition">Admin Login</Link>
            <Link to="/patient/auth" className="text-gray-600 hover:text-blue-600 transition">Patient Login</Link>
            <Link to="/doctor/auth" className="text-gray-600 hover:text-blue-600 transition" style={{ marginRight: '20px' }}>Doctor Login</Link>
          </div>
        </nav>

        {/* Content Area */}
        <div className="flex-grow flex flex-col items-center justify-center text-black p-4 bg-opacity-90">
          {/* Displaying the current section title and content */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: getTextColor() }}>
            {sections[currentSection].title}
          </h1>
          <div className="text-lg md:text-xl mb-10 text-center" style={{ color: getTextColor() }}>
            {sections[currentSection].content}
          </div>
          {/* Next button to navigate through sections */}
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition hover:shadow-xl transform hover:scale-105"
            style={{ fontSize: '1.25rem' }}
          >
            {sections[currentSection].buttonText || 'Next'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
