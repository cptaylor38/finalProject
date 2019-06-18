const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
//const apiRoutes = require("./api");

//router.use("/api", apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
=======
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
>>>>>>> 5474dab5bf1e700ee3782f7ff2e147d79dd191f7
});

module.exports = router;