const express = require('express');
const Recipe = require('./recipe-model.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      res.json('Succeeess!!!');
    } catch (err) {
      res.status(500).json({ message: 'Failed to get schemes' });
    }
  });


  module.exports = router;