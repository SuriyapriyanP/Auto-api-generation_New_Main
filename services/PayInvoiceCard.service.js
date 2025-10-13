const PayInvoiceCard = require("../models/PayInvoiceCard.model");

async function getSchema() {
  return await PayInvoiceCard.findOne({ name: "PayInvoiceCard" });
}

async function saveSchema(json) {
  return await PayInvoiceCard.findOneAndUpdate(
    { name: "PayInvoiceCard" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await PayInvoiceCard.findOneAndUpdate(
    { name: "PayInvoiceCard" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await PayInvoiceCard.findOneAndDelete({ name: "PayInvoiceCard" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };