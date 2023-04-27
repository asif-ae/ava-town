/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(52, 28, 132, 1)",
        secondary: "rgba(129, 31, 139, 1)",
        dark: "rgba(52, 53, 58, 1)",
        red: "rgba(223, 73, 73, 1)",
        gray: {
          light: "rgba(250, 250, 250, 1)",
          dark: "rgba(106, 106, 106, 1)",
        },
        transparent: "rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
};
