exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisoners6")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        
        {
          id: 361,
          name: "Kasie Ronald",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 362,
          name: "Perry Sandifer",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 363,
          name: "Thea Batten",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 364,
          name: "Adriene Abram",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 365,
          name: "Santina Maravilla",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 366,
          name: "Alisia Marmon",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 367,
          name: "Xiomara Reeb",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 368,
          name: "Dusti Pressman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 369,
          name: "Nathalie Puchalski",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 370,
          name: "Irving Piano",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 371,
          name: "Cordie Bernard",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 372,
          name: "Catrice Near",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 373,
          name: "Veda Pittman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 374,
          name: "Margeret Pusey",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 375,
          name: "Janell Ash",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 376,
          name: "Ilona Schultz",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 19
        },
        {
          id: 377,
          name: "Leah Townley",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 3
        },
        {
          id: 378,
          name: "Kathey Banton",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 379,
          name: "Mervin Tippins",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 380,
          name: "Ardith Sugrue",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 381,
          name: "Shirly Helbig",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 382,
          name: "Berneice Enloe",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 383,
          name: "Earlene Pfister",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 384,
          name: "Lilliana Biehl",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 385,
          name: "Eleni Stogner",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 386,
          name: "Audrea Boman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 387,
          name: "Renda Cabaniss",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 388,
          name: "Krystyna Faria",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 20
        },
        {
          id: 389,
          name: "Lezlie Eger",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 390,
          name: "Jack Cybart",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 391,
          name: "Kirsten Ottesen",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 392,
          name: "Alexis Chambers",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 393,
          name: "Eliza Winston",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 394,
          name: "Tonita Santillo",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 395,
          name: "Dorian Chapdelaine",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 396,
          name: "Kiesha Senior",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 397,
          name: "Darline Dicks",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 21
        },
        {
          id: 398,
          name: "Malissa Boser",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 22
        },
        {
          id: 399,
          name: "Bruce Breton",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 22
        },
        {
          id: 401,
          name: "Austin Padgett",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 23
        },
        {
          id: 402,
          name: "Jessenia Freyer",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 24
        },
        {
          id: 403,
          name: "Artie Salomone",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 25
        },
        {
          id: 404,
          name: "Denver Barrick",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 26
        },
        {
          id: 405,
          name: "Tari Gladstone",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 27
        },
        {
          id: 406,
          name: "Allen Justiniano",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 28
        },
        {
          id: 407,
          name: "Miss Golightly",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 29
        },
        {
          id: 408,
          name: "Harley Sgro",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 30
        }
      ]);
    });
};
