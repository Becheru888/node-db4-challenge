exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.text('recipe_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('ingredients', table => {
            table.increments()
            table.text('ingredient_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('quantities', table => {
            table.increments();
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('quantity')
                .notNullable()
                .unsigned()
        })
        .createTable('steps', table => {
            table.increments();
            table.integer('step_number')
                .unsigned()
                .notNullable();
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.text('step')
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('quantities')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};