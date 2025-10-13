const EmbeddedSystemsandFirmwareCourses = require("../models/EmbeddedSystemsandFirmwareCourses.model");

async function getSchema() {
  return await EmbeddedSystemsandFirmwareCourses.findOne({ name: "EmbeddedSystemsandFirmwareCourses" });
}

async function saveSchema(json) {
  return await EmbeddedSystemsandFirmwareCourses.findOneAndUpdate(
    { name: "EmbeddedSystemsandFirmwareCourses" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await EmbeddedSystemsandFirmwareCourses.findOneAndUpdate(
    { name: "EmbeddedSystemsandFirmwareCourses" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await EmbeddedSystemsandFirmwareCourses.findOneAndDelete({ name: "EmbeddedSystemsandFirmwareCourses" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };