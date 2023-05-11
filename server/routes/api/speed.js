const router = require("express").Router();

let speed = 2.16;

router.route("/").get(async (req, res) => {
  try {
    res.json(speed);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/update").post((req, res) => {
  if (req.body.speed) speed = Number(req.body.speed);
});

module.exports = router;
