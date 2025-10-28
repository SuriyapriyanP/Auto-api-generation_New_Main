const MyCourseshighScroeInterview = require("../models/MyCourseshighScroeInterview.model");

async function getSchema() {
  return await MyCourseshighScroeInterview.findOne({ name: "MyCourseshighScroeInterview" });
}

async function saveSchema(json) {
  return await MyCourseshighScroeInterview.findOneAndUpdate(
    { name: "MyCourseshighScroeInterview" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await MyCourseshighScroeInterview.findOneAndUpdate(
    { name: "MyCourseshighScroeInterview" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await MyCourseshighScroeInterview.findOneAndDelete({ name: "MyCourseshighScroeInterview" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };