const IntroductiontoGenerativeAI = require("../models/IntroductiontoGenerativeAI.model");

async function getSchema() {
  return await IntroductiontoGenerativeAI.findOne({ name: "IntroductiontoGenerativeAI" });
}

async function saveSchema(json) {
  return await IntroductiontoGenerativeAI.findOneAndUpdate(
    { name: "IntroductiontoGenerativeAI" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await IntroductiontoGenerativeAI.findOneAndUpdate(
    { name: "IntroductiontoGenerativeAI" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await IntroductiontoGenerativeAI.findOneAndDelete({ name: "IntroductiontoGenerativeAI" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };