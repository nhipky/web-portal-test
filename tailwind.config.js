module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fcfcfc",
          100: "#f3f4ff",
          200: "#eeeeee",
          300: "#dadada",
          500: "#a098ae",
          "100_01": "#f5f5f5",
        },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_23": "#00000023" },
        white: { A700: "#ffffff" },
        indigo: {
          100: "#c1bbeb",
          500: "#4d44b5",
          900: "#303972",
          "500_19": "#4d44b519",
          "500_36": "#4d44b536",
          "500_63": "#4d44b563",
        },
        colors: "#f3f4ffff",
        yellow: { 700: "#fcc43e", "700_00": "#fcc33d00" },
        teal: { 300: "#4cbc9a" },
        deep_orange: { 300: "#fb7d5b", "300_00": "#fb7d5b00" },
        red: { A200: "#ff454f", A200_01: "#ff4550" },
        pink: { A700_0c: "#bf156c0c" },
        blue_gray: { 800: "#363b64" },
      },
      boxShadow: { bs: "0px 20px  50px 0px #bf156c0c" },
      fontFamily: { poppins: "Poppins", cairo: "Cairo", dmsans: "DM Sans" },
      textShadow: {
        ts: "0px 4px  4px #0000003f",
        ts1: "0px 7px  16px #00000023",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#4d44b5,#303972)",
        gradient1: "linear-gradient(180deg ,#fb7d5b,#fb7d5b00)",
        gradient2: "linear-gradient(180deg ,#fcc43e,#fcc33d00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
