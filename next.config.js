/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "lryb2jg4gp4x",
    CONTENTFUL_ACCESS_KEY: "V-PeeWc6HXToTyf9WmO9BqPpr8jyNGCRlX_3g-xEqyY"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
