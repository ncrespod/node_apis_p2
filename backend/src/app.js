const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/empleados', require('./routes/empleados.routes'));

module.exports = app;