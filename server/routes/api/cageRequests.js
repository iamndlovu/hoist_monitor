const router = require("express").Router();

let requests = [9, 1];

router.route("/").get(async (req, res) => {
  res.json(requests);
});

router.route("/add").post((req, res) => {
  const { level } = req.body;
  if (requests.indexOf(Number(level)) < 0) {
    requests.push(Number(level));
    requests = requests.sort((a, b) => a < b);
  }
  res.json(requests);
});

router.route("/remove").post((req, res) => {
  const level = Number(req.body);
  const index = requests.indexOf(level);
  if (!index < 0) {
    requests.splice(index, 1);
  }
  res.json(requests);
});

router.route("/update").post((req, res) => {
  const { levels } = req.body;
  requests = JSON.parse(levels);
  res.json(requests);
});

module.exports = router;
