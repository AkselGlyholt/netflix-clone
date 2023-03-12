/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require('tailwind-scrollbar'),
  ],
};
