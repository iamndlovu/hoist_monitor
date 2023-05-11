const router = require("express").Router();

let distance = 70;

router.route("/").get(async (req, res) => {
  try {
    res.json(distance);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/update").post((req, res) => {
  if (req.body.distance) distance = Number(req.body.distance);
});

module.exports = router;
