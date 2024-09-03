/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Agrega Poppins como fuente predeterminada
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F97316 0%, #60A5FA 50%, #1E40AF 100%)',
      },
    },
  },
  plugins: [],
}

