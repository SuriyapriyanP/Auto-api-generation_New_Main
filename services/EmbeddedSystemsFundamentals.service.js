const EmbeddedSystemsFundamentals = require("../models/EmbeddedSystemsFundamentals.model");

async function getSchema() {
  return await EmbeddedSystemsFundamentals.findOne({ name: "EmbeddedSystemsFundamentals" });
}

async function saveSchema(json) {
  return await EmbeddedSystemsFundamentals.findOneAndUpdate(
    { name: "EmbeddedSystemsFundamentals" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await EmbeddedSystemsFundamentals.findOneAndUpdate(
    { name: "EmbeddedSystemsFundamentals" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await EmbeddedSystemsFundamentals.findOneAndDelete({ name: "EmbeddedSystemsFundamentals" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };