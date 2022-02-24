//1 importaciones
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: [true, "Password is required"]
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
}, {
  timestamps: true
});

// 3. GENERACIÓN DEL MODELO
const User = mongoose.model("User", userSchema);

// 4. EXPORTACIÓN
module.exports = User;
