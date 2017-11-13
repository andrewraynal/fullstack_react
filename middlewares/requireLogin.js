module.exports = (req, res, next) => {
  // next = callback to pass the req onto next middleware in chain
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }
  next();
};
