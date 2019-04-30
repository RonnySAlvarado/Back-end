const router = require('express').Router();
const Children = require('./childrenModel');
const restricted = require('../auth/restricted-middleware');
// const FoodEntriesRouter = require('../foodEntries/foodEntriesRouter');
const FoodEntries = require('../foodEntries/foodEntriesModel');

// get all children
router.get('/', restricted, async (req, res) => {
  try {
    const children = await Children.getAll();
    res.status(200).json(children)
  } catch (error) {
    res.status(500).json({error: "error retrieving list", error})
  }
})

// get children by id
router.get('/:id', restricted, async (req, res) => {
  try {
    const { id } = req.params; 
    // const child = await Children.getFoodEntries(id);
    const child = await Children.getById(id);
    res.status(200).json(child);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

// get child's food entries
router.get('/:id/entries', restricted, async (req, res) => {
  try {
    const { id } = req.params;
    const foodEntries = await Children.getFoodEntries(id);
    res.status(200).json(foodEntries)
  } catch (error) {
    res.status(500).json({error: "error retrieving food entries", error})
  }
})



module.exports = router;