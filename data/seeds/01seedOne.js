
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Pizza'},
        {id: 2, recipe_name: 'Soup'},
        {id: 3, recipe_name: 'Pear & Blue Cheese Pizza'},
        {id: 4, recipe_name: 'Sandwich'},
      ]);
    });
};
