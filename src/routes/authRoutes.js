const express = require("express");

const router = express.Router();

router.post("/signup", async (req, res) => {
  res.send("You made a post request");
});

module.exports = router;
