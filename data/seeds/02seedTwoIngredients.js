
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'Flour'},
        {id: 2, ingredient_name: 'Parsley'},
        {id: 3, ingredient_name: 'Chicken'},
        {id: 4, ingredient_name: 'Peperoni'},
        {id: 5, ingredient_name: 'Lovage'},
        {id: 6, ingredient_name: 'Bread'},
        {id: 7, ingredient_name: 'Pepper'},
        {id: 8, ingredient_name: 'Poteto'}
      ]);
    });
};
