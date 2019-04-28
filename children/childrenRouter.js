const router = require('express').Router();
const Children = require('./childrenModel');
const restricted = require('../auth/restricted-middleware');
// const FoodEntriesRouter = require('../foodEntries/foodEntriesRouter');
const FoodEntries = require('../foodEntries/foodEntriesModel');


//get all associated parent's children
router.get('/', restricted, async (req, res) => {
  try {
    console.log(req.params)
    const allChildren = await Children.getAll();
    res.status(200).json(allChildren);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

// add new children
router.post('/', restricted, async (req, res) => {
  try {
    const newChild = req.body;
    const child = await Children.insert(newChild);
    res.status(201).json({
      newChild: child
    })
  } catch (err) {
    res.status(500).json({
      err: 'Child could not be added.'
    })
  }
});

// get children by id
router.get('/:id', restricted, async (req, res) => {
  try {
    // console.log(req.params)
    const { id } = req.params; 
    const allChildren = await Children.getByParent(id);
    res.status(200).json(allChildren);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

// // retrieve all child's food entries
// router.get('/:id/entries', restricted, async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id)
//     const allFoodEntries = await FoodEntries.getByChild(id);
//     res.status(200).json(allFoodEntries);
//   } catch (error) {
//     res.status(500).json({error: 'error retrieving food entries', error});
//   }
// });




module.exports = router;