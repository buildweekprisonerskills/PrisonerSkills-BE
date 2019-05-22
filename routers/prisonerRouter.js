const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("./users-model");

const router = express.Router();

const sendUserError = (status, message, res) => {
  res.status(status).json({ errorMessage: message });
  return;
};

router.get("/prisonRoute/prisoners/:id", async (req, res) => {
  const { id } = req.params;
  //   const id = req.headers.prison_id;
  const userID = req.decodedToken.subject;

  db.findByID(id, "prisons")
    .then(prison => {
      if (userID !== prison.username_id) {
        sendUserError(
          400,
          "You do not have the login to change that prison information",
          res
        );
        return;
      }

      db.getPrisoners(id)
        .then(info => {
          res.json(info);
        })
        .catch(err => {
          sendUserError(500, "This is the error", res);
        });
    })
    .catch(error => {
      sendUserError(500, "The prison information could not be found.", error);
      return;
    });
});

router.post("/prisonRoute/prisoners/:id", async (req, res) => {
  const { id } = req.params;
  const userID = req.decodedToken.subject;
  const { name, skills, description, prison_id } = req.body;

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

  db.findByID(id, "prisons")
    .then(prison => {
      if (userID !== prison.username_id) {
        sendUserError(
          400,
          "You do not have the login to change that prison information",
          res
        );
        return;
      }
      db.addPrisoner(prisoner)
        .then(done => {
          res.status(201).json(`The prison '${name}' has been added!`);
        })
        .catch(err => {
          sendUserError(500, err, res);
        });
    })
    .catch(error => {
      sendUserError(500, "The prison information could not be found.", error);
      return;
    });
});

router.get("/specificPrisoner/:id", (req, res) => {
  const { id } = req.params;
  db.findByID(id, "prisoners")
    .then(prisoner => {
      res.status(200).json(prisoner);
    })
    .catch(err => {
      sendUserError(
        404,
        "The prisoner's information could not be found.",
        error
      );
      return;
    });
});

router.delete("/specificPrisoner/:id", (req, res) => {
  const { id } = req.params;
  const userID = req.decodedToken.subject;

  db.findByID(id, "prisoners")
    .then(prisoner => {
      db.findByID(prisoner.prison_id, "prisons")
        .then(prison => {
          if (userID !== prison.username_id) {
            sendUserError(
              400,
              "You do not have the login to change that prisoner's information",
              res
            );
            return;
          }
          db.removePrisoner(id)
            .then(prisoner => {
              if (prisoner === 0) {
                sendUserError(
                  404,
                  '{ message: "The prisoner with the specified ID does not exist." }',
                  res
                );
                return;
              }
              res.json({
                success: `Prisoner with the id: ${id} has been removed`
              });
            })
            .catch(error => {
              sendUserError(
                500,
                '{ error: "The prisoner could not be removed" }',
                res
              );
              return;
            });
        })
        .catch(error => {
          sendUserError(
            500,
            "The prison's information could not be found.",
            error
          );
          return;
        });
    })
    .catch(error => {
      sendUserError(
        500,
        "Something went wrong on the First FindBy on the Prisoner. Is the URL correct?",
        error
      );
      return;
    });
});

router.put("/specificPrisoner/:id", (req, res) => {
  const userID = req.decodedToken.subject;
  const { id } = req.params;
  const { name, skills, description } = req.body;
  //   console.log(req);
  if (!name || !skills || !description) {
    sendUserError(
      400,
      '{ errorMessage: "Please provide prison_name and location for the prison." }',
      res
    );
    return;
  }

  db.findByID(id, "prisoners")
    .then(prisoner => {
      db.findByID(prisoner.prison_id, "prisons")
        .then(prison => {
          if (userID !== prison.username_id) {
            sendUserError(
              404,
              "You do not have the login to change that prisoner information",
              res
            );
            return;
          }

          db.updatePrisoner(id, { name, skills, description }).then(
            response => {
              if (response === 0) {
                sendUserError(
                  404,
                  "The prisoner with the specified ID does not exist.",
                  res
                );
                return;
              }
              db.findByID(id, "prisoners")
                .then(prisoner => {
                  if (prisoner.length === 0) {
                    sendUserError(404, "Prisoner with that id not found", res);
                    return;
                  }
                  res.status(201).json(prisoner);
                })
                .catch(error => {
                  sendUserError(
                    500,
                    "The prisoner information could not be modified.",
                    res
                  );
                  return;
                });
            }
          );
        })
        .catch(error => {
          sendUserError(
            500,
            "The prisoner information could not be found.",
            res
          );
          return;
        });
    })
    .catch(error => {
      sendUserError(
        500,
        "Something went wrong on the First FindBy on the Prisoner. Is the URL correct?",
        error
      );
      return;
    });
});

module.exports = router;
