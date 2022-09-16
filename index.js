const moongose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const express = require("express");
const resolvers = require("./gql/resolvers");
const cors = require("cors");
require("dotenv").config({
  path: ".env",
});
const app = express();

// CONFIGURE CORS
//  corsOptions = {
//   origin: "https://limitless-crag-81698.herokuapp.com/",
//   optionsSuccessStatus: 200,
  
//  };
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
    // context: ({req}) => {
    //   console.log(req.headers);
    // }
  });

  serverApollor.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);

    // CORS
  });
}

// USAR CORS
