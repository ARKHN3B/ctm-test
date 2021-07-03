var express = require("express");
const GoodController = require("../controllers/GoodController");

var router = express.Router();

router.post("/", GoodController.goodStore);

module.exports = router;
