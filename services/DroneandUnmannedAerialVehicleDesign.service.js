const DroneandUnmannedAerialVehicleDesign = require("../models/DroneandUnmannedAerialVehicleDesign.model");

async function getSchema() {
  return await DroneandUnmannedAerialVehicleDesign.findOne({ name: "DroneandUnmannedAerialVehicleDesign" });
}

async function saveSchema(json) {
  return await DroneandUnmannedAerialVehicleDesign.findOneAndUpdate(
    { name: "DroneandUnmannedAerialVehicleDesign" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await DroneandUnmannedAerialVehicleDesign.findOneAndUpdate(
    { name: "DroneandUnmannedAerialVehicleDesign" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await DroneandUnmannedAerialVehicleDesign.findOneAndDelete({ name: "DroneandUnmannedAerialVehicleDesign" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };