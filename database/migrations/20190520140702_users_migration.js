exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", users => {
      users.increments();

      users
        .string("username", 128)
        .notNullable()
        .unique();

      users.string("password", 128).notNullable();
    })
    .createTable("prisons", prison => {
      // the tracks table must be created before this table is created
      prison.increments();

      prison
        .string("prison_name", 128)
        .notNullable()
        .unique();

      prison.string("location", 128).notNullable();

      prison
        .integer("username_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("prisoners", prisoners => {
      // the tracks table must be created before this table is created
      prisoners.increments();

      prisoners
        .string("name", 128)
        .notNullable()
        .unique();

      prisoners.string("skills", 256).notNullable();

      prisoners.string("description", 1000).notNullable();

      prisoners
        .integer("prison_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("prisons")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("prisoners")
    .dropTableIfExists("prisons")
    .dropTableIfExists("users");
};
