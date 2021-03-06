const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./users-model");

const secrets = require("../config/secrets");

const router = express.Router();

const sendUserError = (status, message, res) => {
  res.status(status).json({ errorMessage: message });
  return;
};

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      const userID = user.id;
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          userID,
          token
        });
      } else {
        sendUserError(401, "Invalid Credentials.", res);
      }
    })
    .catch(error => {
      sendUserError(500, "This is the error", res);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
