const db = require("../database/dbConfig");

module.exports = {
  register,
  findByID,
  addPrison,
  removePrison,
  updatePrison,
  prisonList,
  usersPrisons,
  addUserPrison,
  getPrisoners,
  addPrisoner,
  removePrisoner,
  updatePrisoner,
  getAllPrisons
};

async function register(user) {
  const [id] = await db("users").insert(user);

  return findByID(id, "users");
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

function getPrisoners(id) {
  return db("prisoners").where("prisoners.prison_id", "=", `${id}`);
}

function getAllPrisons() {
  return db("prisons");
}
