const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }


  type Token{
    token: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }


  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
    loginUser(input: LoginInput): Token
  }
`;

module.exports = typeDefs;
