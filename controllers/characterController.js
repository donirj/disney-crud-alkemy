// controllers/postController.js
const User          = require("./../models/User")
const Character          = require("./../models/Character")

// controllers/postController.js
exports.create = (req, res) => {
    console.log(req.body)
    //desestructuracion objeto
    const { name, age, weigth, history, movies, img } = req.body
    //2 insertar datos en db
    Character.create({
        name, 
        age,
        weigth, 
        history,
        movies,
        img
    })
    .then((newCharacter) => {
        console.log(newCharacter)
        res.redirect("/characters/list")
    })
    .catch((e) => {console.log(e)})
}

exports.charactersList = (req, res) => {
    // 1. ENCONTRAR LOS PRODUCTOS EN LA BASE DE DATOS
   Character.find({})
   .then((dbCharacter) => {
       console.log(dbCharacter)
       //2 ENVIARLOS A CLIENTE

       res.render("characters/list", {
           characterList: dbCharacter
       })
   })
   .catch(() => {})
}

exports.oneCharacter = (req, res) => {

    const {characterid} = req.params

    Character.findById(characterid)
    .then((character) => {
     
        res.render("characters/single", character)
    })
    .catch((e) => {
        console.log(e)
    })
}

exports.characterDelete = (req, res) => {
   
    // console.log(req.params)
    // res.redirect("/products")
    console.log(req.params)
    const { charDeleteid } = req.params
    Character.findByIdAndDelete(charDeleteid)
    .then(() => {
        res.redirect("/characters/list")//ESTA ES LA DIRECCION A DONDE ME MANDA
    })
    .catch((e) => {
        console.log(e)
    })
}

exports.characterUpdate = (req, res) => {
    const { characterUpdateid } = req.params
    console.log(req.params)
    Character.findById(characterUpdateid)
    .then((character) => {
        console.log(character)
        res.render("characters/update", character)
    })
    .catch((e) =>{
        console.log(e)
    })
}

exports.characterForm = (req, res) => {
    console.log(req.params)
    const { characterUpdateid } = req.params
    const {name, age, weigth, history, movies, img} = req.body
    Character.findByIdAndUpdate(characterUpdateid,{name, age, weigth, history, movies, img},{new:true})
    .then(() => {
        res.redirect("/characters/list")
    })
    .catch((e) => {
        console.log(e)
    })
}