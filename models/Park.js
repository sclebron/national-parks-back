const { Schema, model } = require("mongoose");

const parkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
})

const Park = model("Park", parkSchema);

module.exports = Park;