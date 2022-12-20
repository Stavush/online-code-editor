const mongoose = require("mongoose");

const CodeblockSchema = new mongoose.Schema({
  title: String,
  code: String,
  wasEntered: Boolean,
  solution: String,
});

module.exports = mongoose.model("Codeblock", CodeblockSchema);
