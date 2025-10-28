const Dashboard1 = require("../models/Dashboard1.model");

async function getSchema() {
  return await Dashboard1.findOne({ name: "Dashboard1" });
}

async function saveSchema(json) {
  return await Dashboard1.findOneAndUpdate(
    { name: "Dashboard1" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await Dashboard1.findOneAndUpdate(
    { name: "Dashboard1" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await Dashboard1.findOneAndDelete({ name: "Dashboard1" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };