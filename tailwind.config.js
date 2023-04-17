/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    /*screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },*/

    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        508: "508px",
        656: "656px",
        880: "880px",
      },

      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        880: "880px",
        "90vh": "90vh",
      },

      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
      },
    },
  },
  // plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
