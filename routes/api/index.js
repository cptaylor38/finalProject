const router = require("express").Router();
const externalRoutes = require("./external");
const userRoutes = require("./user");
const entriesRoutes = require("./entry")

router.use("/external", externalRoutes);
router.use("/user", userRoutes);
router.use("/entries", entriesRoutes);

module.exports = router;