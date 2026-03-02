const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regNo: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
}, { _id: false });

const TeamSchema = new mongoose.Schema({

  teamName: { type: String, required: true },

  leader: {
    type: memberSchema,
    required: true
  },

  members: {
    type: [memberSchema],
    validate: {
      validator: function (v) {
        return v.length >= 1 && v.length <= 4;
      },
      message: "Team must have 1 to 4 members"
    }
  },

  department: { type: String, required: true },
  year: { type: String, required: true },

  domain: String,
  problemTitle: String,

  abstract: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["Pending", "Selected", "Rejected"],
    default: "Pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Team", TeamSchema);