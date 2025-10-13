const PayInvoice = require("../models/PayInvoice.model");

async function getSchema() {
  return await PayInvoice.findOne({ name: "PayInvoice" });
}

async function saveSchema(json) {
  return await PayInvoice.findOneAndUpdate(
    { name: "PayInvoice" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await PayInvoice.findOneAndUpdate(
    { name: "PayInvoice" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await PayInvoice.findOneAndDelete({ name: "PayInvoice" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };