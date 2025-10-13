const PayInvoiceUpi = require("../models/PayInvoiceUpi.model");

async function getSchema() {
  return await PayInvoiceUpi.findOne({ name: "PayInvoiceUpi" });
}

async function saveSchema(json) {
  return await PayInvoiceUpi.findOneAndUpdate(
    { name: "PayInvoiceUpi" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await PayInvoiceUpi.findOneAndUpdate(
    { name: "PayInvoiceUpi" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await PayInvoiceUpi.findOneAndDelete({ name: "PayInvoiceUpi" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };