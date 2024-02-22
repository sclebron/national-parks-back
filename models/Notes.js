const { Schema, model } = require("mongoose");

const notesSchema = new Schema({

})

const Notes = model("Notes", notesSchema);

module.exports = Notes;