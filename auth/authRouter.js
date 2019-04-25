const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Parents = require('../parents/parentsModel');
const jwtSecret  = process.env.JWT_SECRET;



router.post('/register', async (req, res) => {
  const parent = req.body;
  const hash = bcrypt.hashSync(parent.password, 10);
  console.log(hash)
  parent.password = hash;
  console.log(parent.password)
  Parents.insert(parent)
  try {
    const token = await generateToken(parent);
    console.log(token)
    res.status(201).json({message: `Welcome!`, token});
  } catch (err) {
    res.status(500).json({error: err})
  }

})

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;    
    const parent = await Parents.getAll().where({ username }).first();
    console.log(parent, bcrypt.compareSync(password, parent.password))
    console.log(password === parent.password)
    if (parent && bcrypt.compareSync(password, parent.password)) {
      const token = generateToken(parent);
      res.status(200).json({message: `Welcome back, ${parent.username}! Have a token`, token})
    } else {
      res.status(401).json({ message: 'username/password not valid'})
    }
  } catch (err) {
    res.status(500).json({error: err})
  }

})

function generateToken(parent) {
  const payload = {
    subject: parent.id,
    username: parent.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;