const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const restricted = require("../auth/restricted-middlware");

router.use("/auth", authRouter);
router.use("/users", restricted, usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;
