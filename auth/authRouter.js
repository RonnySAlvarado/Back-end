const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../data/dbConfig.js');
const Parents = require('../parents/parentsModel');

const jwtSecret = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
  let parent = req.body;
  // console.log(parent)
  const hash = bcrypt.hashSync(parent.password, 10);
  parent.password = hash;
  try {
    const [id] = await Parents.insert(parent);
    const token = await generateToken(parent);
    res.status(201).json({id, token});
  } catch (err) {
    res.status(500).json({error: 'unable to add new user', err})
  }
})

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;    
    const parent = await Parents.getAll().where({ username }).first();
    // console.log(parent, bcrypt.compareSync(password, parent.password))
    // console.log(password === parent.password)
    if (parent && bcrypt.compareSync(password, parent.password)) {
      const token = generateToken(parent);
      const {id, username} = parent;
      res.status(200).json({message: `Welcome back, ${parent.username}! Have a token`, id, username, token})
    } else {
      res.status(401).json({ message: 'username/password not valid'})
    }
  } catch (err) {
    res.status(500).json({error: err})
  }

})

function generateToken(parent) {
  // console.log('generateToken parent', parent)
  const payload = {
    // subject: parent.id,
    username: parent.username
  }

  const options = {
    expiresIn: '1d'
  }
  // console.log('payload', payload, 'options', options)
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;