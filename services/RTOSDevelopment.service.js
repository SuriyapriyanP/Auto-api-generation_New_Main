const RTOSDevelopment = require("../models/RTOSDevelopment.model");

async function getSchema() {
  return await RTOSDevelopment.findOne({ name: "RTOSDevelopment" });
}

async function saveSchema(json) {
  return await RTOSDevelopment.findOneAndUpdate(
    { name: "RTOSDevelopment" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await RTOSDevelopment.findOneAndUpdate(
    { name: "RTOSDevelopment" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await RTOSDevelopment.findOneAndDelete({ name: "RTOSDevelopment" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };