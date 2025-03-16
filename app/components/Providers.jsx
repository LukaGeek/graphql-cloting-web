"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Providers({ children }) {
  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
