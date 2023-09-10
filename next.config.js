/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    i18n: {
      locales: ["pt", "en"],
      defaultLocale: "pt",
      localeDetection: false
    },
    domains: ["media.licdn.com"],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl(nextConfig);
