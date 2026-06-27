/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/myoko/01',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
