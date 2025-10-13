const LoadingScreen = require("../models/LoadingScreen.model");

async function getSchema() {
  return await LoadingScreen.findOne({ name: "LoadingScreen" });
}

async function saveSchema(json) {
  return await LoadingScreen.findOneAndUpdate(
    { name: "LoadingScreen" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await LoadingScreen.findOneAndUpdate(
    { name: "LoadingScreen" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await LoadingScreen.findOneAndDelete({ name: "LoadingScreen" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };