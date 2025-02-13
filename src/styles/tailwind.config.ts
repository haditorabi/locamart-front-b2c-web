import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,tsx}", // Scans for content in .ts, .tsx files in the /src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom color for branding
        secondary: "#6B7280", // Custom secondary color
      },
      spacing: {
        128: "32rem", // Example of adding custom spacing
      },
    },
  },
  plugins: [],
};

export default config;
