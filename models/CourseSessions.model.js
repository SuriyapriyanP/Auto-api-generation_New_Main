const mongoose = require("mongoose");

const SchemaDef = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  json: { type: Object, required: true }
});

module.exports = mongoose.model("CourseSessions", SchemaDef);