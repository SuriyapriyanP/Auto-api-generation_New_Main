const Addtocartlist = require("../models/Addtocartlist.model");

async function getSchema() {
  return await Addtocartlist.findOne({ name: "Addtocartlist" });
}

async function saveSchema(json) {
  return await Addtocartlist.findOneAndUpdate(
    { name: "Addtocartlist" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await Addtocartlist.findOneAndUpdate(
    { name: "Addtocartlist" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await Addtocartlist.findOneAndDelete({ name: "Addtocartlist" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };