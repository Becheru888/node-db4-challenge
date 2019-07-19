const db = require('../dbConfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesbyIngredient

}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipes')
        .select('ingredients.ingredient_name', 'quantities.quantity')
        .join('quantities', 'recipes.id', 'quantities.recipe_id')
        .join('ingredients', 'quantities.ingredient_id', 'ingredients.id')
        .where({ 'recipes.id': id });
}

function getInstructions(id) {
    return db('recipes')
        .select('steps.step_number', 'steps.step')
        .join('steps', 'recipes.id', 'steps.recipe_id')
        .where({ 'recipes.id': id })
        .orderBy('steps.step_number', 'asc');
}

function getRecipesbyIngredient(id) {
    return db('ingredients')
        .select('recipe_name')
        .join('quantities', 'ingredients.id', 'quantities.ingredient_id')
        .join('recipes', 'quantities.recipe_id', 'recipes.id')
        .where({ 'ingredients.id': id})
}