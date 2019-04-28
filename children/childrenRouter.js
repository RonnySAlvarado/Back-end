const router = require('express').Router();
const Children = require('./childrenModel');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, async (req, res) => {
  try {
    const allChildren = await Children.getAll();
    res.status(200).json(allChildren);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

module.exports = router;