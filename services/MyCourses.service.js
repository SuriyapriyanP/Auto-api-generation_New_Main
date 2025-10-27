const MyCourses = require("../models/MyCourses.model");

async function getSchema() {
  return await MyCourses.findOne({ name: "MyCourses" });
}

async function saveSchema(json) {
  return await MyCourses.findOneAndUpdate(
    { name: "MyCourses" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await MyCourses.findOneAndUpdate(
    { name: "MyCourses" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await MyCourses.findOneAndDelete({ name: "MyCourses" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };