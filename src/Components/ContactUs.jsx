import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VirtualHousePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-day bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/assets/images/day.jpg")' }}
    >
      <div className="max-w-xl mx-auto p-10 bg-gray-100 shadow-lg rounded-lg">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <p className="text-4xl font-extrabold">Sorry you did</p>
            <p className="text-4xl font-extrabold">not find what</p>
            <p className="text-4xl font-extrabold">you were looking for.</p>
            <hr className="mt-2 mb-4 border-t-2 border-black" />
          </div>
          <img
            src="/assets/images/les.webp"
            alt="Person"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>

        {/* Content Section */}
        <div className="mt-4 text-xl font-bold">
          <p>
            If you cannot find what you are looking for, you can help us create a virtual house in
            your community. You need at least 100,000 people living near you to be eligible. It costs you nothing. However, it will take time
            to find all the different types of goods, services in your area, promoting your own small business at the same time. We will
            help you do this, and that too is free, because we have a proven system that works.
          </p>
        </div>

        {/* Bottom Section with Three Icons */}
        <div className="flex items-center justify-between mt-8">
          {/* Back Button */}
          <button onClick={() => navigate(-1)}>
            <img
              src="/assets/images/button back.webp"
              alt="Back Icon"
              className="w-16 h-18"
            />
          </button>

          {/* Virtual House Icon */}
          <Link to="/VirtualPage">
            <div className="relative group">
              <img
                src="/assets/images/vh.png"
                alt="Virtual House"
                className="w-46 h-32 cursor-pointer transform transition duration-300 group-hover:-translate-y-2"
              />
            </div>
          </Link>

          {/* Forward Button */}
          <div className="flex items-center text-xl font-bold cursor-pointer">
            <img
              src="/assets/images/button next.webp"
              alt="Forward Icon"
              className="ml-4 w-16 h-18"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualHousePage;
