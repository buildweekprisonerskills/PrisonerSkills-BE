const db = require("../database/dbConfig");

module.exports = {
  register,
  findBy,
  findByID,
  addPrison,
  removePrison,
  updatePrison,
  prisonList,
  usersPrisons,
  usersPrisonsWithPrisoners,
  addUserPrison,
  getPrisoners,
  getPrisonersByID,
  addPrisoner,
  removePrisoner,
  updatePrisoner,
  getAllPrisons,
  usersPrisonsWithListPrisoners,
  appendingPrisonersToPrisons
};

async function register(user) {
  const [id] = await db("users").insert(user);

  return findByID(id, "users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findByID(id, table) {
  return db(table)
    .where({ id })
    .first();
}

async function addPrison(prison) {
  const [id] = await db("prisons").insert(prison);

  return findByID(id, "prisons");
}

function removePrison(id) {
  return db("prisons")
    .where("id", id)
    .del();
}

function updatePrison(id, changes) {
  return db("prisons")
    .where({ id })
    .update(changes);
}

function prisonList() {
  return db("prisons as p")
    .join("prisoners as pr", "p.id", "pr.prison_id")
    .count("prisoners.id as total")
    .select("p.id", "p.prison_name as name", "p.location", "total");
}

function usersPrisons(id) {
  return db("prisons").where("prisons.username_id", "=", `${id}`);
}

function usersPrisonsWithPrisoners(id) {
  return db("prisons")
    .join("prisoners", "prisons.id", "=", "prisoners.prison_id")
    .where("prisons.username_id", "=", `${id}`);
}

function usersPrisonsWithListPrisoners(id) {
  return db("prisons")
    .where({ id })
    .then(prison => {
      if (prison.length) {
        db("prisoners")
          .where("prisons.username_id", "=", "prisoners.prison_id")
          .then(prisoners => {
            res.status(200).json({ prison, prisoners });
          })
          .catch(error => {
            res.status(500).json(error);
          });
      }
    })
    .catch(error => {
      res.status(500).json("error on the first part");
    });
}

async function addUserPrison(prisonInfo) {
  const [id] = await db("prisons").insert(prisonInfo);

  return findByID(id, "prisons");
}

async function addPrisoner(prisonerInfo) {
  const [id] = await db("prisoners").insert(prisonerInfo);

  return findByID(id, "prisoners");
}

function removePrisoner(id) {
  return db("prisoners")
    .where("id", id)
    .del();
}

function updatePrisoner(id, changes) {
  return db("prisoners")
    .where({ id })
    .update(changes);
}

function getPrisoners() {
  return db("prisoners");
}

function getPrisonersByID(id) {
  return db("prisoners").where("prisoners.prison_id", "=", `${id}`);
}

function getAllPrisons() {
  return db("prisons");
}

function appendingPrisonersToPrisons(prisons) {
  prisons.forEach(() => {
    if (prisons.length) {
      db("prisoners")
        .where("prisoners.prison_id", "=", "prison.id")
        .then(prisoners => {
          // console.log(prisoners);
          res.status(200).json({ ...prisons, prisoners: prisoners });
        })
        .catch(error => {
          // console.log(error);
          res.status(500).json("error");
        });
    }
  });
}
