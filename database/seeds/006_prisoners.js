exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisoners4")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        
        {
          id: 201,
          name: "Renay Rance",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 202,
          name: "Erna Osornio",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 203,
          name: "Cecile Gangemi",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 204,
          name: "Nancy Huisman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 205,
          name: "Amiee Hite",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 206,
          name: "Zachary Skyles",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 207,
          name: "Jen Broe",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 208,
          name: "Ted Arn",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 209,
          name: "Coreen Clarke",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 210,
          name: "Jeramy Mennenga",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 211,
          name: "Alexander Carberry",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 212,
          name: "Tanner Rabe",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 213,
          name: "Tobi Marshell",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 214,
          name: "Danial Eichhorn",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 215,
          name: "Brant Recalde",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 216,
          name: "Regan Mcmorrow",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 7
        },
        {
          id: 217,
          name: "Neal Montemayor",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 218,
          name: "Lesha Reif",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 219,
          name: "Damien Boxx",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 220,
          name: "Niesha Radcliff",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 221,
          name: "Lucinda Mateer",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 222,
          name: "Muoi Nowicki",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 223,
          name: "Derek Braaten",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 224,
          name: "Tesha Schluter",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 225,
          name: "Apolonia Pullen",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 226,
          name: "Maisha Emmons",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 227,
          name: "Siobhan Finkelstein",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 228,
          name: "Melinda Truss",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 229,
          name: "Zane Bonin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 230,
          name: "Chiquita Kuehn",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 231,
          name: "Floyd Carrel",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 232,
          name: "Tu Ungar",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 233,
          name: "Glennis Mackowiak",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 234,
          name: "Eduardo Saban",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 235,
          name: "Miss Junkins",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 236,
          name: "Cathie Stumpf",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 8
        },
        {
          id: 237,
          name: "Jessika Swartz",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 238,
          name: "Cyril Loeffler",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 239,
          name: "Josefine Boor",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 240,
          name: "Marilee Titsworth",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 241,
          name: "Ozell Drayton",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 242,
          name: "Patrica Deshotel",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 243,
          name: "Danille Mizrahi",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 244,
          name: "Sumiko Cardella",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 245,
          name: "Fatima Luker",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 246,
          name: "Alesia Smullen",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 247,
          name: "Allie Current",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 248,
          name: "Onie Spells",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 249,
          name: "Nubia Lizotte",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 250,
          name: "Lilla Lackey",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 251,
          name: "Donette Picone",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 9
        },
        {
          id: 252,
          name: "Candelaria Teter",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 253,
          name: "Alexia Delaughter",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 254,
          name: "Christiane Richard",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 255,
          name: "Darcey Swayne",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 256,
          name: "Anisa Papineau",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 257,
          name: "Sanjuanita Valente",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 258,
          name: "Vincent Marmon",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 259,
          name: "Jutta Tice",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 260,
          name: "Kenneth Johnosn",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 261,
          name: "Marline Marinez",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 262,
          name: "Brigitte Dilullo",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 263,
          name: "Rosalba Hunte",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 264,
          name: "Toni Capozzoli",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 265,
          name: "Lorette Heflin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 266,
          name: "Meghan Dossey",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 267,
          name: "Tiffani Tatro",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 268,
          name: "Alfred Cothran",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 269,
          name: "Elbert Hebert",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 270,
          name: "Michelina Delatorre",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 271,
          name: "Wendolyn Garden",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 10
        },
        {
          id: 272,
          name: "Stephen Melgoza",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 273,
          name: "Jaquelyn Dunfee",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 274,
          name: "Delicia Burger",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 275,
          name: "Maryland Nieman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 276,
          name: "Marylyn Dane",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 277,
          name: "Maude Mars",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 278,
          name: "Cleo Feddersen",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 279,
          name: "Lucila Bey",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 280,
          name: "Karly Padron",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        }
      ]);
    });
};
