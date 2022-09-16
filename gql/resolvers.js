const { createUser, loginUser, getUser } = require("../controllers/userControllers");
const { createHomeWork, getHomework, deleteHomeWork, changeStatus, updateHomework } = require("../controllers/homeWorkController");

const resolvers = {
  Query: {
    getUser: (_, { id }) => getUser(id),
    getHomework: (_, { id }) => getHomework(id),
  },
  Mutation: {
    createUser: (_, { input }) => createUser(input),
    loginUser: (_, { input }) => loginUser(input),
    createHomeWork: (_, { input }, ctx) => createHomeWork(input, ctx),
    deleteHomeWork: (_, { id }) => deleteHomeWork(id),
    changeStatus: (_, { input }) => changeStatus(input),
    updateHomework: (_, { input }) => updateHomework(input),
  },
};

module.exports = resolvers;
