
exports.up = async function(knex) {
    await knex.schema
    .createTable('recipes', (table) => {
      table.increments('recipe_id')
      table.string('recipe_title', 128).unique().notNullable()
      table.string('created_date', 128).notNullable()
    })
    .createTable('ingredients', (table) => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 128).unique().notNullable()
    })
    .createTable('steps', (table) => {
        table.increments('step_id')
        table.string('instructions', 234).notNullable()
        table.integer('step_number')
            .unsigned()
            .notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipies')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE') // THIS NEVER HAPPENS
    })
    .createTable('step_ingredient', (table) => {
        table.increments('step_ingredient_id')
        table.string('amount', 234).notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipies')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE') // THIS NEVER HAPPENS
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE') // THIS NEVER HAPPENS
    })
};

exports.down = function(knex) {
  
};
