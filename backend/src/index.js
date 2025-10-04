require('dotenv').config();
require('./database');                 // conecta a MongoDB
const app = require('./app');

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log('API escuchando en http://localhost:' + PORT);
});