var express = require("express");
var router = express.Router();

router.get("/users", (req, res) => {
  console.log(req.url);
  res.end();
});

module.exports = router;
