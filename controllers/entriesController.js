const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Entry
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        const id = req.body.id;
        const entry = req.body.entry;
        db.Entry
            .create({ body: entry })
            .then(function (dbEntry) {
                return db.User.findOneAndUpdate({ _id: id }, { $push: { entries: dbEntry } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};
