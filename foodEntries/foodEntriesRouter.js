const router = require('express').Router();
const FoodEntries = require('./foodEntriesModel');
const restricted = require('../auth/restricted-middleware');

// retrieve all food entries
router.get('/', restricted, async (req, res) => {
  try {
    const allFoodEntries = await FoodEntries.getAll();
    res.status(200).json(allFoodEntries);
  } catch (error) {
    res.status(500).json({error: 'error retrieving food entries', error});
  }
});

// add new food entries
router.post('/', restricted, async (req, res) => {
  try {
    const newEntry = req.body;
    const entry = await FoodEntries.insert(newEntry);
    res.status(201).json({
      newEntry: entry
    })
  } catch (err) {
    res.status(500).json({ err: 'food entry could not be added.', err })
  }
})

// retrieve all child's food entries
router.get('/:id', restricted, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const allFoodEntries = await FoodEntries.getByChild(id);
    res.status(200).json(allFoodEntries);
  } catch (error) {
    res.status(500).json({error: 'error retrieving food entries', error});
  }
});

module.exports = router;