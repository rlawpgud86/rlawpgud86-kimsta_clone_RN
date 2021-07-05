import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://4580fc86c5e2.ngrok.io/graphql",
  cache: new InMemoryCache(),
});
export default client;
