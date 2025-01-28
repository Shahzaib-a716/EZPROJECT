import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Add from "./Add"; // Import the AddAnother component

const TradesPeopleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [services, setServices] = useState([]); // Start with an empty array
  const [newService, setNewService] = useState(""); // State for new service input
  const [showAddAnother, setShowAddAnother] = useState(false); // State to toggle AddAnother component

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input changes for the main form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle new service addition when the Enter key is pressed
  const handleServiceInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (newService.trim() && !services.includes(newService)) {
        setServices([...services, newService]);
        setNewService(""); // Clear input field
      }
    }
  };

  // Remove a service from the list
  const handleRemoveService = (service) => {
    setServices(services.filter((item) => item !== service));
  };

  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover py-8"
      style={{ backgroundImage: "url(/assets/images/day.jpg)" }}
    >
      <div className="w-[550px] h-auto border-2 border-gray-300 p-4 ml-[400px] rounded-lg bg-white shadow-md">
        <div className="text-center mb-4">
          <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-800 text-white py-2 rounded">
            WE NEED MORE TRADES <br /> PEOPLE, STORES + <br /> BUSINESSES
          </div>
        </div>
        <form>
          {/* Name Field */}
          <div className="flex items-center text-2xl rounded-lg mb-2">
            <span className="mr-2 font-bold text-2xl">A</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="NAME"
              className="w-full border-2 text-2xl font-bold border-gray-300 rounded p-2"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center text-2xl mb-2">
            <span className="mr-2 font-bold text-2xl">B</span>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="PHONE NUMBER"
              className="w-full border-2 text-2xl font-bold border-gray-300 rounded p-2"
            />
          </div>

          {/* Add Service Field */}
          <div className="flex items-center text-2xl mb-4">
            <span className="mr-2 font-bold text-2xl">C</span>
            <input
              type="text"
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              onKeyDown={handleServiceInput}
              placeholder="Enter Services or products"
              className="w-full border-2 text-2xl font-bold border-gray-300 rounded p-2"
            />
          </div>
        </form>

        {/* List of Services */}
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full"
            >
              <span className="mr-2 text-2xl">{service}</span>
              <button
                onClick={() => handleRemoveService(service)}
                className="text-xl font-bold"
              >
                x
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons with Icons */}
        <div className="flex justify-between items-center mt-9">
          {/* Back Button */}
          <button onClick={() => navigate(-1)}> {/* Navigate back to previous page */}
            <img
              src="/assets/images/button back.webp"
              alt="Back"
              className="w-[63px] h-[65px] cursor-pointer hover:scale-125 transition-transform"
            />
          </button>

          {/* Cancel Button */}
          <button onClick={() => navigate("/TradePerson")}> {/* Navigate to TradePerson */}
            <img
              src="/assets/images/button cancel no.webp"
              alt="Cancel"
              className="w-[63px] h-[65px] cursor-pointer hover:scale-125 transition-transform"
            />
          </button>

          {/* OK Button */}
          <button onClick={() => setShowAddAnother(true)}> {/* Show AddAnother */}
            <img
              src="/assets/images/button ok check.webp"
              alt="Check"
              className="w-[63px] h-[65px] cursor-pointer hover:scale-125 transition-transform"
            />
          </button>
        </div>

        {/* Conditionally Render AddAnother Component */}
        {showAddAnother && (
          <div className="mt-6">
            <Add />
          </div>
        )}
      </div>
    </div>
  );
};

export default TradesPeopleForm;
