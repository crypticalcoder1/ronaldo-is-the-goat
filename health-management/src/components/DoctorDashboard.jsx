import React, { useState } from "react";
import { FaBars, FaCalendarAlt, FaUserInjured, FaUserEdit, FaMoneyBill } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const DoctorDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

  const handleActionClick = (action) => {
    setSelectedAction(action);
    setShowSidebar(false); // Optionally hide the sidebar after selecting an action
  };

  const handleLogout = () => {
    // Perform logout logic here (if needed)
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-r from-blue-500 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setShowSidebar(!showSidebar)} // Show/hide sidebar
          className="text-blue-600 z-10"
        >
          <FaBars className="text-2xl" />
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>

      {/* Sidebar */}
      {showSidebar && (
        <div className="absolute top-16 left-4 bg-white p-4 rounded-lg shadow-lg z-20">
          <h3 className="font-bold text-lg mb-4">Options</h3>
          <ul>
            <li onClick={() => handleActionClick("viewAppointments")} className="cursor-pointer mb-2 text-blue-600 hover:underline">
              <FaCalendarAlt className="inline mr-2" /> View Appointments
            </li>
            <li onClick={() => handleActionClick("viewRecords")} className="cursor-pointer mb-2 text-blue-600 hover:underline">
              <FaUserInjured className="inline mr-2" /> View Patient Records
            </li>
            <li onClick={() => handleActionClick("editProfile")} className="cursor-pointer mb-2 text-blue-600 hover:underline">
              <FaUserEdit className="inline mr-2" /> Edit Profile
            </li>
            <li onClick={() => handleActionClick("billPatients")} className="cursor-pointer text-blue-600 hover:underline">
              <FaMoneyBill className="inline mr-2" /> Bill Patients
            </li>
          </ul>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center relative mt-12">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-4xl p-8">
          {/* Content Area */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            {selectedAction ? (
              <>
                <h2 className="text-xl font-semibold">Selected Action: {selectedAction.replace(/([A-Z])/g, ' $1')}</h2>
                <p className="text-gray-600">
                  You selected to {selectedAction.replace(/([A-Z])/g, ' $1').toLowerCase()}.
                </p>
                {/* Implement the functionality buttons for each action here */}
                {selectedAction === "viewAppointments" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Appointments List</h3>
                    {/* Display appointments here */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">Manage Appointments</button>
                  </div>
                )}
                {selectedAction === "viewRecords" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Patient Records</h3>
                    {/* Display patient records here */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">View Records</button>
                  </div>
                )}
                {selectedAction === "editProfile" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Edit Profile</h3>
                    <input type="text" placeholder="Doctor Name" className="p-2 border rounded mb-2 w-full" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Update Profile</button>
                  </div>
                )}
                {selectedAction === "billPatients" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Bill Patients</h3>
                    <input type="text" placeholder="Patient ID" className="p-2 border rounded mb-2 w-full" />
                    <input type="number" placeholder="Bill Amount" className="p-2 border rounded mb-2 w-full" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit Bill</button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-600">Please select an option from the menu.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
