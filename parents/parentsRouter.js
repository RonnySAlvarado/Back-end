const router = require('express').Router();
const Parents = require('./parentsModel');

router.get('/', async (req, res) => {
  try {
    const allParents = await Parents.getAll();
    res.status(200).json(allParents);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const parent = await Parents.getById(id);
    if (parent > 0){
      res.status(200).json(parent);
    } else {
      res.status(404).json({message: "parent with specified id not found"});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
});

router.post('/', async (req, res) => {
  try {
    const newParent = req.body;
    const parent = await Parents.insert(newParent);
    res.status(201).json({
      newParent: parent
    })
  } catch (err) {
    res.status(500).json({
      err: 'Parent could not be added.'
    })
  }
})

module.exports = router;