const IoTFirmwareDevelopmentVideo = require("../models/IoTFirmwareDevelopmentVideo.model");

async function getSchema() {
  return await IoTFirmwareDevelopmentVideo.findOne({ name: "IoTFirmwareDevelopmentVideo" });
}

async function saveSchema(json) {
  return await IoTFirmwareDevelopmentVideo.findOneAndUpdate(
    { name: "IoTFirmwareDevelopmentVideo" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await IoTFirmwareDevelopmentVideo.findOneAndUpdate(
    { name: "IoTFirmwareDevelopmentVideo" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await IoTFirmwareDevelopmentVideo.findOneAndDelete({ name: "IoTFirmwareDevelopmentVideo" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };