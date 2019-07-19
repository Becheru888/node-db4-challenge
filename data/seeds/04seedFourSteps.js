
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_number: 1, step: "Add Flour!"},
        {id: 2, recipe_id: 1, step_number: 2, step: "Add Chicken!"},
        {id: 3, recipe_id: 1, step_number: 3, step: "Add Peperoni!"},
        {id: 4, recipe_id: 2, step_number: 1, step: "Boil Poteto"},
        {id: 5, recipe_id: 2, step_number: 2, step: "Cook Chicken"},
        {id: 6, recipe_id: 2, step_number: 3, step: "Add Sauce"},
        {id: 7, recipe_id: 3, step_number: 1, step: "Prep Bread"},
        {id: 8, recipe_id: 3, step_number: 2, step: "Add Pepper"},
        {id: 9, recipe_id: 3, step_number: 3, step: "Melt the lot."},
        {id: 10, recipe_id: 4, step_number: 1, step: "Add Butter"},
        {id: 11, recipe_id: 4, step_number: 2, step: "Add Bread"},
        {id: 12, recipe_id: 4, step_number: 3, step: "Enjoy!"}
      ]);
    });
};
