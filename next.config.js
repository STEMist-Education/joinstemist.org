/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  env: {
    ANALYTICS_ID: process.env.ANALYTICS_ID,
  },
  async redirects() {
    return [
      {
        source: "/signup",
        destination: "https://bit.ly/stemist22",
        permanent: true,
      },
      {
        source: "/hacks/signup",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSdPbxLj32YvUdPLnmtlYhhRXFiGwPCPuHK7Vf7e89DMAFsdew/viewform",
        permanent: true,
      },
      {
        source: "/webs",
        destination: "https://www.youtube.com/channel/UCp-9KJgj_clivoncmg459dg",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
   eslint: {
     ignoreDuringBuilds: true,
   },
  typescript: {
     ignoreBuildErrors: true,
   },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(config);
