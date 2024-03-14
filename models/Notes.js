const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
    header: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    images: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    }
})

const Notes = model("Notes", notesSchema);

module.exports = Notes;