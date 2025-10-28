const CancelMeeting = require("../models/CancelMeeting.model");

async function getSchema() {
  return await CancelMeeting.findOne({ name: "CancelMeeting" });
}

async function saveSchema(json) {
  return await CancelMeeting.findOneAndUpdate(
    { name: "CancelMeeting" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await CancelMeeting.findOneAndUpdate(
    { name: "CancelMeeting" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await CancelMeeting.findOneAndDelete({ name: "CancelMeeting" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };