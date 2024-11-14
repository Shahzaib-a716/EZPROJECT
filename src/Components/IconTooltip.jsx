// IconTooltip.js
import React from 'react';

const IconTooltip = ({ iconSrc, tooltipText, onClick }) => (
  <div className="relative group cursor-pointer" onClick={onClick}>
    <img src={iconSrc} className="mb-3 opacity-90 hover:opacity-100" alt="Icon" />
    <div className="absolute -translate-y-full left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-lg text-white text-sm shadow-lg hidden group-hover:flex w-max">
      {tooltipText}
    </div>
  </div>
);

export default IconTooltip;
