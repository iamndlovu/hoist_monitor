const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../../models/User.model");
const saltRounds = 10;

router.route("/").get(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) res.json(user);
      else {
        res.status(400).json("Error: user not found");
      }
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const { username, email, password, level } = req.body;

  const user = {
    username,
    email,
    level,
    password,
  };

  const newUser = new User(user);
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.bio = req.body.bio || user.bio;
      user
        .save()
        .then(() => res.json("User updated"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
