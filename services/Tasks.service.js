const Tasks = require("../models/Tasks.model");

async function getSchema() {
  return await Tasks.findOne({ name: "Tasks" });
}

async function saveSchema(json) {
  return await Tasks.findOneAndUpdate(
    { name: "Tasks" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await Tasks.findOneAndUpdate(
    { name: "Tasks" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await Tasks.findOneAndDelete({ name: "Tasks" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };