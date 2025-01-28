import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyInformation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    webAddress: "",
    email: "",
    contactNumbers: [
      { type: "Work Number", number: "", longDist: false },
      { type: "Cell Number", number: "", longDist: false },
      { type: "Pager Number", number: "", longDist: false },
      { type: "Home Number", number: "", longDist: false },
      { type: "Other Number", number: "", longDist: false },
    ],
    address: {
      street: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
    },
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("contactNumber")) {
      const index = parseInt(name.split("-")[1], 10);
      const updatedContacts = [...formData.contactNumbers];
      updatedContacts[index].number = value;
      setFormData({ ...formData, contactNumbers: updatedContacts });
    } else if (name.startsWith("longDist")) {
      const index = parseInt(name.split("-")[1], 10);
      const updatedContacts = [...formData.contactNumbers];
      updatedContacts[index].longDist = checked;
      setFormData({ ...formData, contactNumbers: updatedContacts });
    } else if (name.startsWith("address")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [key]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Saved:", formData);
    // Perform saving logic (e.g., API call)
    navigate("/Owner"); // Replace "/next-page" with the desired route
  };

  return (
    <div
      className="w-full min-h-screen p-2 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/images/setup background.webp")',
      }}
    >
      {/* Top Buttons */}
      <div className="max-w-6xl mx-auto border border-gray-300 rounded shadow-md p-2">
        <div className="flex mb-4">
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup company button backgound.webp"
              alt="Company Button"
              className="w-[220px] h-[60px] shadow-[0_20px_20px_rgba(255,0,150,0.6),0_4px_10px_rgba(0,255,255,0.4)]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup owners button backgound.webp"
              alt="Owners Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup financial button backgound.webp"
              alt="Financial Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup systems button backgound.webp"
              alt="Systems Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup break time button backgound.webp"
              alt="Breaktime Icon"
              className="w-[220px] h-[60px]"
            />
          </button>
        </div>

        {/* Title and Divider */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-black">Company Information</h2>
          <hr className="border-t ml-10 border-gray-400 mt-1" />
        </div>

        {/* Form Layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Left Side */}
          <div>
            <div className="mb-2">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full text-2xl border border-gray-300 rounded px-2 py-1"
                placeholder="Company Name"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="webAddress"
                value={formData.webAddress}
                onChange={handleChange}
                className="w-full text-2xl border border-gray-300 rounded px-2 py-1"
                placeholder="Web Address"
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border text-2xl border-gray-300 rounded px-2 py-1"
                placeholder="E-mail"
              />
            </div>
            <div className="mt-[100px]">
              {formData.contactNumbers.map((contact, index) => (
                <div key={index} className="flex items-center mb-4">
                  <label className="text-2xl font-medium text-black pl-6">
                    Long Dist?
                  </label>
                  <input
                    type="checkbox"
                    name={`longDist-${index}`}
                    checked={contact.longDist}
                    onChange={handleChange}
                    className="mr-[30px]"
                  />
                  <input
                    type="text"
                    name={`contactNumber-${index}`}
                    value={contact.number}
                    onChange={handleChange}
                    className="w-2/3 border border-gray-300 rounded px-2 py-2 text-2xl"
                    placeholder={contact.type}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>
            {["street", "city", "province", "postalCode", "country"].map(
              (field) => (
                <div key={field} className="mb-2 ml-[40px]">
                  <input
                    type="text"
                    name={`address.${field}`}
                    value={formData.address[field]}
                    onChange={handleChange}
                    className="w-full text-2xl border border-gray-300 rounded px-2 py-1"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                </div>
              )
            )}
            <div className="mt-[80px]">
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="text-2xl border ml-[90px] border-gray-300 rounded px-2 py-1 w-[400px] h-28"
                placeholder="Notes on Location/Directions"
              ></textarea>
            </div>
          </div>
        </form>

        <div className="flex justify-end mt-6 gap-4">
          <button
            type="button"
            onClick={() => console.log("Help button clicked")}
          >
            <img
              src="/assets/images/button help purple.webp"
              alt="Help"
              className="w-[100px] mr-[500px] h-[100px]"
            />
          </button>
          <button
            type="button"
            onClick={() => console.log("Cancel button clicked")}
          >
            <img
              src="/assets/images/button cancel no.webp"
              alt="Cancel"
              className="w-[100px] mr-[200px] h-[100px]"
            />
          </button>
          <button
            type="submit"
            onClick={handleSubmit} // Attach the submit handler
          >
            <img
              src="/assets/images/button ok check.webp"
              alt="Save"
              className="w-[100px] mr-[80px] h-[100px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
