/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
})

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['aliabdaal.com', 'images.unsplash.com', 'media.graphassets.com'],
//   },
//   env: {
//     GRAPHQL_CMS_ENDPOINT: process.env.GRAPHQL_CMS_ENDPOINT,
//     GRAPHQL_CMS_TOKEN: process.env.GRAPHQL_CMS_TOKEN,
//   },
// }

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['aliabdaal.com', 'images.unsplash.com', 'media.graphassets.com'],
  },
  env: {
    GRAPHQL_CMS_ENDPOINT: process.env.GRAPHQL_CMS_ENDPOINT,
    GRAPHQL_CMS_TOKEN: process.env.GRAPHQL_CMS_TOKEN,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
})
