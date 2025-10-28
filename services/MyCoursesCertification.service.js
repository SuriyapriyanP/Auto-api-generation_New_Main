const MyCoursesCertification = require("../models/MyCoursesCertification.model");

async function getSchema() {
  return await MyCoursesCertification.findOne({ name: "MyCoursesCertification" });
}

async function saveSchema(json) {
  return await MyCoursesCertification.findOneAndUpdate(
    { name: "MyCoursesCertification" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await MyCoursesCertification.findOneAndUpdate(
    { name: "MyCoursesCertification" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await MyCoursesCertification.findOneAndDelete({ name: "MyCoursesCertification" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };