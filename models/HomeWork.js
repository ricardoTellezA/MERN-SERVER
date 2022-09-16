const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeWorkSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: Boolean,
    default: false,
    
  }
});

module.exports = mongoose.model("HomeWork", HomeWorkSchema);
