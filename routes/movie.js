// routes/post.js
const express           = require("express")
const router            = express.Router()

const movieController = require("./../controllers/movieController")

router.get("/create", (req, res) => {
    //http://localhost:3000/movies/ -> render para hbs
    res.render("movies/create")

})

//TRABAJAR FORMULARIO
router.post("/create", movieController.create)

//LISTA
//http://localhost:3000/movies/list
router.get("/list", movieController.moviesList)

//SEE PRODUCT DETAIL
router.get("/:movieid", movieController.oneMovie)

//DELETE PRODUCT
router.post("/:movDeleteid/delete", movieController.movieDelete)

//UPDATE PRODUCT
//http://localhost:3000/products/id/edit <- ROUTE
router.get("/:movieUpdateid/edit", movieController.movieUpdate)
//UPDATE FORM
router.post("/:movieUpdateid/edit", movieController.movieForm)

module.exports = router