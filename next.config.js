/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_CMS_ENDPOINT: process.env.GRAPHQL_CMS_ENDPOINT,
  },
}
