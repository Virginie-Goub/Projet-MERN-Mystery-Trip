const fs = require("fs");
const Contact = require("../models/Contact.model");

const index = {
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
          title: "Formulaire de contact non envoyé",
          subtitle:
            "Une erreur s'est produite, réessayez d'envoyer votre message",
        });
        return;
      }
    });
    res.json({
      title: "Formulaire de contact envoyé",
      subtitle: "Merci pour votre message",
    });
  },
};

module.exports = index;
