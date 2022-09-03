const moongose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");
require("dotenv").config({
  path: ".env",
});

moongose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  },
  (err, _) => {
    if (err) {
      console.log(err);
    } else {
      server();
    }
  }
);

function server() {
  const serverApollor = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollor.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}
