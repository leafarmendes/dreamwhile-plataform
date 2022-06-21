import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nkr3lc064w01xp57372kut/master',
  cache: new InMemoryCache()
})