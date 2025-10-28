const CourseSessions = require("../models/CourseSessions.model");

async function getSchema() {
  return await CourseSessions.findOne({ name: "CourseSessions" });
}

async function saveSchema(json) {
  return await CourseSessions.findOneAndUpdate(
    { name: "CourseSessions" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await CourseSessions.findOneAndUpdate(
    { name: "CourseSessions" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await CourseSessions.findOneAndDelete({ name: "CourseSessions" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };