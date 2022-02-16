// models/Character.js

// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA
const movieSchema = mongoose.Schema({

    title: String,
    date: Number,
    rate: Number,
    img: String

})

//3. MODELO
const Movie = mongoose.model("Movie", movieSchema)

//4. EXPOTACION
module.exports = Movie