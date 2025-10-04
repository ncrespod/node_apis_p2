const mongoose = require('mongoose');

const URI = '';
mongoose.connect(URI)
  .then(() => console.log('MongoDB conectado:', URI))
  .catch(err => console.error('Error MongoDB:', err));

module.exports=mongoose
