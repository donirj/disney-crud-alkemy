// routes/post.js
const express           = require("express")
const router            = express.Router()

const characterController    = require("./../controllers/characterController")

// GET - Mostrar un formulario para crear una nueva publicación
// http://localhost: 3000/characters/create
router.get("/create", (req, res) => {
    res.render("characters/create")
})

// POST - Enviar datos de formulario a la base de datos y crear una publicación
// http://localhost: 3000/characters/create
router.post("/create", characterController.create)

//SEE PRODUCT LIST
router.get("/list", characterController.charactersList)

//SEE PRODUCT DETAIL
router.get("/:characterid", characterController.oneCharacter)

//DELETE PRODUCT
router.post("/:charDeleteid/delete", characterController.characterDelete)

//UPDATE PRODUCT
//http://localhost:3000/products/id/edit <- ROUTE
router.get("/:characterUpdateid/edit", characterController.characterUpdate)
//UPDATE FORM
router.post("/:characterUpdateid/edit", characterController.characterForm)

module.exports = router