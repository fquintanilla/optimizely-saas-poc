import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "https://cg.optimizely.com/content/v2?auth=qMBktNZSJcPuoZKPmmI1ijAZvxUiv4fTrtLaYQsFcOCKNqJv",
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;