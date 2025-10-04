const Empleado = require('../models/Empleado');
const ctrl = {};

ctrl.getAll = async (_, res) => {
  const data = await Empleado.find();
  res.json(data);
};

ctrl.create = async (req, res) => {
  const doc = new Empleado(req.body);
  await doc.save();
  res.json({ status: 'creado', id: doc._id });
};

ctrl.getOne = async (req, res) => {
  const doc = await Empleado.findById(req.params.id);
  res.json(doc);
};

ctrl.update = async (req, res) => {
  await Empleado.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: 'actualizado' });
};

ctrl.remove = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({ status: 'eliminado' });
};

module.exports = ctrl;