const IoTFirmwareDevelopment = require("../models/IoTFirmwareDevelopment.model");

async function getSchema() {
  return await IoTFirmwareDevelopment.findOne({ name: "IoTFirmwareDevelopment" });
}

async function saveSchema(json) {
  return await IoTFirmwareDevelopment.findOneAndUpdate(
    { name: "IoTFirmwareDevelopment" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await IoTFirmwareDevelopment.findOneAndUpdate(
    { name: "IoTFirmwareDevelopment" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await IoTFirmwareDevelopment.findOneAndDelete({ name: "IoTFirmwareDevelopment" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };