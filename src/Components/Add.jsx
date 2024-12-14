import React from "react";
import { useNavigate } from "react-router-dom";

const AddAnother = () => {
  const navigate = useNavigate();

  const handleAddAnother = () => {
    // Navigate to the new page, resetting its state
    navigate("/Add1", { replace: true });
  };

  return (
    <div className="flex flex-col w-[380px] items-center justify-center bg-yellow-400 p-6 rounded-lg">
      {/* Top Section */}
      <div className="bg-blue-600 text-yellow-400 text-6xl font-bold p-4 w-full text-center rounded-md">
        +1
      </div>

      {/* Main Text */}
      <p className="text-black text-4xl font-bold my-4">
        WOULD YOU LIKE TO ADD ANOTHER
      </p>

      {/* Yes/No Buttons */}
      <div className="flex gap-8">
        {/* No Button */}
        <button onClick={() => navigate("/TradePerson")}>
          <img
            src="/assets/images/button cancel no.webp"
            alt="Cancel"
            className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
          />
        </button>

        {/* Yes Button */}
        <button onClick={handleAddAnother}>
          <img
            src="/assets/images/button ok check.webp"
            alt="Add Another"
            className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default AddAnother;
