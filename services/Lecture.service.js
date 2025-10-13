const Lecture = require("../models/Lecture.model");

async function getSchema() {
  return await Lecture.findOne({ name: "Lecture" });
}

async function saveSchema(json) {
  return await Lecture.findOneAndUpdate(
    { name: "Lecture" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await Lecture.findOneAndUpdate(
    { name: "Lecture" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await Lecture.findOneAndDelete({ name: "Lecture" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };