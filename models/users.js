const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, unique: true },
    username: { type: String },
    entries: [
        {
            type: Schema.Types.ObjectId,
            ref: "Entry"
        }
    ]
})


const User = mongoose.model("User", userSchema);
module.exports = User;
