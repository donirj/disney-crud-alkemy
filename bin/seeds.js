const mongoose = require("mongoose");

const User = require("./../models/User");

const connectingDB = require("./../config/db");

//activar variables de entorno
require("dotenv").config();

//conectarse a la bd
connectingDB();

//este es el listado de datos que queremos instertar

const greatUsers = [
  {
    username: "doni",
  },
];

const generateUsers = async () => {
  try {
    const dbUsers = await User.create(greatUsers);
    console.log(dbUsers);
    mongoose.connection.close();
  } catch (error) {
    console.log(`un error ocurrió en: ${error}`);
  }
};

generateUsers();
