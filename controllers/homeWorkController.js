const HomeWork = require("../models/HomeWork");

async function createHomeWork(input, ctx) {
  console.log(input);
  const newHomeWork = new HomeWork(input);
  newHomeWork.idUser = input.idUser;
  const result = await newHomeWork.save();
  return result;
}

async function getHomework(id) {
  const result = await HomeWork.find({ idUser: id });

  return result;
}

async function deleteHomeWork(id) {
  const result = await HomeWork.findByIdAndDelete(id);

  if (!result) return false;

  return true;
}

async function changeStatus(input) {
  const homeWork = await HomeWork.findById(input.id);
  homeWork.status = input.status;
  console.log(homeWork);
  const result = await homeWork.save();
  return result;
}


async function updateHomework(input) {
  const result = await HomeWork.findByIdAndUpdate(input.id, input);
  await result.save();
  return result;

}

module.exports = {
  createHomeWork,
  getHomework,
  deleteHomeWork,
  changeStatus,
  updateHomework,
};
