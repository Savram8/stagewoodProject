const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    fName: String!
    lName: String!
    createdAt: String!
  }
  input RegisterInput {
    fName: String!
    lName: String!
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;