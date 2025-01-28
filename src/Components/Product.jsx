import React from "react";

const App = () => {
  const rows = [
    {
      mainIcon: "/assets/images/bookme (48).webp",
      items: [
        { icon: "/assets/images/bookme (45).webp",  },
        { icon: "/assets/images/bookme (46).webp",  },
        { icon: "/assets/images/bookme (47).webp",  },
      ],
    },
    {
      mainIcon: "/assets/images/bookme (44).webp",
      items: [
        { icon: "/assets/images/bookme (39).webp", },
        { icon: "/assets/images/bookme (40).webp",  },
        { icon: "/assets/images/bookme (41).webp",  },
        { icon: "/assets/images/bookme (42).webp", },
        { icon: "/assets/images/bookme (43).webp",  },
        { icon: "/assets/images/bookme (48).webp",  },
      ],
    },
    {
      mainIcon: "/assets/images/bookme (22).webp",
      items: [
        { icon: "/assets/images/bookme (25).webp",  },
        { icon: "/assets/images/bookme (23).webp",  },
        { icon: "/assets/images/bookme (22).webp",  },
        { icon: "/assets/images/bookme (19).webp",  },
      ],
    },
    {
      mainIcon: "/assets/images/bookme (34).webp",
      items: [
        { icon: "/assets/images/bookme (26).webp",  },
        { icon: "/assets/images/bookme (27).webp",  },
        { icon: "/assets/images/bookme (28).webp",  },
        { icon: "/assets/images/bookme (29).webp",  },
        { icon: "/assets/images/bookme (30).webp",  },
        { icon: "/assets/images/bookme (31).webp",  },
        { icon: "/assets/images/bookme (32).webp",  },
        { icon: "/assets/images/bookme (33).webp",  },
        { icon: "/assets/images/bookme (35).webp",  },
        { icon: "/assets/images/bookme (36).webp",  },
        { icon: "/assets/images/bookme (37).webp",  },
        { icon: "/assets/images/bookme (38).webp",  },
      ],
    },
    {
      mainIcon: "/assets/images/bookme (20).webp",
      items: [
        { icon: "/assets/images/bookme (9).webp",  },
        { icon: "/assets/images/bookme (11).webp",  },
        { icon: "/assets/images/bookme (3).webp",  },
        { icon: "/assets/images/bookme (10).webp",  },
        { icon: "/assets/images/bookme (5).webp",  },
        { icon: "/assets/images/bookme (1).webp",  },
        { icon: "/assets/images/bookme (12).webp",  },
        { icon: "/assets/images/bookme (2).webp",  },
        { icon: "/assets/images/bookme (8).webp",  },
        { icon: "/assets/images/bookme (7).webp",  },
        { icon: "/assets/images/bookme (6).webp",  },
        { icon: "/assets/images/bookme (4).webp",  },
      ],
    },
    {
      mainIcon: "/assets/images/bookme (4).webp",
      items: [
        { icon: "/assets/images/bookme (49).webp",  },
        { icon: "/assets/images/bookme (50).webp",  },
        { icon: "/assets/images/bookme (51).webp",  },
        { icon: "/assets/images/bookme (52).webp",  },
        { icon: "/assets/images/bookme (53).webp",  },
      ],
    },
  ];

  return (

    
    <div className="bg-blue-600 min-h-screen">
    {/* Yellow Header */}
    <header className="bg-yellow-400 text-center text-black py-12 font-bold text-2xl">
  <img 
    src="/assets/images/bookme (21).webp" 
    alt="Header Icon" 
    className="mx-auto w-[300px] h-16"
  />
</header>

    {/* Grid Content */}
    <div className="grid grid-cols-6 gap-1 mt-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col items-center">
          {/* Main Icon */}
            <img
              src={row.mainIcon}
              alt={`Main Icon ${rowIndex + 1}`}
              className="w-[150px] h-[150px] mb-2"
            />

            {/* Additional Items */}
            {row.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={`row-${rowIndex}`}
                  className="mr-2"
                />
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[100px] h-[100px]"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
