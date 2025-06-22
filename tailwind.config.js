/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '350px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      brown: '#A52A2A',
      lightBrown: '#C4A484',
      darkBrown: '#2B1B17',
      

      black: '#000000',
      white: '#FFFFFF',

      cyan: '#00FFFF',
      lightCyan: '#E0FFFF',
      darkCyan: '#008B8B',

      orange: '#FFA500',
      lightOrange: '#FFD580',
      darkOrange: '#FF8C00',

      grey: '#808080',
      lightGrey: '#D3D3D3',
      darkGrey: '#404040',
    },
    extend: {
      boxShadow: {
        cyanShadow:'0px 0px 20px 0px rgba(94, 206, 220, 0.5)',
        cyanMediumShadow: '10px 10px 200px 150px rgba(94,206,220,0.5)',
        orangeMediumShadow:'10px 10px 200px 150px rgba(240,169,79,0.5)'
      }
    },
    fontFamily:{
      body: ['Josefine sans'],
      special: ['Roboto']
    }
  },
  plugins: [],
}

