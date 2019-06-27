const router = require("express").Router();
const entriesController = require("../../controllers/entriesController");


router
    .route('/:id')
    .put(entriesController.delete);

router
    .route('/create')
    .post(entriesController.create);


module.exports = router;