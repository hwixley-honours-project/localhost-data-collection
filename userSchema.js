var mongoose = require("mongoose")
var Schema = mongoose.Schema

var user = new Schema({
    subject_id: String,
    name: String,
    yob: Number,
    height: Number,
    weight: Number,
    is_female: Boolean,
    medical_conditions: String
})

const User = mongoose.model("User", user)

module.exports = User