module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '360px',
        // => @media (min-width: 375px)
  
        'sm': '640px',
        // => @media (min-width: 390px) 
  
        'md': '768px',
        // => @media (min-width: 768px) 
  
        'lg': '1024px',
        // => @media (min-width: 1024px)
  
        'xl': '1280px',
        // => @media (min-width: 1280px) 
  
        'xxl': '1420px',
        // => @media (min-width: 1420px)
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) 
      },

      fontFamily: {
        Satisfy: ['Satisfy', 'cursive'],
        Jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
