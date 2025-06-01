// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // adjust to your project
  safelist: [
    {
      pattern: /group-hover\/group-.+:text-purple-500/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
