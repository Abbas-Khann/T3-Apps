// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#0b1025",
          "200": "#030514",
          "300": "rgba(11, 16, 39, 0.54)",
        },
        black: "#000",
        "color-shade-01": "#fff",
        "color-shade-02": "#15effb",
        "color-shade-03": "#5191fa",
      },
      fontFamily: { lexend: "Lexend", marvel: "Marvel" },
      borderRadius: { small: "10.5px", base: "73px", large: "139px" },
    },
    fontSize: { xs: "20px", sm: "24px", base: "36px", lg: "40px" },
  },
  corePlugins: { preflight: false },
};
