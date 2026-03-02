import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
    uri: "http://localhost:10038/graphql",
    credentials: "same-origin",
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    fetchPolicy: 'network-only',
});

export default client;