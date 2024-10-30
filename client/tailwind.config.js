/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansThai: ["Noto Sans Thai"],
        PlexSansThai: ["IBM Plex Sans Thai"],

      },
    },
  },
  plugins: [],
};
