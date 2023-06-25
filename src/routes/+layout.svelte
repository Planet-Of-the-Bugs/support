<script>
    import { PUBLIC_HASURA_ADMIN_SECRET, PUBLIC_HASURA_GRAPHQL_ENDPOINT } from "$env/static/public";
    import { setClient } from "svelte-apollo";
    import "../app.css";
    import "../styles.css";
    import Navbar from "../components/Navbar.svelte";
    import ApolloGraphQLClient from "bugs-lib/graphql/client";
    console.log(ApolloGraphQLClient);
    const apolloClient = ApolloGraphQLClient({
        uri: PUBLIC_HASURA_GRAPHQL_ENDPOINT,
        headers: {
            "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
        }
    }).init();

    setClient(apolloClient);
</script>

<Navbar />
<main class="p-4 ">
    <slot />
</main>