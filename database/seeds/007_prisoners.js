exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("prisoners5")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("prisoners").insert([
        
        {
          id: 281,
          name: "Adrianne Buttars",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 282,
          name: "Evelina Mill",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 283,
          name: "Fritz Sargeant",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 284,
          name: "Milissa Calender",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 285,
          name: "Donetta Trentham",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 286,
          name: "Jess Spriggs",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 11
        },
        {
          id: 287,
          name: "Therese Johnston",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 288,
          name: "Britni Olds",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 289,
          name: "Leanna Fimbres",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 290,
          name: "Parker Urbina",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 291,
          name: "Cythia Gilreath",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 292,
          name: "Sandra Sasson",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 293,
          name: "Neida Sapienza",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 294,
          name: "Carmelia Pontbriand",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 295,
          name: "Patria Lindstrom",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 296,
          name: "Wanda Stellmacher",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 297,
          name: "Beatrice Beckert",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 298,
          name: "Shae Segars",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 299,
          name: "Kristen Crofoot",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 12
        },
        {
          id: 300,
          name: "Hosea Uhlig",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 301,
          name: "Sabina Kemble",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 302,
          name: "Cletus Castilla",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 303,
          name: "Roderick Tackett",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 304,
          name: "Chanda Mariani",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 305,
          name: "Darci Kearley",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 306,
          name: "Sherilyn Abelson",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 307,
          name: "Marlo Skinner",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 308,
          name: "Kandice Musson",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 309,
          name: "Chanda Hasson",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 310,
          name: "Trang Pickard",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 311,
          name: "Laurette Hibdon",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 13
        },
        {
          id: 312,
          name: "Lakiesha Marling",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 313,
          name: "Jonna Eisert",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 314,
          name: "Usha Griffie",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 315,
          name: "Daniell Munch",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 316,
          name: "Lurline Eichenlaub",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 317,
          name: "Angelena Isham",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 318,
          name: "Mitsue Cabrales",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 319,
          name: "Wilfredo Bierce",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 320,
          name: "Jacinda Fielden",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 321,
          name: "Lemuel Box",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 322,
          name: "Haley Diggins",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 14
        },
        {
          id: 323,
          name: "Graham Nord",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 324,
          name: "Garnet Millikan",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 325,
          name: "Eli Stanislawski",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 326,
          name: "Kassandra Zartman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 327,
          name: "Ruthe Cosenza",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 328,
          name: "Alisia Santistevan",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 329,
          name: "Gaynell Driggers",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 330,
          name: "Tanisha Byron",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 331,
          name: "Loyce Kopecky",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 332,
          name: "Jenee Guerrier",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 333,
          name: "Ingeborg Jost",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 334,
          name: "Ellen Marcos",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 15
        },
        {
          id: 335,
          name: "Suzann Joe",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 336,
          name: "Li Woolverton",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 337,
          name: "Deana Bonn",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 338,
          name: "Elvera Flournoy",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 339,
          name: "Celeste Twist",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 340,
          name: "Isidra Laseter",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 341,
          name: "Isreal Pack",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 342,
          name: "Sharilyn Mullin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 343,
          name: "Maia Near",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 344,
          name: "Domenic Tingle",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 345,
          name: "Pierre Pecinovsky",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 346,
          name: "Soon Praylow",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 347,
          name: "Janey Oehler",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 16
        },
        {
          id: 348,
          name: "Delpha Bressler",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 349,
          name: "Kieth Bjork",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 350,
          name: "Lannie Mess",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 351,
          name: "Samatha Reading",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 352,
          name: "Molly Stamand",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 353,
          name: "Esta Riva",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 354,
          name: "Charissa Ponton",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 355,
          name: "Brittni Honda",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 356,
          name: "Shona Roesler",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 17
        },
        {
          id: 357,
          name: "Ralph Saville",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 358,
          name: "Josue Sellars",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 359,
          name: "Hilda Weedman",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        },
        {
          id: 360,
          name: "Ray Tobin",
          skills: "Leather Working, Cooking, Machinery Operation",
          description:
            "Dedicated worker, worked in steel mill for 15 years, highly intelligent, easy to get along with.",
          prison_id: 18
        }
      ]);
    });
};
