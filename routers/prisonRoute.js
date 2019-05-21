const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./users-model");

const router = express.Router();

const sendUserError = (status, message, res) => {
  res.status(status).json({ errorMessage: message });
  return;
};

router.get("/prisonRoute/", async (req, res) => {
  const id = req.headers.username;
  console.log(id);

  db.usersPrisons(id)
    .then(info => {
      res.json(info);
    })
    .catch(err => {
      sendUserError(500, "This is the error", res);
    });

  // db.usersPrisons(id)
  // .then(info => {
  //   for (let i = 0; i < info.length; i++) {
  //     db.getPrisoners(info[i].id)
  //       .then(prisonerInfo => {
  //         res.json({ info, prisonerInfo });
  //       })
  //       .catch(err => {
  //         sendUserError(500, "That is not a prison", res);
  //       });
  //   }
  // })
  // .catch(err => {
  //   sendUserError(500, "This is the error", res);
  // });
});

router.post("/prisonRoute/", async (req, res) => {
  const id = req.headers.username;

  const { prison_name, location, username_id } = req.body;

  console.log({ username_id });
  if (!prison_name) {
    sendUserError(400, "Please provide a name your prison", res);
    return;
  }

  if (!location) {
    sendUserError(400, "Please provide a location for the prison", res);
    return;
  }

  if (!username_id) {
    sendUserError(400, "Please make sure you are logged in", res);
    return;
  }
  const prison = { prison_name, location, username_id };

  db.addUserPrison(prison)
    .then(done => {
      res.status(201).json(`The prison '${prison_name}' has been added!`);
    })
    .catch(err => {
      sendUserError(500, "This is the error", res);
    });
});

module.exports = router;
