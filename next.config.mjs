/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* domains: ["avatars.githubusercontent.com"], */
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
