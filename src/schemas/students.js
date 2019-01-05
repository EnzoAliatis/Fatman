
import { gql } from 'apollo-server-express'

import studentController from '../controllers/studentController'
import subjectController from '../controllers/subjectController'

export const typeDefs = gql`
  extend type Query {
    studentsAll: [Student!]!
    studentById(id: ID!): Student
    studentByCedulaPass(cedula: String!, password: String!): Student
  }

  extend type Mutation {
    studentCreate(data: studentFields): Student
  }

  input studentFields {
    career: String!
    cedula: String!
    email: String!
    faculty: String!
    fullName: String!
    itinerary: String!
    level: String!
    password: String!
    phone: String!
    registrationNumber: String!
    typeStudent: String!
    vPaid: Float!
    vGenered: Float!
    subjects: [ID!]!
  }

  type Student {
    id: ID
    career: String!
    cedula: String!
    email: String!
    faculty: String!
    fullName: String!
    itinerary: String!
    level: String!
    password: String!
    phone: String!
    registrationNumber: String!
    typeStudent: String!
    vPaid: Float!
    vGenered: Float!
    subjects: [Subject]
  }

`
export const resolvers = {
  Query: {
    studentsAll: () => studentController.findAll(),
    studentById: (_, { id }) => studentController.findById(id),
    studentByCedulaPass: (_, { cedula, password }) => studentController.findByCedulaPass(cedula, password)
  },
  Mutation: {
    studentCreate: (_, { data }) => studentController.create(data)
  },
  Student: {
    subjects: ({ subjects }) => subjectController.findAllById(subjects)
  }
}
