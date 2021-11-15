var express = require("express");
var router = express.Router();
const { requireLogin } = require("../middleware/requireLogin");

/* GET home page. */
router.get("/", requireLogin, (req, res) => {
  console.log(req.url);
  res.end();
});

module.exports = router;
