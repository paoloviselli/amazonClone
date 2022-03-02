/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

// module.exports = {
//   reactStrictMode: true,
//   // images: {
//   //   domains: ["firebasestorage.googleapis.com"],
//   //   formats: ["image/avif", "image/webp"],
//   // },
// };

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
