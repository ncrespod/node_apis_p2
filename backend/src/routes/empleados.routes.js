const { Router } = require('express');
const r = Router();
const c = require('../controllers/empleados.controller');

r.get('/',      c.getAll);
r.post('/',     c.create);
r.get('/:id',   c.getOne);
r.put('/:id',   c.update);
r.delete('/:id', c.remove);

module.exports = r;