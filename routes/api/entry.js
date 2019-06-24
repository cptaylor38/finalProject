const router = require("express").Router();
const entriesController = require("../../controllers/entriesController");


router
    .route('/')
    .get(entriesController.findAll);

router
    .route('/create')
    .post(entriesController.create);


module.exports = router;