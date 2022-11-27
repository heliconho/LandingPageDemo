/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-color": "#ff2063",
        "third-color": "#ff2063",
        "dark-bg-color": "#2c2c2c",
        "dark-text-color": "#484848",
        "light-gray-color": "#f4f4f4",
        "super-light-gray-color": "#f8f8f8",
        "light-blue-color": "#f6faff",
        "main-theme-light-color": "#fff7ee",
        "dark-color": "#484848",
        "dark-gray-color": "#4e4e4e",
        "main-bg-color": "#fd9d20",
        "main-bg-grad": "linear-gradient(0deg, #ff6a00, #fd9d20)",
        "secondary-bg-grad": "linear-gradient(0deg, #42999c, #29b3a6)",
        "main-color": "#fd9d20",
        "main-color-bright": "#ff9334",
        "main-light-color": "#fffbf6",
        "main-light-trans": "#ffb3403e",
        "main-bg": "#fd9d20",
        "orange-rgb": "rgb(241, 117, 2)",
        "blue-rgb": "rgb(39, 44, 150)",
      },
    },
  },
  plugins: [],
};
