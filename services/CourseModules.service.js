const CourseModules = require("../models/CourseModules.model");

async function getSchema() {
  return await CourseModules.findOne({ name: "CourseModules" });
}

async function saveSchema(json) {
  return await CourseModules.findOneAndUpdate(
    { name: "CourseModules" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await CourseModules.findOneAndUpdate(
    { name: "CourseModules" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await CourseModules.findOneAndDelete({ name: "CourseModules" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };