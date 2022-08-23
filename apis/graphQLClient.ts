import { GraphQLClient } from 'graphql-request'

// const abortController = new window.AbortController()

const graphQLApi = process.env.GRAPHQL_CMS_ENDPOINT || ''

export const myGraphQlCLient = new GraphQLClient(graphQLApi, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_CMS_TOKEN}`,
  },
  // signal: abortController.signal,
})

// abortController.abort()
