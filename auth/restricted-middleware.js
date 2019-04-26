const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token){
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err){
        res.status(401).json({ err: 'User not verified 1' })
      } else {
        req.decodedJwt = decodedToken; // saves token to req in case we need it later down the pipeline
        next();
      }
    })
  } else {
    res.status(401).json({ err: 'User not verified 2' })
  }
}