const fs = require("fs");
const path = require("path");

function generateFiles(schemaInput) {
  let name, json;

  if (schemaInput && schemaInput.json) {
    ({ name, json } = schemaInput);
  } else if (typeof schemaInput === "object") {
    json = schemaInput;
    if (json.title && typeof json.title === "string") {
      name = json.title.replace(/\s+/g, "");
    }
  }

  if (!json || typeof json !== "object") {
    throw new Error("❌ 'json' must be a valid object.");
  }

  if (!name) {
    throw new Error("❌ 'name' missing or 'json.title' not found.");
  }

  const className = name;
  const fileBase = name;
  const sanitizedClassName = className.replace(/[^a-zA-Z0-9_$]/g, "");

  // Create folders if missing
  ["models", "services", "controllers"].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  });

  // ---------------- Model ----------------
  const modelCode = `
const mongoose = require("mongoose");

const SchemaDef = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  json: { type: Object, required: true }
});

module.exports = mongoose.model("${className}", SchemaDef);
`;
  fs.writeFileSync(path.join("models", `${fileBase}.model.js`), modelCode.trim());

  // ---------------- Service ----------------
  const serviceCode = `
const ${sanitizedClassName} = require("../models/${fileBase}.model");

async function getSchema() {
  return await ${sanitizedClassName}.findOne({ name: "${className}" });
}

async function saveSchema(json) {
  return await ${sanitizedClassName}.findOneAndUpdate(
    { name: "${className}" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await ${sanitizedClassName}.findOneAndUpdate(
    { name: "${className}" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await ${sanitizedClassName}.findOneAndDelete({ name: "${className}" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };
`;
  fs.writeFileSync(path.join("services", `${fileBase}.service.js`), serviceCode.trim());

  // ---------------- Controller ----------------
  const controllerCode = `
const service = require("../services/${fileBase}.service");

async function getSchema(req, res) {
  try {
    const schema = await service.getSchema();
    if (!schema) return res.status(404).json({ error: "Schema not found" });
    res.json(schema.json);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function saveSchema(req, res) {
  try {
    const result = await service.saveSchema(req.body);
    res.json({ message: "Schema saved", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateSchema(req, res) {
  try {
    const result = await service.updateSchema(req.body);
    if (!result) return res.status(404).json({ error: "Schema not found" });
    res.json({ message: "Schema updated", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteSchema(req, res) {
  try {
    const result = await service.deleteSchema();
    if (!result) return res.status(404).json({ error: "Schema not found" });
    res.json({ message: "Schema deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };
`;
  fs.writeFileSync(path.join("controllers", `${fileBase}.controller.js`), controllerCode.trim());

  console.log(`✅ '${className}' schema files generated successfully!`);
}

module.exports = { generateFiles };
