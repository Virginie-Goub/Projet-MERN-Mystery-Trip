const mongoose = require("mongoose");

/**
 * Schema questionnaire
 */
const QuoteSchema = new mongoose.Schema({
  /* Formule */
  formule: String, //

  /* Date de départ */
  start: Date,

  /* Date de retour */
  end: Date,

  /* Type de voyage */
  typeTravel: String, //

  /* Nombre de participants */
  adult: Number,

  childrens: Number,

  /* Budget*/

  budget: Number,

  /*Aeroport de depart*/

  aeroport: String, //

  /*Choix themes*/

  nature: String,
  decouverte: String,
  culture: String,
  sport: String,
  shopping: String,
  gastronomie: String,
  farniente: String,
  fiesta: String,

  /* Choix logement */

  logement: String, //

  /* Choix temperature */

  temperature: String, //
});

/**
 * Schema utilisateur
 */

module.exports = mongoose.model("quote", QuoteSchema);
