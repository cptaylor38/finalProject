const db = require("../models");

module.exports = {

    delete: function (req, res) {
        db.Entry.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const id = req.body.id;
        const entry = { title: req.body.title, body: req.body.body };
        db.Entry
            .create(entry)
            .then(function (dbEntry) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { entries: dbEntry } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};
