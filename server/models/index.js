const mongoose = require('mongoose');
const Trainer = require('./trainer');

async function connectToDb() {

  await mongoose.connect('mongodb://localhost:27017/trainers');
}


connectToDb().catch(err => console.log(err));

module.exports = { Trainer } 