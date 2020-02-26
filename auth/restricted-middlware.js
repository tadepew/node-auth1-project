module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ error: "You are not authorized" });
  }
};
