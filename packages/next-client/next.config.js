const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  sassOptions: {
    additionalData: `
      @import "@styles/sizes.scss";
    `
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*"
      }
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack"
    });
    config.resolve.modules.push(path.resolve(__dirname, "./public"));
    return config;
  }
};

module.exports = nextConfig;
