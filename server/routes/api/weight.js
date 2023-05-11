const router = require("express").Router();

let weight = 700;

router.route("/").get(async (req, res) => {
  try {
    res.json(weight);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/update").post((req, res) => {
  if (req.body.weight) weight = Number(req.body.weight);
});

module.exports = router;
