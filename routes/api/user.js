const router = require("express").Router();
const usersController = require("../../controllers/usersController");


module.exports = function (app) {
    router
        .route('/')
        .get(usersController.findAll);
}
