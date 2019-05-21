const db = require("../database/dbConfig");

module.exports = {
  register,
  find,
  findBy,
  findByID,
  addPrison,
  prisonList,
  usersPrisons,
  addUserPrison,
  getPrisoners,
  addPrisoner,
  getAllPrisons
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

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

function getPrisoners(id) {
  return db("prisoners").where("prisoners.prison_id", "=", `${id}`);
}

function getAllPrisons() {
  return db("prisons");
}
