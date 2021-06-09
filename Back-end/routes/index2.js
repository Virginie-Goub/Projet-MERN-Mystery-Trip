var express = require("express");
var router = express.Router();
const index = require("../controllers/index");

router.post("/contact", index.contact);

module.exports = router;
