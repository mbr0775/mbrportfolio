module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all component files for Tailwind classes
  ],
  theme: {
    extend: {

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
