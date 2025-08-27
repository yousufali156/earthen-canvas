/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com", 
      "i.ibb.co",            
      "i.ibb.co.com",        
      "localhost",           
    ],
  },
};

module.exports = nextConfig;
