/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      colors: {
        peachLight: "#FAD9C3",
        peachDark: "#FF6F61",
      },
      animation: {
        'fade-slide': 'fadeSlide 0.5s ease-out',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
