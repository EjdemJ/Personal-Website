/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        jump: "jump 500ms ease-in infinite alternate",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
