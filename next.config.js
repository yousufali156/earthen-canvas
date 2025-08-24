/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com", // Unsplash images
      "i.ibb.co",            // imgbb direct links
      "i.ibb.co.com",        // যদি অন্য কোন subdomain থাকে
      "localhost",           // local testing (optional)
    ],
  },
};

module.exports = nextConfig;
