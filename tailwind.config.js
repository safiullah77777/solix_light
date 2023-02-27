/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fr-auto-fr": "auto 1fr auto",
      },
      boxShadow: {
        btn: "0 10px 20px -10px #0578e2",
        btn1:"0 10px 20px -10px #000000",
        card: "0px 4px 15px rgba(0, 0, 0, 0.1)"
      },
    },
  },
  plugins: [],
};
