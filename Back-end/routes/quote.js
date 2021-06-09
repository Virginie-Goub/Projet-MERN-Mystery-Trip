var express = require("express");
var router = express.Router();
var quoteCtrl = require("../controllers/quote.controller");

router.post("/quote", quoteCtrl.quote);

module.exports = router;
