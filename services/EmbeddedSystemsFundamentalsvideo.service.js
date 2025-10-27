const EmbeddedSystemsFundamentalsvideo = require("../models/EmbeddedSystemsFundamentalsvideo.model");

async function getSchema() {
  return await EmbeddedSystemsFundamentalsvideo.findOne({ name: "EmbeddedSystemsFundamentalsvideo" });
}

async function saveSchema(json) {
  return await EmbeddedSystemsFundamentalsvideo.findOneAndUpdate(
    { name: "EmbeddedSystemsFundamentalsvideo" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await EmbeddedSystemsFundamentalsvideo.findOneAndUpdate(
    { name: "EmbeddedSystemsFundamentalsvideo" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await EmbeddedSystemsFundamentalsvideo.findOneAndDelete({ name: "EmbeddedSystemsFundamentalsvideo" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };