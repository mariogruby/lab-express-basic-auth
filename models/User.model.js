const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
    },
    username: {
    type: String,
    unique: true,
    required: false,
    trim:true
  },
  password: {
    type: String,
    required: false
  }
},
  {
  timestamps: true
});

const User = model("User", userSchema);

module.exports = User;
