const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./users-model");

const router = express.Router();

const sendUserError = (status, message, res) => {
  res.status(status).json({ errorMessage: message });
  return;
};

router.get("/prisonerRoute/", async (req, res) => {
  const id = req.headers.prison_id;
  console.log(id);

  db.getPrisoners(id)
    .then(info => {
      res.json(info);
    })
    .catch(err => {
      sendUserError(500, "This is the error", res);
    });
});

router.post("/prisonerRoute/", async (req, res) => {
  const { name, skills, description, prison_id } = req.body;

  console.log({ prison_id });
  if (!name) {
    sendUserError(400, "Please provide a name for the prisoner", res);
    return;
  }

  if (!skills) {
    sendUserError(400, "Please provide a list of skills for the prisoner", res);
    return;
  }

  if (!prison_id) {
    sendUserError(
      400,
      "Please make sure the prisoner is attached to a prison",
      res
    );
    return;
  }
  const prisoner = { name, skills, description, prison_id };

  db.addPrisoner(prisoner)
    .then(done => {
      res.status(201).json(`The prison '${name}' has been added!`);
    })
    .catch(err => {
      sendUserError(500, "This is the error", res);
    });
});

module.exports = router;
