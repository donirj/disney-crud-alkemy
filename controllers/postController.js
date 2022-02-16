// controllers/postController.js

const User          = require("./../models/User")
const Post          = require("./../models/Post")

// controllers/postController.js

exports.createPost = async (req, res) => {

    const dbUsers = await User.find()
    console.log(dbUsers)
    res.render("posts/create", {
        dbUsers
    })

}


exports.createPostForm = async (req, res) => {

    // OBTENCIÓN DE DATOS DEL FORMULARIO
    const { name, age, weigth, history, movies, url, author } = req.body
    // INSERTAMOS EN BASE DE DATOS LA CREACIÓN DE UN NUEVO POST
    const newPost = await Post.create({  name, age, weigth, history, movies, url, author })
    console.log(newPost)
    // SE GENERÓ UN NUEVA PUBLICACIÓN. ACTUALICEMOS AL "USER" DE QUE TIENE UNA NUEVA PUBLICACIÓN
    await User.findByIdAndUpdate(author, { $push: { posts: newPost._id } } )
    // REDIRECCIÓN A PÁGINA DE POSTS
    return res.redirect("/posts")

}


