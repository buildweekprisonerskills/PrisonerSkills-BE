exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "test1", password: "pass" },
        { id: 2, username: "test2", password: "pass" },
        { id: 3, username: "test3", password: "pass" },
        { id: 4, username: "test4", password: "pass" },
        { id: 5, username: "test5", password: "pass" },
        { id: 6, username: "test6", password: "pass" },
        { id: 7, username: "test7", password: "pass" },
        { id: 8, username: "test8", password: "pass" },
        { id: 9, username: "test9", password: "pass" },
        { id: 10, username: "test10", password: "pass" },
        { id: 11, username: "test11", password: "pass" },
        { id: 12, username: "test12", password: "pass" },
        { id: 13, username: "test13", password: "pass" },
        { id: 14, username: "test14", password: "pass" },
        { id: 15, username: "test15", password: "pass" },
        { id: 16, username: "test16", password: "pass" },
        { id: 17, username: "test17", password: "pass" },
        { id: 18, username: "test18", password: "pass" },
        { id: 19, username: "test19", password: "pass" },
        { id: 20, username: "test20", password: "pass" },
        { id: 21, username: "test21", password: "pass" },
        { id: 22, username: "test22", password: "pass" },
        { id: 23, username: "test23", password: "pass" },
        { id: 24, username: "test24", password: "pass" },
        { id: 25, username: "test25", password: "pass" },
        { id: 26, username: "test26", password: "pass" },
        { id: 27, username: "test27", password: "pass" },
        { id: 28, username: "test28", password: "pass" },
        { id: 29, username: "test29", password: "pass" },
        { id: 30, username: "test30", password: "pass" }
      ]);
    });
};
