exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisoners")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        {
          id: 1,
          name: "Zacharias Griffith",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 2,
          name: "Lizzie Pruitt",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 3,
          name: "Marius Beard",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 4,
          name: "Zaki Carpenter",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 3
        },
        {
          id: 5,
          name: "Tonicha Needham",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 3
        }
      ]);
    });
};
