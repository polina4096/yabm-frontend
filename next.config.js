/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/beatmaps/hint",
        destination: "http://localhost:3001/beatmaps/hint",
      },
      {
        source: "/api/beatmaps",
        destination: "http://localhost:3001/beatmaps",
      },
    ];
  },
};

module.exports = nextConfig;
