const { createUser, loginUser } = require("../controllers/userControllers");

const resolvers = {
  Query: {
    getUser: (_, { id }) => {
      console.log("Hola");
      return null;
    },
  },

  Mutation: {
    createUser: (_, { input }) => createUser(input),
    loginUser: (_, { input }) => loginUser(input),
  },
};

module.exports = resolvers;
