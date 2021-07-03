var express = require("express");
const GoodController = require("../controllers/GoodController");

var router = express.Router();

router.get("/all", GoodController.goodList);
router.post("/update", GoodController.goodStore);

module.exports = router;
