
const bycryptjs = require("bcryptjs")
const User = require("../models/User")
const saltRounds = 10

exports.createUser = async (req, res) => {

    res.render("auth/signup")
}

exports.createUserForm = async(req, res) => {

//1 obtener datos del formulario
const { username, email, password } = req.body

//2 encriptacion de la variable password
const salt = await bycryptjs.genSalt(saltRounds)

//mezla de password
//password no puede ser reversible
const hashedPassword = await bycryptjs.hash(password, salt)
console.log(hashedPassword)
//3 insertar usuario con su pass en db
const newUser = await User.create({
    username,
    email,
    passwordHash: hashedPassword}
)
console.log(newUser)
//4 returnar pagina si el registro fue correcto
res.redirect("/auth/login")
}

exports.loginUser = async (req, res) => {

    res.render("auth/login")

}

exports.loginUserForm = async (req, res) => {

    //1. obtener datos del formulario
    const { email, password } = req.body
    //2. realizar validacion de que no hay datos vacios
    //mensaje de error si campos vacios
    if( email === "" || password === "" ){

        return res.render("auth/login",{
            errorMessage: "tienes campos vacíos, debes llenarlos"
        })

    }
    //3. si todo bien, buscar a usario en bd
    try {
        const foundUser = await User.findOne({ email })

        //si el usuario no existe, manda mensaje de error
        if(!foundUser){

            return res.render("auth/login", {
                errorMessage: "el usuario o contraseña son erroneas. intenta nuevamente"
            })
        }

        //4. si es encontrado, compara password del formulario vs la de la bd
        const isMatched = await bycryptjs.compareSync(password, foundUser.passwordHash)

            //si el password coincide
            if(isMatched === false){
                return res.render("auth/login", {
                    errorMessage: "el usuario o contraseña son erroneas. Intenta nuevamente"
                })
            }
        //5. retorna pagina de exito

        //console.log(req)
        req.session.currentUser = foundUser

        return res.redirect("/user/profile")

    } catch (error) {
        //6. en caso de fallos realizamos manejo de errores
        console.log(error)
    }

}

exports.logoutUser = (req, res) => {
    //ELIMINA LA COOKIE DEL NAVEGADOR
    req.session.destroy((err) => {
        if(err){
            console.log(err)
        }
        res.redirect("/")
    })

}