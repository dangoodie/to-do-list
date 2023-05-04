/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
