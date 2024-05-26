import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: '#FBF1D3',
        'charcoal': '#233D4D',
        'pumpkin': '#FE7F2D',
        'deepPumpkin': '#f76201',
        'sunglow': '#FCCA46',
        'olivine': '#A1C181',
        'zomp': '#619B8A',

        'header': {
          'hero': "#fff",
          "presentation": "#3D30A2"
        },
        'mobile-menu-bg': '#1e212b',
        'mainCTA': {
          "normal": '#FE7F1D',
          "hover": '#f76201',
          "text": '#000',
        },
        "secondaryCTA": {
          "normal": "#FCCA46",
          "hover": "#ffe078",
          "text": "#000",
        },
        "footer-bg": '#1e212b',
        "navbar": '#FBF1D3',
        "textNavbar": '#3D30A2',
        "textMobileNavBarOpened": '#fff',
        "expandable": "#e1e1ea",
        "expanded": "#f1f1fa"
      }
    },
  },
  plugins: [],
};
export default config;
