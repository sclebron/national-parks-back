const { Schema, model } = require("mongoose");

const parkSchema = new Schema({
    
})

const Park = model("Park", parkSchema);

module.exports = Park;