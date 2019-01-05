import merge from 'lodash.merge'
import { gql, makeExecutableSchema } from 'apollo-server-express'

import { typeDefs as test, resolvers as testResolvers } from './test'
import { typeDefs as subject, resolvers as subjectResolvers } from './subjects'
import { typeDefs as student, resolvers as studentResolvers } from './students'

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`
const resolvers = {}

export default makeExecutableSchema({
  typeDefs: [Query, test, subject, student],
  resolvers: merge(resolvers, testResolvers, subjectResolvers, studentResolvers)
})
