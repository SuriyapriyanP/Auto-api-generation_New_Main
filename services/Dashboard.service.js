const Dashboard = require("../models/Dashboard.model");

async function getSchema() {
  return await Dashboard.findOne({ name: "Dashboard" });
}

async function saveSchema(json) {
  return await Dashboard.findOneAndUpdate(
    { name: "Dashboard" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await Dashboard.findOneAndUpdate(
    { name: "Dashboard" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await Dashboard.findOneAndDelete({ name: "Dashboard" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };