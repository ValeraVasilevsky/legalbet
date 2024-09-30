export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ["./src/**/*.{ts,tsx,vue}"],
};
