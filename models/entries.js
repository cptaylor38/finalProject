const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntriesSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String,
        entry: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    date: { type: Date, default: Date.now }
});

const Entry = mongoose.model("Entry", EntriesSchema);

module.exports = Entry;