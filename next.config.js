/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['aliabdaal.com', 'images.unsplash.com'],
  },
  env: {
    GRAPHQL_CMS_ENDPOINT: process.env.GRAPHQL_CMS_ENDPOINT,
  },
}
