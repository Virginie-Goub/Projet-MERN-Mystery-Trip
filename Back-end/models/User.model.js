const mongoose = require("mongoose");

/**
 * Schema utilisateur
 */

const UserSchema = new mongoose.Schema({
  lastname: { type: String },
  firstname: { type: String },
  email: {
    type: String,
  },

  password: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
