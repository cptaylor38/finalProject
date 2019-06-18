const router = require("express").Router();
const listingsController = require("../../controllers/listingsController");


module.exports = function (app) {
    router
        .route('/')
        .get(listingsController.findAll);
}