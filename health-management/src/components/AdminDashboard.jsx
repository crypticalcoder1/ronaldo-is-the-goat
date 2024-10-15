import React, { useState, useEffect } from "react";
import { FaBars, FaUserMd, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  // Sample data for doctors and their patients with billing information
  const doctors = [
    {
      id: 1,
      name: "Dr. Smith",
      patients: [
        { id: 1, name: "John Doe", age: 30, bill: 150, paid: true },
        { id: 2, name: "Jane Doe", age: 25, bill: 200, paid: false },
      ],
    },
    {
      id: 2,
      name: "Dr. Jones",
      patients: [
        { id: 3, name: "Emily Johnson", age: 40, bill: 120, paid: true },
        { id: 4, name: "Chris Lee", age: 35, bill: 180, paid: true },
      ],
    },
    {
      id: 3,
      name: "Dr. Brown",
      patients: [
        { id: 5, name: "Mary Wilson", age: 28, bill: 250, paid: false },
        { id: 6, name: "David Clark", age: 45, bill: 300, paid: true },
      ],
    },
  ];

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply dark mode class to the root element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setShowSidebar(false); // Optionally hide the sidebar after selecting an action
  };

  const handleLogout = () => {
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className={`min-h-screen flex flex-col relative transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-black' : 'bg-gray-200'}`}>
      {/* Navbar */}
      <nav className={`shadow-md flex items-center justify-between px-4 py-3 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <button onClick={() => setShowSidebar(!showSidebar)} className={`${isDarkMode ? 'text-blue-400' : 'text-blue-700'} z-10`}>
          <FaBars className="text-2xl" />
        </button>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg mr-4 ${isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {showSidebar && (
        <div className={`absolute top-16 left-4 p-4 rounded-lg shadow-lg z-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Options</h3>
          <ul>
            <li onClick={() => handleActionClick("addDoctor")} className={`cursor-pointer mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
              <FaUserMd className="inline mr-2" /> Add Doctor
            </li>
            <li onClick={() => handleActionClick("editDoctor")} className={`cursor-pointer mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
              <FaUserMd className="inline mr-2" /> Edit Doctor
            </li>
            <li onClick={() => handleActionClick("deleteDoctor")} className={`cursor-pointer mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
              <FaUserMd className="inline mr-2" /> Delete Doctor
            </li>
            <li onClick={() => handleActionClick("viewPatients")} className={`cursor-pointer ${isDarkMode ? 'text-blue-400' : 'text-blue-700'} hover:underline`}>
              <FaUsers className="inline mr-2" /> View Patients
            </li>
          </ul>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center relative mt-12">
        <div className={`rounded-lg shadow-lg w-full max-w-4xl p-8 ${isDarkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white'}`}>
          <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            {selectedAction ? (
              <>
                <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Selected Action: {selectedAction}
                </h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  You selected to {selectedAction.replace(/([A-Z])/g, ' $1').toLowerCase()}.
                </p>
                {/* Implement functionality for each action */}
                {selectedAction === "addDoctor" && (
                  <div className="mt-4">
                    <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Add Doctor</h3>
                    <input type="text" placeholder="Doctor Name" className={`p-2 border rounded mb-2 w-full ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-200 border-gray-400 text-gray-900'}`} />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add Doctor</button>
                  </div>
                )}
                {selectedAction === "editDoctor" && (
                  <div className="mt-4">
                    <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Edit Doctor</h3>
                    <input type="text" placeholder="Doctor ID" className={`p-2 border rounded mb-2 w-full ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-200 border-gray-400 text-gray-900'}`} />
                    <input type="text" placeholder="New Doctor Name" className={`p-2 border rounded mb-2 w-full ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-200 border-gray-400 text-gray-900'}`} />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit Doctor</button>
                  </div>
                )}
                {selectedAction === "deleteDoctor" && (
                  <div className="mt-4">
                    <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Delete Doctor</h3>
                    <input type="text" placeholder="Doctor ID" className={`p-2 border rounded mb-2 w-full ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-200 border-gray-400 text-gray-900'}`} />
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Delete Doctor</button>
                  </div>
                )}
                {selectedAction === "viewPatients" && (
                  <div className="mt-4">
                    <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>Patient List by Doctor</h3>
                    <ul className="mt-2">
                      {doctors.map((doctor) => (
                        <li key={doctor.id} className="mb-4">
                          <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold`}>{doctor.name}</h4>
                          <ul>
                            {doctor.patients.map((patient) => (
                              <li key={patient.id} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {patient.name} (Age: {patient.age}) - Bill: ${patient.bill} - Status: {patient.paid ? "Paid" : "Unpaid"}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Please select an option from the menu.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
