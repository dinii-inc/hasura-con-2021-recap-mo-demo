import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloClient, ApolloLink, HttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";

import { cache } from "store/cache";

const url = process.env.HASURA_GRAPHQL_URL;

if (!url) throw new Error("Please set HASURA_GRAPHQL_URL env");

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    setContext(async () => {
      const token = localStorage.getItem("token");
      return { headers: token ? { Authorization: `Bearer ${token}` } : {} };
    }),
    typeof window === "undefined"
      ? new HttpLink({ uri: url })
      : split(
          ({ query }) => {
            const definition = getMainDefinition(query);
            return definition.kind === "OperationDefinition" && definition.operation === "subscription";
          },
          new WebSocketLink({
            uri: url.replace("http", "ws"),
            options: {
              reconnect: true,
              lazy: true,
              connectionParams: async () => {
                const token = localStorage.getItem("token");
                return { headers: token ? { Authorization: `Bearer ${token}` } : {} };
              },
            },
          }),
          new HttpLink({ uri: url }),
        ),
  ]),
});
