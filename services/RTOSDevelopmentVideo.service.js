const RTOSDevelopmentVideo = require("../models/RTOSDevelopmentVideo.model");

async function getSchema() {
  return await RTOSDevelopmentVideo.findOne({ name: "RTOSDevelopmentVideo" });
}

async function saveSchema(json) {
  return await RTOSDevelopmentVideo.findOneAndUpdate(
    { name: "RTOSDevelopmentVideo" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await RTOSDevelopmentVideo.findOneAndUpdate(
    { name: "RTOSDevelopmentVideo" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await RTOSDevelopmentVideo.findOneAndDelete({ name: "RTOSDevelopmentVideo" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };