/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        // https://github.com/IsaacKalambo22/my-blog-posts
        pathname: '/IsaacKalambo22/my-blog-posts/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
