const PersonalDetails = require("../models/PersonalDetails.model");

async function getSchema() {
  return await PersonalDetails.findOne({ name: "PersonalDetails" });
}

async function saveSchema(json) {
  return await PersonalDetails.findOneAndUpdate(
    { name: "PersonalDetails" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await PersonalDetails.findOneAndUpdate(
    { name: "PersonalDetails" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await PersonalDetails.findOneAndDelete({ name: "PersonalDetails" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };