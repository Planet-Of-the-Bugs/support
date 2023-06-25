
import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_HASURA_GRAPHQL_ENDPOINT } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';
// import { initApolloGraphQLClient } from "$lib/graphql/client";

const httpLink = new HttpLink({
    uri: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
    credentials: "include",
    headers: {
        "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
        "Authorization": ""
    },
});

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    credentials: "include",
    link: httpLink,
});

export default apolloClient;
