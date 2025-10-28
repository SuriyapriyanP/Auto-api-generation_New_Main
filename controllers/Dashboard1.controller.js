const service = require("../services/Dashboard1.service");

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