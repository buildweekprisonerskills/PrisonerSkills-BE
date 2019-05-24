exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisoners3")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        {
          id: 121,
          name: "Cherly Dambrosia",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 6
        },
        {
          id: 122,
          name: "Cathy Terranova",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 6
        },
        {
          id: 123,
          name: "Kirsten Pittard",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 6
        },
        {
          id: 124,
          name: "Conchita Vela",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 6
        },
        {
          id: 125,
          name: "Loralee Halliday",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 6
        },
        {
          id: 126,
          name: "Stephnie Lucht",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 6
        },
        {
          id: 127,
          name: "Akiko Mascia",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 128,
          name: "Kam Derose",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 129,
          name: "Norma Barter",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 130,
          name: "Rikki Montalvo",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 131,
          name: "Tonya Alpaugh",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 132,
          name: "Isidro Quesada",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 133,
          name: "Nancie Jett",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 134,
          name: "Marybeth Masden",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 135,
          name: "Eugene Roldan",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 136,
          name: "Laree Pergande",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 137,
          name: "Rivka Dews",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 138,
          name: "Marlon Walkup",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 139,
          name: "Britta Lippold",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 140,
          name: "Michaele Sacks",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 141,
          name: "Yesenia Diehm",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 142,
          name: "Roslyn Ziglar",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 143,
          name: "Clarinda Rostad",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 144,
          name: "Lyndon Laubach",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 145,
          name: "Calista Pawlik",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 146,
          name: "Keven Bickley",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 147,
          name: "Moon Gilpin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 148,
          name: "Mervin Hitchman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 149,
          name: "Derick Bright",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 150,
          name: "Lanie Mcshane",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 151,
          name: "Eda Gaynor",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 152,
          name: "Lashandra Bundy",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 153,
          name: "Simonne Yother",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 1
        },
        {
          id: 154,
          name: "Le Zeh",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 155,
          name: "Mayra Knittel",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 156,
          name: "Stella Kinchen",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 157,
          name: "Hermine Wenz",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 158,
          name: "Neil Whicker",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 159,
          name: "Dede Arras",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 160,
          name: "Ted Birdwell",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 161,
          name: "Britt Rodes",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 162,
          name: "Maurita Ledger",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 163,
          name: "Hye Galusha",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 164,
          name: "Blanca Gaertner",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 165,
          name: "Tia Eastin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 166,
          name: "Fabian Hazelton",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 167,
          name: "Toi Rodriquez",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 168,
          name: "Jennell Burriss",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 169,
          name: "Olive Edmonds",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 170,
          name: "Latosha Binder",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 171,
          name: "Camilla Kirkbride",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 172,
          name: "Grace Bailes",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 173,
          name: "Beryl Severns",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 174,
          name: "Rheba Alewine",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 175,
          name: "Domenica Oshields",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 176,
          name: "Celestina Serino",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 177,
          name: "Enda Deshields",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 178,
          name: "Maryam Pulice",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 179,
          name: "Ardath Antle",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 180,
          name: "Williams Soliman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 181,
          name: "Crystle Vandermeulen",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 182,
          name: "Sherri Barns",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 183,
          name: "Madonna Dutil",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 184,
          name: "Hortensia Duron",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 185,
          name: "Gilberte Brunkhorst",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 186,
          name: "Janna Wunsch",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 187,
          name: "Denyse Surette",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 2
        },
        {
          id: 188,
          name: "Melania Stults",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 189,
          name: "Chauncey Mass",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 190,
          name: "Sallie Naquin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 191,
          name: "Caitlyn Standish",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 192,
          name: "Laine Host",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 193,
          name: "Rebecca Hyler",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 194,
          name: "Hiram Thill",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 195,
          name: "Felica Dykeman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 196,
          name: "Minnie Schroyer",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 197,
          name: "Leola Coston",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 198,
          name: "Usha Randall",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 199,
          name: "Thomas Delahoussaye",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 200,
          name: "Vasiliki Tansey",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        }
      ]);
    });
};
