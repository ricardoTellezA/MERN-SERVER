const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");
const conectarDB = require("./config/DB");

require("dotenv").config({
  path: ".env",
});

conectarDB();

const serverApollor = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ token: req.headers.token }),
  context: ({ req }) => {
    // console.log(req.headers['authorization']);
    const token = req.headers["authorization"] || "";

    if (token) {
      try {
        const usuario = jwt.verify(
          token.replace("Bearer ", ""),
          process.env.SECRETO
        );

        return {
          usuario,
        };
      } catch (error) {
        console.log(error);
      }
    }
  },
});
serverApollor.listen().then(({ url  }) => {
  console.log(`🚀  Server ready at ${url}`);
});
