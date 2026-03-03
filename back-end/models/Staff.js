const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("Staff", StaffSchema);