const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Token {
    token: String
  }

  type Homework {
    id: ID!
    description: String!
    title: String!
    status: Boolean!
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

  input HomeWorkInput {
    idUser: ID!
    title: String!
    description: String!
    status: Boolean!
  }

  input HomeWorkUpdateInput {
    id: ID!
    title: String!
    description: String!
    status: Boolean
  }

  input StatusInput {
    id: ID!
    status: Boolean!
  }

  type Query {
    getUser(id: ID!): User
    getHomework(id: ID!): [Homework]
  }

  type Mutation {
    createUser(input: UserInput): User
    loginUser(input: LoginInput): Token
    createHomeWork(input: HomeWorkInput): Homework
    deleteHomeWork(id: ID!): Boolean
    changeStatus(input: StatusInput): Homework
    updateHomework(input: HomeWorkUpdateInput): Homework
  }
`;

module.exports = typeDefs;
