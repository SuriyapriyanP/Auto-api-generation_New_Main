const MeetingStatus = require("../models/MeetingStatus.model");

async function getSchema() {
  return await MeetingStatus.findOne({ name: "MeetingStatus" });
}

async function saveSchema(json) {
  return await MeetingStatus.findOneAndUpdate(
    { name: "MeetingStatus" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await MeetingStatus.findOneAndUpdate(
    { name: "MeetingStatus" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await MeetingStatus.findOneAndDelete({ name: "MeetingStatus" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };