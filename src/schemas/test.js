import { gql } from 'apollo-server-express'

import testController from '../controllers/testController'

export const typeDefs = gql`
  extend type Query {
    tests: [Test]
  }

  type Test {
    id: ID
    name: String
  }
`

export const resolvers = {
  Query: {
    tests: () => testController.findAll()
  }
}
