/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "circular-web": ['"circular-web"', "sans-serif"],
        general: ['"general"', "sans-serif"],
        robertMedium: ['"robert-medium"', "sans-serif"],
        robertRegular: ['"robert-regular"', "sans-serif"],
        zentryRegular: ['"zentry-regular"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
