// @flow
import GraphQLJSON from 'graphql-type-json'
import GraphQLDate from 'graphql-date'

const typeDefs = `
  scalar Date
  scalar JSON
`

const resolvers = {
  Date: GraphQLDate,
  JSON: GraphQLJSON
}

export default {
  typeDefs,
  resolvers
}
