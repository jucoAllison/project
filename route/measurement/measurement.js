const express = require("express")
const router = express.Router()
const Schema = require("../../model/schema")

router.get("/", (req,res) => {
    // res.send("hahahahah common send your measurements joor")bodychema.find()
    Schema.find()
    .then(data => res.send(data))
})

router.post("/",(req,res) => {
    let newMeasurement = new Schema({
        neck : req.body.neck, 
        slive: req.body.slive, 
        slivelenght: req.body.slivelenght,
        length: req.body.lenght,
        shoulder: req.body.shoulder,

        waist: req.body.waist,
        lap: req.body.lap,
        lenght: req.body.lenght,
        boot: req.body.boot,
        kneel: req.body.kneel
    })
    newMeasurement.save()
    .then(data => {
        res.send(data).status(201)
    })
})

router.delete("/:id", (req,res)=> {
    // findByIdAndDelete(req.params.id)
    Schema.findByIdAndDelete(req.params.id)
    .then(data => {
        Schema.find()
        .then(result => res.send(result).json(result))
    })
})

module.exports = router;