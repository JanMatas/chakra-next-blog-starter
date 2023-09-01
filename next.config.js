/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // FAST REFRESH HACK - this is here to enable us to "require" .mdx
        // files in development, so they get fast refreshed if they change.
        config.module.rules.push({
          test: /\.mdx$/i,
          loader: "raw-loader",
        });
        return config;
      },
}

module.exports = nextConfig
