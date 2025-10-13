const PaymentConfirmation = require("../models/PaymentConfirmation.model");

async function getSchema() {
  return await PaymentConfirmation.findOne({ name: "PaymentConfirmation" });
}

async function saveSchema(json) {
  return await PaymentConfirmation.findOneAndUpdate(
    { name: "PaymentConfirmation" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await PaymentConfirmation.findOneAndUpdate(
    { name: "PaymentConfirmation" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await PaymentConfirmation.findOneAndDelete({ name: "PaymentConfirmation" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };