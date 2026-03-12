import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
    uri: import.meta.env.PUBLIC_GRAPHQL_URL,
    credentials: "same-origin",
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    fetchPolicy: 'network-only',
});

export default client;