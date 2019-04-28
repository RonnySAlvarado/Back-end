const router = require('express').Router();
const Parents = require('./parentsModel');
const Children = require('../children/childrenModel');
const childrenRouter = require('../children/childrenRouter');

const restricted = require('../auth/restricted-middleware');

router.use('/:id/children', childrenRouter);
router.get('/',  async (req, res) => {
  try {
    const allParents = await Parents.getAll();
    res.status(200).json(allParents);
  } catch (error) {
    res.status(500).json({error: error});
  }
});

router.get('/:id', restricted, async (req, res) => {
  try {
    const { id } = req.params; 
    console.log('params', req.params)
    const parent = await Parents.getById(id);
    console.log('parent', parent)
    console.log('parent id', parent.id)
    if (parent.id > 0){
      res.status(200).json(parent);
    } else {
      res.status(404).json({message: "parent with specified id not found"});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
});

// router.post('/', async (req, res) => {
//   try {
//     const newParent = req.body;
//     const parent = await Parents.insert(newParent);
//     res.status(201).json({
//       newParent: parent
//     })
//   } catch (err) {
//     res.status(500).json({
//       err: 'Parent could not be added.'
//     })
//   }
// })

// // get all parent's children
// router.get('/:id/children', restricted, async (req, res) => {
//   try {
//     const { id } = req.params; 
//     const allChildren = await Children.getByParent(id);
//     res.status(200).json(allChildren);
//   } catch (error) {
//     res.status(500).json({error: error});
//   }
// });




module.exports = router;