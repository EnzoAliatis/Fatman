import { gql } from 'apollo-server-express'

import subjectController from '../controllers/subjectController'

export const typeDefs = gql`
  extend type Query {
    subjectsAll: [Subject]
    subjectById(id: ID!): Subject
  }

  extend type Mutation {
    subjectCreate(data: subjectFields): Subject
  }

  input subjectFields {
    classroom: String!
    days: [Int!]!
    faults: Int!
    formation: String!
    hours: [String!]!
    name: String!
    parallel: String!
    scoreParcials: [Float!]!
    teacherEmail: String!
    teacherName: String!
  }

  type Schedule {
    day: Int!
    start: String!
    end: String!
  }

  type Subject {
    id: ID
    classroom: String!
    days: [Int!]!
    faults: Int!
    formation: String!
    hours: [String!]!
    name: String!
    parallel: String!
    scoreParcials: [Float!]!
    teacherEmail: String!
    teacherName: String!
    schedule: [Schedule!]!
  }
`

export const resolvers = {
  Query: {
    subjectsAll: () => subjectController.findAll(),
    subjectById: (_, { id }) => subjectController.findById(id)
  },
  Mutation: {
    subjectCreate: (_, { data }) => subjectController.create(data)
  }
}
