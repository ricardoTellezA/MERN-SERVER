const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");
const conectarDB = require("./config/db");
require("dotenv").config({
  path: ".env",
});

conectarDB();

const serverApollor = new ApolloServer({
  typeDefs,
  resolvers,
});

serverApollor.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
