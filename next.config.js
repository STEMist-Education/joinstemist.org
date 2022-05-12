/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/signup",
        destination: "https://forms.gle/ECuJtaGiVR8bVtin9",
        permanent: true,
      },
      {
        source: "/hacks/signup",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSdPbxLj32YvUdPLnmtlYhhRXFiGwPCPuHK7Vf7e89DMAFsdew/viewform",
        permanent: true,
      },
    ];
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(config);
