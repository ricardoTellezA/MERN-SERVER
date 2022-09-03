const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function createToeken(user, SECRET_KEY) {
  const { id, name, email } = user;
  const payload = {
    id,
    name,
    email,
  };
  return jwt.sign(payload, SECRET_KEY);
}

async function createUser(input) {
  input.name = input.name.toLowerCase();
  input.email = input.email.toLowerCase();
  input.password = input.password.toLowerCase();

  const user = await User.findOne({ email: input.email });

  if (user) throw new Error("User already exists");
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(input.password, salt);
  input.password = hash;

  try {
    const newUser = new User(input);
    newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(input) {
  input.email = input.email.toLowerCase();
  input.password = input.password.toLowerCase();

  const user = await User.findOne({ email: input.email });

  if (!user) throw new Error("User does not exist");
  // compare password
  const passwordCorrect = await bcrypt.compare(input.password, user.password);

  if (!passwordCorrect) throw new Error("Password is incorrect");
  return {
    token: createToeken(user, process.env.SECRET_KEY),
  };
}

module.exports = {
  createUser,
  loginUser,
};
