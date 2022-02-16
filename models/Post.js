// models/Post.js

// 1. IMPORTACIONES
const mongoose          = require("mongoose")

// 2. SCHEMA
const postSchema = mongoose.Schema({
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    age: Number,
    weigth: Number,
    history: String,
    movies: String,
    url: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId
    }]
})


// 3. MODELO
const Post = mongoose.model("Post", postSchema)


// 4. EXPORTACIÓN
module.exports = Post