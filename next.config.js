/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = [nextConfig,withPlugins([
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]",
        },
      },
    ],
  ])];


module.exports = nextConfig
