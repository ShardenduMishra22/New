// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode with 'class'
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Scans these files for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        background: '#3C3248', // Custom background color
        textLight: '#8D78AD',   // Custom light text color
        textDark: '#FFFFFF',    // Custom dark mode text color
      },
    },
  },
  plugins: [],
};
