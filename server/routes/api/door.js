const router = require("express").Router();

let door = "closed";

router.route("/").get(async (req, res) => {
  try {
    res.json(door);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/update").post((req, res) => {
  if (req.body.door) door = req.body.door;
});

module.exports = router;
