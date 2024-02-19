/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000'
      },
      {
        protocol: 'https',
        hostname: 'art-agenda-bucket.eu-central-1.linodeobjects.com',
        port:''
      }
    ]
  }
};

export default nextConfig;
