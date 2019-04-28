const router = require('express').Router();
const Foods = require('./foodsModel');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, async (req, res) => {
  try {
    const allFoods = await Foods.getAll();
    res.status(200).json(allFoods);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

router.post('/', restricted, async (req, res) => {
    try {
      const newFood = req.body;
      const food = await Foods.insert(newFood);
      res.status(201).json({ newfood: food })
    } catch (err) {
      res.status(500).json({
        err: 'food could not be added.'
      })
    }
  })

module.exports = router;