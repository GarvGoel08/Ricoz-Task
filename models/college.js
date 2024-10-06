const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Please provide an address"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
  },
);

module.exports = mongoose.model("College", collegeSchema);