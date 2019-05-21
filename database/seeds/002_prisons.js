exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisons")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisons").insert([
        {
          id: 1,
          prison_name: "USP Florence",
          location: "Fremont County, Colorado",
          username_id: 1
        },
        {
          id: 2,
          prison_name: "Jackson County Holding",
          location: "Jackson County, Mississippi",
          username_id: 1
        },
        {
          id: 3,
          prison_name: "Seattle Penitentiary",
          location: "King County, Seattle",
          username_id: 2
        }
      ]);
    });
};
