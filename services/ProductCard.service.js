const ProductCard = require("../models/ProductCard.model");

async function getSchema() {
  return await ProductCard.findOne({ name: "ProductCard" });
}

async function saveSchema(json) {
  return await ProductCard.findOneAndUpdate(
    { name: "ProductCard" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await ProductCard.findOneAndUpdate(
    { name: "ProductCard" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await ProductCard.findOneAndDelete({ name: "ProductCard" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };