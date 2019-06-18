const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    user: { type: String },
    body: {
        type: String,
        article: { type: Schema.Types.ObjectId, ref: 'User' }
    }
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;