const Quote = require("../models/Quote.model");

/*Questionnaire*/
exports.quote = async (req, res) => {
  const quoteTravel = new Quote({
    formule: req.body.formule,
    start: req.body.start,
    end: req.body.end,
    typeTravel: req.body.typeTravel,
    adult: req.body.adult,
    childrens: req.body.childrens,
    budget: req.body.budget,
    aeroport: req.body.aeroport,
    nature: req.body.nature,
    decouverte: req.body.decouverte,
    culture: req.body.culture,
    sport: req.body.sport,
    shopping: req.body.shopping,
    gastronomie: req.body.gastronomie,
    farniente: req.body.farniente,
    fiesta: req.body.fiesta,
    logement: req.body.logement,
    temperature: req.body.temperature,
  });
  console.log(req.body);

  quoteTravel.save((err, doc) => {
    if (err) {
      res.status(501).json({ message: "erreur envoi du questionnaire" });
    } else {
      console.log(doc);
      res.json({ message: "New Quote!", travellerId: doc._id }); // Vérifier si il faut laiseer l'id
    }
  });
};

/*const index = {
    contact: function (req, res, next) {
      const nouveauContact = new Contact({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        message: req.body.message,
      });
  
      nouveauContact.save((err) => {
        if (err) {
          res.json({
            message: "erreur envoi formulaire",
          });
          return;
        }
      });
      res.json({
        message: "formulaire envoyé",
      });
    },
  };
  
  module.exports = index;*/
