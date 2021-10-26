var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/index", (req, res) => {
  console.log(req.url);
  res.end()
});

module.exports = router;