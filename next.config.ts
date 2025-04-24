import type { NextConfig } from "next"
import { createContentlayerPlugin } from "next-contentlayer2"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['plus.unsplash.com', 'www.notion.so', 's3.us-west-2.amazonaws.com'],
  },
  env: {
    NOTION_DATABSE: process.env.NOTION_DATABSE,
    NOTION_SECRET: process.env.NOTION_SECRET,
    BLOG_URL: process.env.BLOG_URL,
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY || '',
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID || '',
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID || '',
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
