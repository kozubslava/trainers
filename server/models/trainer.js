const { Schema, model } = require('mongoose');

const trainerSchema = new Schema({
  fullName: String,
  birthday : Date,
  isMale : Boolean,
  contacts : {
    phoneNumber: Number,
    email: String
  }
});

const Trainer = model('trainer', trainerSchema);

module.exports = Trainer;