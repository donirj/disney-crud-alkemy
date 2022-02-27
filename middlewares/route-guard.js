const isLoggedIn = (req, res, next) => {

    //SI NO ESTAS LOGEADO Y QUIERES ACCEDER A ESTA AREA:
    if(!req.session.currentUser) {  
        return res.redirect("/auth/login")
    }

    next()

}

//isLoggedout
//se utiliza para blloquear las areas de registro de iniciar sesion
//de usuarios ya bloqueados
const isLoggedOut = (req, res, next) => {

    if(req.session.currentUser){
        return res.redirect("/")
    }
    next()

}

module.exports = {
    isLoggedIn,
    isLoggedOut
}