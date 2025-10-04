const mongoose = require('mongoose');

const URI = 'mongodb+srv://ncrespod_db_user:upsncrespod@ups.mjifrhp.mongodb.net/';
mongoose.connect(URI)
  .then(() => console.log('MongoDB conectado:', URI))
  .catch(err => console.error('Error MongoDB:', err));

module.exports=mongoose
