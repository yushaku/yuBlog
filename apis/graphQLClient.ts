import { GraphQLClient } from 'graphql-request'

const graphQLApi = process.env.GRAPHQL_CMS_ENDPOINT as string
const graphQLToken = process.env.GRAPHQL_CMS_TOKEN as string

export const myGraphQlCLient = new GraphQLClient(graphQLApi, {
  method: 'POST',
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
  headers: {
    authorization: `Bearer ${graphQLToken}`,
  },
})
