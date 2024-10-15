import React, { useState } from "react";
import { FaBars, FaUserMd, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");

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
            <li onClick={() => handleActionClick("addDoctor")} className="cursor-pointer mb-2 text-blue-600 hover:underline">
              <FaUserMd className="inline mr-2" /> Add Doctor
            </li>
            <li onClick={() => handleActionClick("editDoctor")} className="cursor-pointer mb-2 text-blue-600 hover:underline">
              <FaUserMd className="inline mr-2" /> Edit Doctor
            </li>
            <li onClick={() => handleActionClick("deleteDoctor")} className="cursor-pointer mb-2 text-blue-600 hover:underline">
              <FaUserMd className="inline mr-2" /> Delete Doctor
            </li>
            <li onClick={() => handleActionClick("viewPatients")} className="cursor-pointer text-blue-600 hover:underline">
              <FaUsers className="inline mr-2" /> View Patients
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
                <h2 className="text-xl font-semibold">Selected Action: {selectedAction}</h2>
                <p className="text-gray-600">
                  You selected to {selectedAction.replace(/([A-Z])/g, ' $1').toLowerCase()}.
                </p>
                {/* Implement the functionality buttons for each action here */}
                {selectedAction === "addDoctor" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Add Doctor</h3>
                    <input type="text" placeholder="Doctor Name" className="p-2 border rounded mb-2 w-full" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Add Doctor</button>
                  </div>
                )}
                {selectedAction === "editDoctor" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Edit Doctor</h3>
                    <input type="text" placeholder="Doctor ID" className="p-2 border rounded mb-2 w-full" />
                    <input type="text" placeholder="New Doctor Name" className="p-2 border rounded mb-2 w-full" />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Edit Doctor</button>
                  </div>
                )}
                {selectedAction === "deleteDoctor" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Delete Doctor</h3>
                    <input type="text" placeholder="Doctor ID" className="p-2 border rounded mb-2 w-full" />
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Delete Doctor</button>
                  </div>
                )}
                {selectedAction === "viewPatients" && (
                  <div className="mt-4">
                    <h3 className="font-semibold">Patient List by Doctor</h3>
                    <ul className="mt-2">
                      {doctors.map((doctor) => (
                        <li key={doctor.id} className="mb-4">
                          <h4 className="font-bold">{doctor.name}</h4>
                          <ul>
                            {doctor.patients.map((patient) => (
                              <li key={patient.id} className="text-gray-600">
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
              <p className="text-gray-600">Please select an option from the menu.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
