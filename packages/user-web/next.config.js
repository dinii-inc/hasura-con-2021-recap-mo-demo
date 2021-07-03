const dotenv = require("dotenv");

dotenv.config();

const { HASURA_GRAPHQL_URL, JWT_SECRET_KEY } = process.env;

module.exports = {
  env: {
    HASURA_GRAPHQL_URL,
    JWT_SECRET_KEY,
  },
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts"],
  images: {
    domains: ["localhost"],
  },
  rewrites: () => [
    {
      source: "/",
      destination: "/index",
    },
  ],
};
