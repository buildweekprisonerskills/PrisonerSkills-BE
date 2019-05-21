exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "test1", password: "pass" },
        { id: 2, username: "test2", password: "pass" },
        { id: 3, username: "test3", password: "pass" }
      ]);
    });
};