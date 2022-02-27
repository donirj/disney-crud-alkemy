// index.js
// 1. IMPORTACIONES

const express = require("express");
const app = express();
const hbs = require("hbs");

const connectingDB = require("./config/db");

// 2. MIDDLEWARES

// a. ACTIVAMOS VARIABLES DE ENTORNO (DOTENV)
require("dotenv").config();
// b. ACTIVAMOS BASE DE DATOS
connectingDB();
// c. ACTIVAMOS CARPETA EN PUBLIC
app.use(express.static(__dirname + "/public"));
// d. ACTIVAMOS CARPETA DE VISTAS
app.set("view engine", "hbs");
// e. ACTIVAR RECEPCIÓN DE DATOS EN FORMULARIOS
app.use(express.urlencoded({ extended: true }))
//f. ACTIVAR GESTION DE SESIONES
require("./config/session.config")(app)

//g. ESTABLECER REQ.SESSION EN LAYOUT.HBS, A TRAVÉS DEL
//USO DE RES.LOCALS
//Layout Middleware
app.use((req, res, next) => {

  res.locals.currentUser = req.session.currentUser

  next()

})

//3 ruteo
app.use("/characters", require("./routes/character"));
app.use("/movies", require("./routes/movie"));
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));


app.get("/", (req, res) => {
  res.redirect("/auth/login");
});

// app.get("index", (req, res) => {
//   res.redirect("index");
// });

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
  console.log(`Svr activado: ${process.env.PORT}`);
  return;
});
