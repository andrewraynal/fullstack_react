module.exports = (req, res, next) => {
  // next = callback to pass the req onto next middleware in chain
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'You do not have enough credits!' });
  }
  next();
};
