import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "https://api-sa-east-1.graphcms.com/v2/cl4ljcdt56mom01yrdswgf7n9/master",
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o7r440155401z27b5cb3dt/master",
  cache: new InMemoryCache(),
});
