/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "i.scdn.co", "ui-avatars.com"],
  }
}

module.exports = nextConfig