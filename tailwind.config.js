/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'min': '390px'},
        'max-xsm': {'max': '390px'},

        'sm': {'min': '744px'},
        'max-sm': {'max': '744px'},
        // => @media (max-width: 640px) { ... }
  
        'max-xmd': {'max': '1225px'}, //fixed
        'xmd': {'min': '1225px'},

        'max-md': {'max': '1440px'}, //fixed
        'md': {'min': '1440px'},
        // 'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        
      }
    },
    
    
  },
  
  plugins: [],
}


/*
  1920 - lg
  1440 - md
  1024(1225) - xmd
  744 - sm
  390 - xsm
*/
