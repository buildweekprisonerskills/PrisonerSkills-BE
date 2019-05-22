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
  // const id = req.headers.username;
  const id = req.decodedToken.subject;

  console.log("this is getting called accidentally");

  db.usersPrisons(id)
    .then(info => {
      res.json(info);
    })
    .catch(err => {
      sendUserError(500, "This is the error", res);
    });
});

router.post("/prisonRoute/", async (req, res) => {
  // const id = req.headers.username;
  const userID = req.decodedToken.subject;

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

  if (username_id !== userID) {
    sendUserError(
      400,
      "You do not have the correct creds to make a prison for that user.",
      res
    );
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

router.delete("/prisonRoute/:id", (req, res) => {
  const userID = req.decodedToken.subject;
  const { id } = req.params;

  db.findByID(id, "prisons")
    .then(prison => {
      if (userID !== prison.username_id) {
        sendUserError(
          404,
          "You do not have the login to change that prison information",
          res
        );
        return;
      }

      db.removePrison(id)
        .then(deletedPrison => {
          if (deletedPrison === 0) {
            sendUserError(
              404,
              '{ message: "The prison with the specified ID does not exist." }',
              res
            );
            return;
          }
          res.json({ success: `Prison with the id: ${id} has been removed` });
        })
        .catch(error => {
          sendUserError(500, "The prison could not be removed", res);
          return;
        });
    })
    .catch(error => {
      sendUserError(500, "The prison information could not be found.", res);
      return;
    });
});

router.put("/prisonRoute/:id", (req, res) => {
  const userID = req.decodedToken.subject;
  const { id } = req.params;
  const { prison_name, location } = req.body;
  //   console.log(req);
  if (!prison_name || !location) {
    sendUserError(
      400,
      '{ errorMessage: "Please provide prison_name and location for the prison." }',
      res
    );
    return;
  }

  db.findByID(id, "prisons")
    .then(prison => {
      if (userID !== prison.username_id) {
        sendUserError(
          404,
          "You do not have the login to change that prison information",
          res
        );
        return;
      }

      db.updatePrison(id, { prison_name, location }).then(response => {
        if (response === 0) {
          sendUserError(
            404,
            "The prison with the specified ID does not exist.",
            res
          );
          return;
        }
        db.findByID(id, "prisons")
          .then(prison => {
            if (prison.length === 0) {
              sendUserError(404, "Prison with that id not found", res);
              return;
            }
            res.status(201).json(prison);
          })
          .catch(error => {
            sendUserError(
              500,
              "The prison information could not be modified.",
              res
            );
            return;
          });
      });
    })
    .catch(error => {
      sendUserError(500, "The prison information could not be found.", res);
      return;
    });
});

module.exports = router;
