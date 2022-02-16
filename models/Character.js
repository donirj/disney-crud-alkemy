// models/Character.js

// 1. IMPORTACIONES
const mongoose          = require("mongoose")

// 2. SCHEMA
const characterSchema = mongoose.Schema({

    name: String,
    age: Number,
    weigth: Number,
    history: String,
    movies: String,
    img: String,

})

// 3. MODELO
const Character = mongoose.model("Character", characterSchema)

// 4. EXPORTACIÓN
module.exports = Character