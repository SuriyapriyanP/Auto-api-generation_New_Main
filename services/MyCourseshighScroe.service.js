const MyCourseshighScroe = require("../models/MyCourseshighScroe.model");

async function getSchema() {
  return await MyCourseshighScroe.findOne({ name: "MyCourseshighScroe" });
}

async function saveSchema(json) {
  return await MyCourseshighScroe.findOneAndUpdate(
    { name: "MyCourseshighScroe" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await MyCourseshighScroe.findOneAndUpdate(
    { name: "MyCourseshighScroe" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await MyCourseshighScroe.findOneAndDelete({ name: "MyCourseshighScroe" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };