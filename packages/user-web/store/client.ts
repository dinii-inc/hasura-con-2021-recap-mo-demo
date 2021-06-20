import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { cache } from "store/cache";

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([setContext(async () => {}), new HttpLink({ uri: process.env.HASURA_GRAPHQL_URL })]),
});
