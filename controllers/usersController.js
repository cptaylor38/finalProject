const db = require("../models");

module.exports = {
    getProfile: function (req, res) {
        db.User
            .findOne({ id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    create: function (req, res) {
        console.log(`usersController.js - ${req.body} - name: ${req.body.name}, ${req.body.id}`);
        db.User
            .create(req.body)
            .then(dbModel => { res.json(dbModel); console.log(dbModel) })
            .catch(err => res.status(422).json(err));
    }
};
