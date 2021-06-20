const dotenv = require("dotenv");

dotenv.config();

const { HASURA_GRAPHQL_URL } = process.env;

module.exports = {
  env: {
    HASURA_GRAPHQL_URL,
  },
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  rewrites: () => [
    {
      source: "/",
      destination: "/index",
    },
  ],
};
