const express = require("express");
const helmet = require('helmet');
// https://github.com/jucoAllison/project.git
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express()

// CALLING ALL PACKAGES
app.use(helmet())
app.use(cors())
app.use(morgan())

// CALLING THE CLIENT FOLDER
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "fashion")))
app.use("/measurement", require("./route/measurement/measurement"))

// loading mongo DB
mongoose.connect("mongodb+srv://juco-allison:1234567890@todo-list-ipao3.mongodb.net/test?retryWrites=true&w=majority")
.then(() => console.log("mongoDB conected"))
.catch(err => console.error(err)
)

// APP ITSELF
app.get("/",(req,res)=> res.send("this is the main port") )

app.get("*", (req,res) => res.redirect("localhost:2019") )
app.listen(2019, console.log("app started at port 2019"))