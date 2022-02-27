const MongoStore = require("connect-mongo")
const session = require("express-session")

//GENERA SESION
//IMPLICA CREAR UN ARCHIVO COOKIE QUE SE ENVIA AL FRONTEND, AL CLIENTE Y ES
//CAPTURADO POR EL NAVEGADOR
const generateSession = (app) => {

    app.set("trust proxy", 1)

    app.use(
        session({
            //para desencriptar el token
            secret: process.env.SECRET,
            //recargo forzoso para cada pagina
            resave: true, 
            //sesiones que no estan prendidas
            saveUninitialized: false,
            //archivo guardado en el navegador
            cookie: {
                sameSite: process.env.NODE_ENV ===
                "production" ? "none" : "lax",
                secure: process.env.NODE_ENV ===
                "production",
                httpOnly: true,
                //cuanto tiempo expira la cookie
                maxAge: 600000
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI
            })
        })
    )

}

module.exports = generateSession