// db.js
const mongoose = require("mongoose");

// ASYNC - AWAIT === PROMESAS EVOLUCIONADAS (SON EXACTAMENTE LO MISMO, SOLO QUE MÁS LIMPIAS)

const connectingDB = async () => {
  // ERROR HANDLING - try catch - node.js
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return console.log("Conectados a la base de datos");
  } catch (error) {
    console.log(error);
    process.exit(1); // YA INCLUEY mongoose.connection.close()
  }
};

module.exports = connectingDB;
