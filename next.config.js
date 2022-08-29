/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'aliabdaal.com',
      'images.unsplash.com',
      'media.graphassets.com',
      'platform-lookaside.fbsbx.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  env: {
    GRAPHQL_CMS_ENDPOINT: process.env.GRAPHQL_CMS_ENDPOINT,
    GRAPHQL_CMS_TOKEN: process.env.GRAPHQL_CMS_TOKEN,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,

    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,

    JWT_SECRET: process.env.JWT_SECRET,
  },
}
