// controllers/postController.js
const e = require("express")
const Movie          = require("./../models/Movie")

//ruta del boton de crear producto
exports.create = (req, res) => {
    console.log(req.body)
    //desestructuracion objeto
    const { title, date, rate, img} = req.body
    //2 insertar datos en db
    Movie.create({
        title, 
        date,
        rate, 
        img
    })
    .then((newMovie) => {
        console.log(newMovie)
        res.redirect("/movies/list")
    })
    .catch((e) => {console.log(e)})
}

exports.moviesList = (req, res) => {
    // 1. ENCONTRAR LOS PRODUCTOS EN LA BASE DE DATOS
   Movie.find({})
   .then((dbMovie) => {
       console.log(dbMovie)
       //2 ENVIARLOS A CLIENTE

       res.render("movies/list", {
           movieList: dbMovie
       })
   })
   .catch(() => {})
}

exports.oneMovie = (req, res) => {

    const {movieid} = req.params

    Movie.findById(movieid)
    .then((movie) => {
     
        res.render("movies/single", movie)
    })
    .catch((e) => {
        console.log(e)
    })
}

exports.movieDelete = (req, res) => {
   
    // console.log(req.params)
    // res.redirect("/products")
    console.log(req.params)
    const { movDeleteid } = req.params
    Movie.findByIdAndDelete(movDeleteid)
    .then(() => {
        res.redirect("/movies/list")//ESTA ES LA DIRECCION A DONDE ME MANDA
    })
    .catch((e) => {
        console.log(e)
    })
}

exports.movieUpdate = (req, res) => {
    const { movieUpdateid } = req.params
    console.log(req.params)
    Movie.findById(movieUpdateid)
    .then((movie) => {
        console.log(movie)
        res.render("movies/update", movie)
    })
    .catch((e) =>{
        console.log(e)
    })
}

exports.movieForm = (req, res) => {
    console.log(req.params)
    const { movieUpdateid } = req.params
    const {title, date, rate, img} = req.body
    Movie.findByIdAndUpdate(movieUpdateid,{title, date, rate, img},{new:true})
    .then(() => {
        res.redirect("/movies/list")
    })
    .catch((e) => {
        console.log(e)
    })
}