/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#54bd95",
        lightPrimary: "#dff2ea",
        bgPrimary: "#f9f8fe",
        simpleText: "#c1c1c1",
        brandyello: "#ffc728",
        colorText: "#191a15",
      },
      backgroundImage: {
        "header-bg": "URL('./assets/img/bg.png')",
      },
    },
  },
  plugins: [],
};
