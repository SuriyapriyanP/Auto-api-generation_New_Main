const LIVESESSION = require("../models/LIVESESSION.model");

async function getSchema() {
  return await LIVESESSION.findOne({ name: "LIVESESSION" });
}

async function saveSchema(json) {
  return await LIVESESSION.findOneAndUpdate(
    { name: "LIVESESSION" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await LIVESESSION.findOneAndUpdate(
    { name: "LIVESESSION" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await LIVESESSION.findOneAndDelete({ name: "LIVESESSION" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };