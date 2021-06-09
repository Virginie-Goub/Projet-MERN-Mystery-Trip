var express = require("express");
var router = express.Router();
var userCtrl = require("../controllers/user.controller");
/* GET users listing. */
//router.get("/", userCtrl.signup);
router.post("/signUp", userCtrl.signUp);
router.post("/connexion", userCtrl.connexion);

module.exports = router;
