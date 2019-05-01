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

// retrieve single food entry by id
router.get('/:id', restricted, async (req, res) => {
  try {
    const { id } = req.params;
    const foodEntries = await FoodEntries.getById(id);
    res.status(200).json(foodEntries);
  } catch (error) {
    res.status(500).json({error: 'error retrieving food entry', error});
  }
});

// delete specified food entry
router.delete('/:id', restricted, async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await FoodEntries.removeEntry(id);
    if (entry > 0) {
      res.status(204).json({message: 'entry deleted'});
    } else {
      res.status(404).json({message: 'Food entry with specified ID does not exist.'});
    }
  } catch (error) {
    res.status(500).json({ error: "The food entry could not be removed", error })
  }
})

// edit food entry
router.put('/:id', restricted, async (req, res) => {
  try {
    const {id} = req.params;
    const entry = req.body;
    const edited = await FoodEntries.editEntry(id, entry)
    if (entry.id && entry.childId && entry.foodId && entry.date) {
      res.status(200).json({edited})
    } else {
      res.status(404).json({message: "id, childId, foodId, and date required"})
    }
  } catch (error) {
    res.status(500).json({error: 'unable to edit food entry', error})
  }
})
module.exports = router;