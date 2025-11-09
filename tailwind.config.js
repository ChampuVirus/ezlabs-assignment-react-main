/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef6ff",
          100: "#d9ebff",
          200: "#b3d7ff",
          300: "#85bfff",
          400: "#57a7ff",
          500: "#2a8fff",
          600: "#1d72d4",
          700: "#1759a6",
          800: "#124278",
          900: "#0c2b4b",
        }
      },
      borderRadius: {
        'xl2': '1.25rem'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
}
