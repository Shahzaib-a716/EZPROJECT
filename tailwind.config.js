/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      clipPath: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
        
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '50%': { transform: 'scale(1.2)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideInFromSide: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
        slideInFromSide: 'slideInFromSide 1s ease-out',
        
      },
      
    },
    
    plugins: [
    ]
  }, 
};

