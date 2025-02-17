/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 3px 12px rgba(33, 50, 93, 0.5)',
        'btn':"0px 4px 12px 4px rgba(0,0,0,0.1)]"
      },
    },
  },
  plugins: [],
}