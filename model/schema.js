const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let measurement = new Schema({
    neck : Number, 
    slive: Number, 
    slivelenght: Number,
    length: Number,
    shoulder: Number,

    waist: Number,
    lap: Number,
    lenght: Number,
    boot: Number,
    kneel: Number
})

module.exports = mongoose.model("MEASUREMENTS", measurement);