const PaymentDetails = require("../models/PaymentDetails.model");

async function getSchema() {
  return await PaymentDetails.findOne({ name: "PaymentDetails" });
}

async function saveSchema(json) {
  return await PaymentDetails.findOneAndUpdate(
    { name: "PaymentDetails" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await PaymentDetails.findOneAndUpdate(
    { name: "PaymentDetails" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await PaymentDetails.findOneAndDelete({ name: "PaymentDetails" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };