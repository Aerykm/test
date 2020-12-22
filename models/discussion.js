const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
  topic: { type: String, required: true },
  name: { type: String, required: true },
  discussion: String,
  date: { type: Date, default: Date.now }
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
