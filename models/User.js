//1 importaciones
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

// 3. GENERACIÓN DEL MODELO
const User = mongoose.model("User", userSchema);

// 4. EXPORTACIÓN
module.exports = User;
