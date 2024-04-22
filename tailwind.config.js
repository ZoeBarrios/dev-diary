/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffebbb',
        'secondary': '#fdffcd',
        'tertiary': '#ffcab0',
        'text':'#f76b8a',
        'text-secondary':'#ff9c6d',
      },
    },
  },
  plugins: [],
}

