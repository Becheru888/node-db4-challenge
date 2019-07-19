const express = require('express');
const Recipe = require('./recipe-model.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const recipes = await Recipe.getRecipes()
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  });


  router.get('/recipes/:id/shoppinglist', (req, res) => {
    const { id } = req.params;
    Recipe.getShoppingList(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ error: "There was error fetching recipes." })
        })
})

router.get('/recipes/:id/instructions', (req, res) => {
  const { id } = req.params;
  Recipe.getInstructions(id)
      .then(data => {
          res.status(200).json(data)
      })
      .catch(err => {
          res.status(500).json({ error: "There was error fetching recipes." })
      })
})

router.get('/ingredients/:id/recipes', (req, res) => {
  const { id } = req.params;
  Recipe.getRecipesbyIngredient(id)
      .then(data => {
          res.status(200).json(data);
      })
      .catch(err => {
          res.status(500).json({err: "Could not retrieve data."})
      })
})



  module.exports = router;