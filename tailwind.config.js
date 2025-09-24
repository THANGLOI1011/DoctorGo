// tailwind.config.js
import plugin from "tailwindcss/plugin";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#5f6fff",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".grid-cols-auto": {
          "grid-template-columns": "repeat(auto-fill, minmax(200px, 1fr))",
        },
      });
    }),
  ],
};
