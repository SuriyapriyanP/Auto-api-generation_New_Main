const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ---------------- MongoDB connection ----------------
mongoose.connect(
  "mongodb+srv://innoidedb:AgDq9Bsmd8GxZ2Oh@cluster0.h4svcud.mongodb.net/AutoGernaters?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected successfully.");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// ---------------- Import generator ----------------
const generator = require("./generator.js");

// ---------------- API to generate new schema ----------------
app.post("/api/generate", async (req, res) => {
  try {
    const schemaInput = req.body;
    let name = schemaInput.name;
    let json = schemaInput.json || schemaInput;

    if (!name && json.title) name = json.title.replace(/\s+/g, "");

    if (!name || typeof json !== "object") {
      return res.status(400).json({
        error:
          "Invalid schema input. Provide { name, json } OR schema with a title.",
      });
    }

    // Generate service, model, controller dynamically
    generator.generateFiles({ name, json });

    // Save schema in DB
    const service = require(`./services/${name}.service.js`);
    await service.saveSchema(json);

    res.json({ message: `✅ API for '${name}' generated successfully.` });
  } catch (err) {
    console.error("❌ Error generating schema:", err);
    res.status(500).json({ error: err.message });
  }
});

// ---------------- Universal schema endpoint ----------------
app.all("/api/schema", async (req, res) => {
  try {
    const name = req.query.name;
    if (!name)
      return res.status(400).json({ error: "Missing ?name= parameter." });

    const servicePath = path.join(__dirname, "services", `${name}.service.js`);

    if (!fs.existsSync(servicePath)) {
      return res.status(404).json({ error: `No schema found for '${name}'.` });
    }

    // Always reload the latest version
    delete require.cache[require.resolve(servicePath)];
    const service = require(servicePath);

    switch (req.method) {
      case "GET": {
        const schema = await service.getSchema();
        return schema
          ? res.json(schema.json)
          : res.status(404).json({ error: "Schema not found" });
      }

      case "POST": {
        const result = await service.saveSchema(req.body);
        return res.json({ message: "Schema saved", data: result });
      }

      case "PUT": {
        const result = await service.updateSchema(req.body);
        return result
          ? res.json({ message: "Schema updated", data: result })
          : res.status(404).json({ error: "Schema not found" });
      }

      case "DELETE": {
        const result = await service.deleteSchema();
        return result
          ? res.json({ message: "Schema deleted" })
          : res.status(404).json({ error: "Schema not found" });
      }

      default:
        return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error("❌ Error in /api/schemas:", err);
    res.status(500).json({ error: err.message });
  }
});

// ---------------- Start Server ----------------
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
