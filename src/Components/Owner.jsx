import React from "react";

const UserDetailsForm = () => {
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
              className="w-[220px] h-[60px] "
            />
          </button>
          <button className="flex items-center justify-center">
            <img
              src="/assets/images/setup owners button backgound.webp"
              alt="Owners Icon"
              className="w-[220px] h-[60px] shadow-[0_20px_20px_rgba(255,0,150,0.6),0_4px_10px_rgba(0,255,255,0.4)]"
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
        {/* Main Form Grid */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Left Section */}
          <div>
            {/* Personal Details */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Personal Details</h2>
              <div className="grid gap-1 mt-10">
                <input
                  type="text"
                  placeholder="Title"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
              </div>
            </div>

            {/* Home Address */}
            <div>
              <h2 className="text-2xl whitespace-nowrap font-extrabold">
                Home Address & Personal Contact Information
              </h2>
              <div className="grid gap-1 mt-10 mb-10">
                <input
                  type="text"
                  placeholder="Street"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
                <input
                  type="text"
                  placeholder="Province"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border text-2xl ml-[80px] w-[250px] font-semibold p-1 rounded"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="border text-2xl ml-[80px] w-[450px] font-semibold p-1 rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            {/* Dating Web Page */}
            <div className="">
              <h2 className="text-3xl font-bold">Dating Web Page</h2>
              <div className="grid gap-4 mt-10">
                <input
                  type="text"
                  placeholder="Web Page"
                  className="border ml-[0px] w-[550px] text-2xl font-semibold p-1 rounded"
                />
                <div className="flex text-3xl mb-6 font-bold items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sameAsCompany"
                    className="ml-[190px]"
                  />
                  <label htmlFor="sameAsCompany">Same as Company Info</label>
                </div>
              </div>
            </div>

            {/* Contact Numbers */}
            <div>
           
<div className="grid gap-1 mt-">
  {/* 6th Input Field at the Top */}
  <div className="flex items-center space-x-4">
    <input
      type="text"
      placeholder="Default Country Code"
      className="border p-2 text-2xl font-semibold rounded ml-[128px] w-[390px]"
    />
  </div>

  {/* 5 Contact Numbers with Checkboxes */}
  {[
    { label: "Long Dist?", placeholder: "Work Number" },
    { label: "Long Dist?", placeholder: "Cell Number" },
    { label: "Long Dist?", placeholder: "Pager Number" },
    { label: "Long Dist?", placeholder: "Home Number" },
    { label: "Long Dist?", placeholder: "Other Number" },
  ].map((item, index) => (
    <div key={index} className="flex items-center space-x-4">
      {/* Checkbox in front of the text */}
      <input type="checkbox" id={`longDist${index}`} className="mr-2" />
      <label htmlFor={`longDist${index}`} className="mr-4">
        {item.label}
      </label>
      {/* Corresponding Input Fields */}
      <input
        type="text"
        placeholder={item.placeholder}
        className="border mr-[60px] text-2xl font-semibold w-[390px] p-2 rounded"
      />
    </div>
  ))}
</div>
</div>

          </div>
        </div>

        {/* Black Divider */}
        <div className="my-4 border-t border-black"></div>

       {/* Footer Buttons */}
<div className="flex justify-end gap-4 mt-6">
  <button
    type="button"
    
  >
    <img
      src="/assets/images/button cancel no.webp" // Replace with the path to your cancel icon
      alt="Cancel"
      className="w-[80px] h-[80px] mr-2"
    />
    Cancel
  </button>
  <button
    type="submit"
    
  >
    <img
      src="/assets/images/button ok check.webp" // Replace with the path to your save icon
      alt="Save"
      className="w-[80px] h-[80px] mr-2"
    />
    Save
  </button>
</div>

      </div>
    </div>
  );
};

export default UserDetailsForm;
