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
const whiteList = [
  "https://limitless-crag-81698.herokuapp.com/",
  "http://localhost:4000/",
];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whiteList.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};
app.use(cors(corsOptions));
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

    // CORS
  });
}

// USAR CORS
