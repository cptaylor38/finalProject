const router = require("express").Router();
const externalRoutes = require("./external");
const userRoutes = require("./user");
const listingsRoutes = require("./listings")

router.use("/external", externalRoutes);
router.use("/user", userRoutes);
router.use("/listings", listingsRoutes);

module.exports = router;