// routes/auth.js
const express           = require("express")
const router            = express.Router()

const authController = require("./../controllers/authController")

const routeGuards = require("./../middlewares/route-guard")

//GET - mostrar formulario de creacion usuario
//localhost:3000/auth/signup
router.get("/signup", routeGuards.isLoggedOut, authController.createUser)

//POST - enviar datos del formulario a servidor
//localhost:3000/auth/signup
router.post("/signup", authController.createUserForm)

//GET - crear formulario para iniciar sesion
//localhost:3000/auth/login
router.get("/login", routeGuards.isLoggedOut, authController.loginUser)

//POST - enviar datos del formulario de iniciar sesion al servidor
//localhost:3000/auth/login
router.post("/login", authController.loginUserForm)

//POST - CERRAR SESION
router.post("/logout", authController.logoutUser)

module.exports = router