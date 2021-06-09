const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  email: String,

  message: String,
  date: {
    type: Date,
    default: Date.now, //Valeur par defaut , la date lors de la sauvegarde
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
