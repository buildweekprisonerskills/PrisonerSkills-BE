const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./users-model");

const router = express.Router();

const sendUserError = (status, message, res) => {
  res.status(status).json({ errorMessage: message });
  return;
};

router.get("/allPrisonsRoute/", async (req, res) => {
  db.getAllPrisons()
    .then(info => {
      res.json(info);
    })
    .catch(err => {
      sendUserError(500, "Error on getting ALL prisons", res);
    });
});

router.get("/allPrisonsRoute/prisoners/", async (req, res) => {
  db.getPrisoners()
    .then(info => {
      res.json(info);
    })
    .catch(err => {
      sendUserError(500, "Error on getting ALL prisoners", res);
    });
});

router.get("/allPrisonsRoute/prisoners/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);

  db.getPrisoners(id)
    .then(info => {
      res.json(info);
    })
    .catch(err => {
      sendUserError(500, "Error on getting ALL prisoners", res);
    });
});

module.exports = router;
