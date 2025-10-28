const MyCoursesschedule = require("../models/MyCoursesschedule.model");

async function getSchema() {
  return await MyCoursesschedule.findOne({ name: "MyCoursesschedule" });
}

async function saveSchema(json) {
  return await MyCoursesschedule.findOneAndUpdate(
    { name: "MyCoursesschedule" },
    { json },
    { upsert: true, new: true }
  );
}

async function updateSchema(json) {
  return await MyCoursesschedule.findOneAndUpdate(
    { name: "MyCoursesschedule" },
    { json },
    { new: true }
  );
}

async function deleteSchema() {
  return await MyCoursesschedule.findOneAndDelete({ name: "MyCoursesschedule" });
}

module.exports = { getSchema, saveSchema, updateSchema, deleteSchema };