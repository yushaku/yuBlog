import { GraphQLClient } from 'graphql-request'

const graphQLApi = process.env.GRAPHQL_CMS_ENDPOINT as string

export const myGraphQlCLient = new GraphQLClient(graphQLApi, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_CMS_TOKEN}`,
  },
})
