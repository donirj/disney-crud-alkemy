// routes/post.js

const express           = require("express")
const router            = express.Router()

const postController    = require("./../controllers/postController")


// GET - Mostrar un formulario para crear una nueva publicación
// http://localhost: 3000/posts/create
router.get("/create", postController.createPost)

// POST - Enviar datos de formulario a la base de datos y crear una publicación
// http://localhost: 3000/posts/create
router.post("/create", postController.createPostForm)



module.exports = router