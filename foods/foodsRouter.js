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

module.exports = router;