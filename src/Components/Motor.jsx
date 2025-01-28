import React, { useState } from 'react';

function App() {
  const [size, setSize] = useState({ A: { feet: '', inches: '' }, B: { feet: '', inches: '' }, C: { feet: '', inches: '' } });
  const [weight, setWeight] = useState('');
  const [fuel, setFuel] = useState('Diesel');
  const [unit, setUnit] = useState('imperial');

  return (
    <div className="font-sans items-center p-5">
      <div className="bg-[#003399] text-white ml-[360px] items-center max-w-xl h-[200px] p-4 text-center">
        <h2 className="text-xl font-bold">The Customer Needs to Know the Dimensions of Your Vehicle + The Weight</h2>
      </div>
      <div className="flex flex-col items-center gap-6">
        {/* Vehicle Icon */}
        <div>
          <img src="/assets/images/motorhome.webp" alt="Motorhome" className="w-[290px] h-[190px]" />
        </div>

        {/* Dimensions Section */}
        <div className="bg-[#F4C032] p-5 w-full max-w-xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold ">Size</h3>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="unit"
                  value="imperial"
                  checked={unit === 'imperial'}
                  onChange={() => setUnit('imperial')}
                  className="mr-2 font-bold"
                />
                Imperial
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="unit"
                  value="metric"
                  checked={unit === 'metric'}
                  onChange={() => setUnit('metric')}
                  className="mr-2 font-bold"
                />
                Metric
              </label>
            </div>
          </div>

          {['A', 'B', 'C'].map((dimension) => (
            <div key={dimension} className="flex items-center gap-4 mb-3">
              <label className="w-8 font-bold text-xl text-center">{dimension}</label>
              <input
                type="number"
                value={size[dimension].feet}
                onChange={(e) => setSize({ ...size, [dimension]: { ...size[dimension], feet: e.target.value } })}
                className="border p-2 w-[170px] text-center"
                placeholder=""
              />
              <span className="font-bold text-xl">Feet</span>
              <input
                type="number"
                value={size[dimension].inches}
                onChange={(e) => setSize({ ...size, [dimension]: { ...size[dimension], inches: e.target.value } })}
                className="border p-2 w-[170px] text-center"
                placeholder=""
              />
              <span className="font-bold text-xl">Inches</span>
            </div>
          ))}
        </div>

        {/* Weight Section */}
        <div className="bg-[#FF6600] p-5 w-full max-w-xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">Weight</h3>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="weight-unit"
                  value="lbs"
                  checked={unit === 'imperial'}
                  onChange={() => setUnit('imperial')}
                  className="mr-2"
                />
                lbs
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="weight-unit"
                  value="kg"
                  checked={unit === 'metric'}
                  onChange={() => setUnit('metric')}
                  className="mr-2"
                />
                kg
              </label>
            </div>
          </div>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border w-full p-2 text-center"
            placeholder=""
          />
        </div>

        {/* Fuel Section */}
        <div className="bg-[#FF6666] p-5 w-full max-w-xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">Fuel</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['Petrol', 'Diesel', 'Gas', 'Electric', 'Hybrid', 'Other'].map((fuelType) => (
              <label key={fuelType} className="flex font-bold items-center">
                <input
                  type="radio"
                  name="fuel"
                  value={fuelType}
                  checked={fuel === fuelType}
                  onChange={(e) => setFuel(e.target.value)}
                  className="mr-2"
                />
                {fuelType}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
