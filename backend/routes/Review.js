const express = require("express");
const router = express.Router();

const { reviewcreate } = require("../controllers/reviewcreate");

router.post("/addreview", reviewcreate);

module.exports = router;
